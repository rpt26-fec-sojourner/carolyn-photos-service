const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { getPhotos } = require('../helpers/getPhotos');
require('core-js/stable');
require('regenerator-runtime/runtime');

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/', (req, res) => {
  res.redirect('/1');
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

module.exports = app;
