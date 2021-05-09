/**
  *
  * main() will be run when you invoke this action
  *
  * @param Cloud Functions actions accept a single parameter, which must be a JSON object.
  *
  * @return The output of this action, which must be a JSON object.
  *
  */
  

const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
  
function main(params) {
	const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
        version: '2021-03-25',
        authenticator: new IamAuthenticator({
          apikey: "Z9R0b0ISYtttlPjUG6BGgk2Katyv0hhC_NZd67gFMKcS",
        }),
        serviceUrl: "https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/4c317442-8317-4691-bcb1-f95db47a1a2e",
    });

    const analyzeParams = {
        'text': params.textchido,
        'features': {
            'entities': {
                'sentiment': true,
                'emotion': true,
                'limit': 5,
            },
        }
    };

    return naturalLanguageUnderstanding.analyze(analyzeParams);
    /*.then(analysisResults => {
        console.log(JSON.stringify(analysisResults, null, 2));
    }).catch(err => {
        console.log('error:', err);
    });*/
    
    
}