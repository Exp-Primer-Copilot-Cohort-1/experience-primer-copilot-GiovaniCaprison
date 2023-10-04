// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

const comments = [
  { id: 1, author: 'Morgan McCircuit', text: 'Great picture!' },
  { id: 2, author: 'Bending Bender', text: 'Excellent stuff' },
];

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const newComment = {
    id: Date.now(),
  }
});



