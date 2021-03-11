const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;
const { getPhotos } = require('../database/index');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/photos/:id', (req, res) => {
  getPhotos(req.params.id)
    .then((photos) => {
      res.send(photos);
    })
    .catch((err) => {
      console.log('getPhotos server error: ', err);
      res.end();
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
