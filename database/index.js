const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let photoGallerySchema = mongoose.Schema({
  id: Number,
  photo1: [{ fullsize: String, thumbnail: String }],
  photo2: [{ fullsize: String, thumbnail: String }],
  photo3: [{ fullsize: String, thumbnail: String }],
  photo4: [{ fullsize: String, thumbnail: String }],
  photo5: [{ fullsize: String, thumbnail: String }]
});

let PhotoGallery = mongoose.model('Photos', photoGallerySchema);
