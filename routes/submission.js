const SubmissionService = require("../services/submission-service")

const express = require('express')
const app = express();
app.use(express.json());
const router = express.Router();
    
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