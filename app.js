const submission = require('./routes/submission.js');
const express = require('express');
const app = express();
const path = require('path');
// app.urlencoded({extended:true})
app.use(express.json());

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

// display form on homepage - this should be moved to UI app eventually

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/form.html'));
});

app.post('/', submission);
// app.use('/submission', submission.route);


