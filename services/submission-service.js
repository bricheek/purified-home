const Submission = require('../entities/submission');
// const Firestore = require('@google-cloud/firestore');
const uuid = require('uuid')
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// const functions = require('firebase-functions');
// const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
// const secrets = new SecretManagerServiceClient();

// async function getSecretValue(name) {
//   const [version] = await SecretManagerServiceClient.accessSecretVersion({
//     name: `projects/purified-home/secrets/${name}/versions/latest`,
//   });

//   const payload = version.payload?.data?.toString();
//   return payload;
// }

// const purifiedHomeSecret = functions.https.onRequest(
//   async (request, response) => {
//     const mySecret = await getSecretValue('purified-home-secret');
//     return mySecret
//   }
// );
initializeApp({
  credential: applicationDefault()
});

const db = getFirestore();

// const db = new Firestore({
//   projectId: 'purified-home',
//   // deployed key path
//   keyFilename: purifiedHomeSecret
  // local server key path
  // keyFilename: '../keys/purified-home-4ac6c85e970d.json',
});

class SubmissionService  {
    async put(request) {
          // create submission object
          const currentSubmission = new Submission();
          currentSubmission.firstName = request.firstName;
          currentSubmission.lastName = request.lastName;
          currentSubmission.emailAddress = request.emailAddress;
          // must convert to regular javascript object to insert to db
        const data = {
            firstName: `${currentSubmission.firstName}`,
            lastName: `${currentSubmission.lastName}`,
            emailAddress: `${currentSubmission.emailAddress}`,
        }
            await db.collection('submissions').doc(data.emailAddress).set(data);
    }
}

module.exports = SubmissionService