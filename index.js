/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'Faery Talk';
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const speechOutput = 'I am your fairy. I am a listener. And I hope I can always be there for you when you need me.'

        this.response.cardRenderer(SKILL_NAME, 0);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
      'noLove': function () {
        const speechOutput = "because they are not little angels like you. They don't understand you.";

        this.response.cardRenderer(SKILL_NAME, 1);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
          'AmIBad': function () {
        const speechOutput = "you are not bad, you are just special.";

        this.response.cardRenderer(SKILL_NAME, 2);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
          'noBroccoli': function () {
        const speechOutput = "You need to finish your broccoli so you can have dessert today";

        this.response.cardRenderer(SKILL_NAME, 3);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
          'Terrible': function () {
        const speechOutput = "you are not terrible, you are just special.";

        this.response.cardRenderer(SKILL_NAME, 4);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
          'HowDoYouKnow': function () {
        const speechOutput = "I'm your best friend. I know you very well";

        this.response.cardRenderer(SKILL_NAME, 5);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
        'NoCommunication': function () {
        const speechOutput = "There are a lot of ways of communicating, language is only one of the ways. Find your own ways to communicate with other people. It may take time. That’s okay. Be patient. But more importantly, try to be best friend with yourself. And I am always here for you.";

        this.response.cardRenderer(SKILL_NAME, 6);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
        'NoChange': function () {
        const speechOutput = "Sometimes changes are good. They bring new opportunities to life. Being adaptive is an important quality. It is okay to take some time to develop that quality. But environments are not the most important thing, people are. The control is in your hands.";

        this.response.cardRenderer(SKILL_NAME, 7);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
       'TooEmotion': function () {
        const speechOutput = "Try to be aware of what usually upsets you and think about why. A big chance is that you were overreacting. What important is not what happened, but what you do with what happened. You attitude can change everything";

        this.response.cardRenderer(SKILL_NAME, 8);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
         'NoTeacher': function () {
        const speechOutput = "What do you like? What do you want to learn? You can always develop your interests outside school, there is no confliction. But what teachers teach at school is beyond the content, it’s important in building your ability of learning, critical thinking, and perseverance. You will need these qualities your whole life.";

        this.response.cardRenderer(SKILL_NAME, 9);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
        'NoPlayer': function () {
        const speechOutput = "People can be shy. They don’t come to ask you to play with them is probably because they are not sure if you want to play with them. Maybe you are shy too. So if you want to play with someone, don’t be shy. Just go and ask them. You have every right to choose your friends but you need to let them know first that you want to be friends with them.";

        this.response.cardRenderer(SKILL_NAME, 10);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
        'BeInvisible': function () {
        const speechOutput = "Nobody is perfect. We all have flaws. I understand that attention from others can put pressure on people sometimes. But you don’t need to care about other people’s opinions that much. They are not important. Get rid of your “imaginary audience” so you can live your own life.";

        this.response.cardRenderer(SKILL_NAME, 11);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
//*************************************    
    
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
