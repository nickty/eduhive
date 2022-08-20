/** @format */

const express = require('express');
const mongoose = require('mongoose');
const { createPost } = require('./controller/post');
const app = express();
const { createUser } = require('./controller/user');

mongoose
  .connect(
    'mongodb+srv://nurmizan:f563F23Wnd1TKuam@cluster0.s4eitg7.mongodb.net/?retryWrites=true&w=majority'
    // {
    //   userNewUrlPaser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    // }
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((e) => {
    console.log('not connected');
  });

const cors = require('cors');
app.use(cors());

app.use(express.json());

app.get('/', function (req, res) {
  res.status(200).send('Hello World!');
});
app.post('/user', createUser);
app.post('/post', createPost);

const port = process.env.PORT || 5000;

const server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
