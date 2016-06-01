# Unit testing an Amazon Alexa skill with Node.js and Jasmine.
A simple Amazon Alexa skill that demonstrates how to write unit tests with Jasmine.
Developed while working on the Alexa skill [Chef Basil](http://chefbasil.co), the app that allows you to cook your favorite recipes hands-free. Read the companion article at [medium.com](https://medium.com/@jjbskir/unit-testing-an-amazon-alexa-skill-with-node-js-and-jasmine-98982544471f).

## Concepts
1. How to write a unit test around an Amazon Alexa skill intent.
2. Mocking requests and responses.
3. Testing if SSML responses are valid.

## Setup
1. Clone the git project. Project was built using node version 4.2.6.
2. Go to the project directory `cd alexa-skill-unit-tests-js`
3. Install node modules `npm i`
4. Set up Jasmine `npm i jasmine-node -g`
5. Run tests `jasmine-node spec/`

## TODO
1. Card validator.
2. Max length of speech and card validator.
3. SSML attribute value validator.
4. Validate all SSML tags get closed properly.
5. Unit tests around validators.

## Further Reading
1. [Hello World Application](https://github.com/amzn/alexa-skills-kit-js/tree/master/samples/helloWorld)
2. [Jasmine Documentation](http://jasmine.github.io/1.3/introduction.html)
3. [Speech Synthesis Markup Language](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speech-synthesis-markup-language-ssml-reference)
4. [Alexa Response Constraints](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/alexa-skills-kit-interface-reference)