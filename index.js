const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speakOutput = 'Hi there, How are you feeling today?';

    // The response builder contains is an object that handles generating the
    // JSON response that your skill returns.
    return handlerInput.responseBuilder
      .speak(speakOutput).reprompt(speakOutput) // The text passed to speak, is what Alexa will say.
      .getResponse();
  },
};

const HelloHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'LanguageIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Thats great. I am glad to hear about that. How are your medications going. Are you on track with them?;'

    // The response builder contains is an object that handles generating the
    // JSON response that your skill returns.
    return handlerInput.responseBuilder
      .speak(speakOutput).reprompt(speakOutput) // The text passed to speak, is what Alexa will say.
      .getResponse();
  },
};

const MedicationHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'MedicationIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'Amazing. Let me know if you need anything. I will always be there for you.';

    // The response builder contains is an object that handles generating the
    // JSON response that your skill returns.
    return handlerInput.responseBuilder
      .speak(speakOutput) // The text passed to speak, is what Alexa will say.
      .getResponse();
  },
};


const HelpHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'BadIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'I am so sorry to hear about that. Would you like to talk about your day';

    return handlerInput.responseBuilder
      .speak(speakOutput).reprompt(speakOutput)
      .getResponse();
  },
};

const FollowHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'FoIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'I am all ears';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const FollownegHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'FolIntent';
  },
  handle(handlerInput) {
    const speakOutput = 'If you need help you can always reach out to Canadian Mental Health Association at 1-888-893-8333. Take care.';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};


const CancelAndStopHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speakOutput = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speakOutput)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
  //  console.log(Session ended with reason: ${handlerInput.requestEnvelope.request.reason});

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
   // console.log(Error handled: ${error.message});
    console.log(error.trace);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.').reprompt("Could you repeat that")
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    HelloHandler,
    MedicationHandler,
    HelpHandler,
    FollowHandler,
    FollownegHandler,
    
    
    CancelAndStopHandler,
    SessionEndedRequestHandler,
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();