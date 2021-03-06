const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fec');

let photoGallerySchema = mongoose.Schema({
  id: Number,
  photo1: [{ fullsize: String, thumbnail: String }],
  photo2: [{ fullsize: String, thumbnail: String }],
  photo3: [{ fullsize: String, thumbnail: String }],
  photo4: [{ fullsize: String, thumbnail: String }],
  photo5: [{ fullsize: String, thumbnail: String }]
});

let PhotoGallery = mongoose.model('Photos', photoGallerySchema);

const createPhotosArr = () => {
  const photos = [];
  let numPhotos = 0;
  let filepath;
  let thumbnailFile;
  let fullsizeFile;
  let id = 100;

  while (numPhotos < 100) {
    filepath = `https://picsum.photos/id/${id}`;
    fullsizeFile = `${filepath}/600/400`;
    thumbnailFile = `${filepath}/300/200`;
    photos.push({ fullsize: fullsizeFile, thumbnail: thumbnailFile });
    id += 1;
    numPhotos += 1;
  }

  return photos;
};
