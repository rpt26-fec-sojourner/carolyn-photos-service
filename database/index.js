const mongoose = require('mongoose');

const url = 'mongodb://127.0.0.1:27017/fec';
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.once('open', _ => {
  console.log('database connected: ', url);
});
db.on('error', err => {
  console.log('db connection error: ', err);
});

let photoGallerySchema = mongoose.Schema({
  listingId: Number,
  photo1: [{ fullsize: String, thumbnail: String }],
  photo2: [{ fullsize: String, thumbnail: String }],
  photo3: [{ fullsize: String, thumbnail: String }],
  photo4: [{ fullsize: String, thumbnail: String }],
  photo5: [{ fullsize: String, thumbnail: String }]
});

let PhotoGallery = mongoose.model('PhotoGallery', photoGallerySchema);

const getPhotos = (id) => {
  return PhotoGallery.findOne({ listingId: id });
  // .then((doc) => {
  //   return doc;
  // })
  // .catch((err) => {
  //   console.log('getPhotos database error', err);
  // });
};

module.exports.getPhotos = getPhotos;
