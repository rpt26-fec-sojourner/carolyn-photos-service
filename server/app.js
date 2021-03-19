const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getPhotos } = require('../database/index');
require('core-js/stable');
require('regenerator-runtime/runtime');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/:id/photos', (req, res) => {
  getPhotos(req.params.id)
    .then((photos) => {
      res.send(photos);
    })
    .catch((err) => {
      console.log('getPhotos server error: ', err);
      res.end();
    });
});

// app.get('/:id/photos', (req, res) => {
//   console.log(process.cwd() + '/client/dist/index.html');
//   res.sendFile(process.cwd() + '/client/dist/index.html');
// });

module.exports = app;
