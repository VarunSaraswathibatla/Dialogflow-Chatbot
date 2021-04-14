const dialogflow = require('@google-cloud/dialogflow');
const uuid = require('uuid');


async function runSample(projectId = 'varun-assistant-el9c') {
 
  const sessionId = uuid.v4();

  
  const sessionClient = new dialogflow.SessionsClient({
    keyFilename:Mongod request manager;
  });                    
      
      

  const sessionPath = sessionClient.projectAgentSessionPath(projectId, sessionId);

  
  const request = {
    session: sessionPath,
    queryInput: {
      text: {
     
        text: 'I am bored?',
        // The language used by the client (en-US)
        languageCode: 'en-US',
      },
    },
  };

  
  const responses = await sessionClient.detectIntent(request);
  console.log('Detected intent');
  const result = responses[0].queryResult;
  console.log(`  Query: ${result.queryText}`);
  console.log(`  Response: ${result.fulfillmentText}`);
  if (result.intent) {
    console.log(`  Intent: ${result.intent.displayName}`);
  } else {
    console.log(`  No intent matched.`);
  }
}
runSample()
