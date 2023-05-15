// const Submission = require("../services/submission-service")
const Submission = require('../entities/submission');

const express = require('express')
const app = express();
app.use(express.json());
const router = express.Router();
const Firestore = require('@google-cloud/firestore');


const db = new Firestore({
    projectId: 'purified-home',
    keyFilename: '../keys/purified-home-4ac6c85e970d.json',
  });

    router.get('/submission/:id', async (req, res) => {
        const submission = await new SubmissionService().get(req.params.id)
        res.status(200).send(submission)
    })
    
    router.post('/', async (req, res) => {
        const request = req.body;
        // const submission = await new SubmissionService().put(request)
        const currentSubmission = new Submission();
          currentSubmission.firstName = req.body.firstName;
          currentSubmission.lastName = req.body.lastName;
          currentSubmission.emailAddress = req.body.emailAddress;
        const data = {
            firstName: `${currentSubmission.firstName}`,
            lastName: `${currentSubmission.lastName}`,
            emailAddress: `${currentSubmission.emailAddress}`
        }
         // currentSubmission.id = id;
            await db.collection('submissions').doc(data.emailAddress).set(data);
        res.status(200).send(currentSubmission);
    })
    
    router.delete('/submission/:id', async (req, res) => {
        const submission = await new SubmissionService().delete(req.params.id)
        res.status(200).send(submission)
    })
    
    module.exports = router;