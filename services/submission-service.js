const Submission = require('../entities/submission');
const uuid = require('uuid')
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

initializeApp({
  credential: applicationDefault()
});

const db = getFirestore();

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