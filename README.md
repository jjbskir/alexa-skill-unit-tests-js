# Unit test an Amazon Alexa skill with Node.js and Jasmine.
A simple Amazon Alexa skill that demonstrates how to write unit tests with Jasmine.
Developed while working on the Alexa skill [Chef Basil](http://chefbasil.co), the app that allows you to cook your favorite recipes hands-free.

## Concepts
1. How to write unit tests around your amazon alexa skill intents.
2. Mocking intents, sessions, and responses.
3. Testing if SSML responses are correct.

## Setup
1. Clone the git project.
2. Install node modules `npm i`.
3. Set up Jasmine `npm i jasmine-node -g`.
4. Run tests `jasmine-node spec/`.

## Examples
    User: "Alexa, tell Greeter to say hello"
    Alexa: "Hello World!"