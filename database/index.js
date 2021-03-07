const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec');

let photoGallerySchema = mongoose.Schema({
  listingID: Number,
  photo1: [{ fullsize: String, thumbnail: String }],
  photo2: [{ fullsize: String, thumbnail: String }],
  photo3: [{ fullsize: String, thumbnail: String }],
  photo4: [{ fullsize: String, thumbnail: String }],
  photo5: [{ fullsize: String, thumbnail: String }]
});

module.exports = mongoose.model('PhotoGallery', photoGallerySchema);
