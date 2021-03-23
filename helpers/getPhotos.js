const mongoose = require('mongoose');
const PhotoGallery = require('../database/index');

mongoose.connect('mongodb://127.0.0.1:27017/fec', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
const db = mongoose.connection;

const getPhotos = (id) => {
  return PhotoGallery.findOne({ listingId: id });
};

module.exports.getPhotos = getPhotos;
