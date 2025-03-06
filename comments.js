// Create web server
// Create a route for GET /comments
// Return a JSON response with all the comments
// Start the server and test the route with Postman

const express = require('express');
const app = express();
const comments = require('./comments');

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server started');
});