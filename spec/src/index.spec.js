var index = require('../../src/index'),
    framework = require('../alexa-test-framework'),
    intent = framework.intent,
    session = framework.session,
    response = framework.response;

describe('index', function() {
    var helloWorld;

    framework.beforeEachMatchers();
    beforeEach(function() {
        helloWorld = new index.HelloWorld();
    });
    it('HelloWorldIntent', function() {
        helloWorld.intentHandlers.HelloWorldIntent(intent, session, response);

        expect(response.tellWithCard).toHaveBeenCalled();
        args = response.tellWithCard.argsForCall[ 0 ];
        expect(args[ 0 ]).isSSML('Hello World!');
        expect(args[ 1 ]).toEqual(jasmine.any(String));
        expect(args[ 2 ]).toEqual(jasmine.any(String));
    });
    it('AMAZON.HelpIntent', function() {
        helloWorld.intentHandlers[ 'AMAZON.HelpIntent' ](intent, session, response);

        expect(response.ask).toHaveBeenCalled();
        args = response.ask.argsForCall[ 0 ];
        expect(args[ 0 ]).isSSML('You can say hello to me!');
        expect(args[ 1 ]).toEqual(jasmine.any(String));
    });
});