const Submission = require('../entities/submission');
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'purified-home',
  keyFilename: '../keys/purified-home-4ac6c85e970d.json',
});

const data = {
    id: 'guid4',
    firstName: 'Bon',
    lastName: 'Scott',
    emailAddress: 'bon@acdc.com'
  };

class SubmissionService  {
    async put(request) {
          // create submission object
          const currentSubmission = new Submission();
          console.log('submission: ' + currentSubmission)
          currentSubmission.firstName = request.firstName;
          currentSubmission.lastName = request.lastName;
          currentSubmission.emailAddress = request.emailAddress;
          currentSubmission.id = id;
         // Add a new document in collection "submissions" with data from post reques
            return await db.collection('submissions').doc(currentSubmission.id).set(currentSubmission);
    }
}

module.exports = SubmissionService