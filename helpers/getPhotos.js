const mongoose = require('mongoose');
const config = require('../config');
const PhotoGallery = require('../database/index');

mongoose.connect(config.MONGO_URI, {
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
