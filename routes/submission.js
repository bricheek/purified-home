const SubmissionService = require("../services/submission-service")
// const Submission = require('../entities/submission');

const express = require('express')
const app = express();
app.use(express.json());
const router = express.Router();
// const Firestore = require('@google-cloud/firestore');


// const db = new Firestore({
//     projectId: 'purified-home',
//     keyFilename: '../keys/purified-home-4ac6c85e970d.json',
//   });

    router.get('/submission/:id', async (req, res) => {
        const submission = await new SubmissionService().get(req.params.id)
        res.status(200).send(submission)
    })
    
    router.post('/', async (req, res) => {
        const request = req.body;
        const submission = await new SubmissionService().put(request)
        res.status(200).send(submission);
    })
    
    router.delete('/submission/:id', async (req, res) => {
        const submission = await new SubmissionService().delete(req.params.id)
        res.status(200).send(submission)
    })
    
    module.exports = router;