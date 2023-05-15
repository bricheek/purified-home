const SubmissionService = require('./services/submission-service.js') ;
const submission = require('./routes/submission.js');
const express = require('express');
const app = express();
// app.urlencoded({extended:true})
app.use(express.json());



// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.use('/', submission);
// app.use('/submission', submission.route);

// const submissionService = new SubmissionService();
// submissionService.put()

