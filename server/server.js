/** @format */

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://nickty:Nick124578@cluster0.22anv.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
// client.connect((err) => {
//   const collection = client.db('test').collection('devices');
//   // perform actions on the collection object
//   client.close();
// });

app.get('/', function (req, res) {
  res.status(200).send('Hello World!');
});
app.post('/user', function (req, res) {
  res.status(200).send('Hello World!');
});

const port = process.env.PORT || 3000;

const server = app.listen(port, function () {
  console.log('Express server listening on port ' + port);
});
