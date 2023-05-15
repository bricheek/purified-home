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
          currentSubmission.firstName = request.firstName;
          currentSubmission.lastName = request.lastName;
          currentSubmission.emailAddress = request.emailAddress;
        const data = {
            firstName: `${currentSubmission.firstName}`,
            lastName: `${currentSubmission.lastName}`,
            emailAddress: `${currentSubmission.emailAddress}`
        }
         // currentSubmission.id = id;
            await db.collection('submissions').doc(data.emailAddress).set(data);
    }
}

module.exports = SubmissionService