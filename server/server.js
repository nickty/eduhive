/** @format */

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const { MongoClient } = require('mongodb');
const client = new MongoClient(
  'mongodb+srv://nickty:OSX7XdzElqg737CS@cluster0.22anv.mongodb.net/?retryWrites=true&w=majority'
);

(async () => {
  try {
    await client.connect();
    const dbRole = await client.db().command({ hello: 1 });
    console.log(
      `Role of database - Host: ${dbRole.me}  Is primary: ${dbRole.isWritablePrimary}`
    );
    await client.close();
  } catch (e) {
    console.log('Error: ', e.message);
  }
})();

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
