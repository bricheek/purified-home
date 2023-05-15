const Submission = require('../entities/submission');
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
  projectId: 'purified-home',
  keyFilename: '../keys/purified-home-4ac6c85e970d.json',
});

class SubmissionService  {
    async put(request) {
          // create submission object
          const currentSubmission = new Submission();
          currentSubmission.firstName = request.firstName;
          currentSubmission.lastName = request.lastName;
          currentSubmission.emailAddress = request.emailAddress;
          currentSubmission.id = id;
          // must convert to regular javascript object to insert to db
        const data = {
            firstName: `${currentSubmission.firstName}`,
            lastName: `${currentSubmission.lastName}`,
            emailAddress: `${currentSubmission.emailAddress}`,
            id: `${currentSubmission.id}`
        }
            await db.collection('submissions').doc(data.emailAddress).set(data);
    }
}

module.exports = SubmissionService