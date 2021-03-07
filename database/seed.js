const fs = require('fs');
const PhotoGallery = require('./index');

const generateImageUrls = () => {
  const urls = [];
  let imageCount = 0;
  let url;
  let thumbnailFile;
  let fullsizeFile;
  let imageId = 100;

  while (imageCount < 100) {
    url = `https://picsum.photos/id/${imageId}`;
    fullsizeFile = `${url}/600/400`;
    thumbnailFile = `${url}/300/200`;
    urls.push({ fullsize: fullsizeFile, thumbnail: thumbnailFile });
    imageId += 1;
    imageCount += 1;
  }

  return urls;
};

const composePhotoGalleries = () => {
  const photoGalleries = [];
  let listingId = 1;
  let urls = generateImageUrls();
  let randomIndex;

  const getRandomIndex = () => {
    return Math.floor(Math.random() * urls.length);
  };

  while (listingId <= 100) {
    photoGalleries.push({
      listingId,
      photo1: urls[getRandomIndex()],
      photo2: urls[getRandomIndex()],
      photo3: urls[getRandomIndex()],
      photo4: urls[getRandomIndex()],
      photo5: urls[getRandomIndex()]
    });

    listingId += 1;
  }

  return photoGalleries;
};

const seedDb = () => {
  let photoGalleries = composePhotoGalleries();

  fs.writeFile(__dirname + '/data.json', JSON.stringify(photoGalleries), (err) => {
    if (err) {
      return console.log(err);
    }

    for (const element of photoGalleries) {
      PhotoGallery.insertMany({
        listingId: element.listingId,
        photo1: element.photo1,
        photo2: element.photo2,
        photo3: element.photo3,
        photo4: element.photo4,
        photo5: element.photo5
      }).then(() => {
        console.log('data inserted');
      }).catch((err) => {
        console.log(err);
      });
    }
  });
};

seedDb();
