const PhotoGallery = require('./index');

const generateImageUrls = () => {
  const data = [];
  let imageCount = 0;
  let url;
  let thumbnailFile;
  let fullsizeFile;
  let imageId = 100;

  while (imageCount < 100) {
    url = `https://picsum.photos/id/${imageId}`;
    fullsizeFile = `${url}/600/400`;
    thumbnailFile = `${url}/300/200`;
    data.push({ fullsize: fullsizeFile, thumbnail: thumbnailFile });
    imageId += 1;
    imageCount += 1;
  }

  return data;
};

const composePhotoGalleries = () => {
  const result = [];
  let listingId = 1;
  let data = generateImageUrls();
  let randomIndex;

  const getRandomIndex = () => {
    return Math.floor(Math.random() * data.length);
  };

  while (listingId <= 100) {
    result.push({
      listingId,
      photo1: data[getRandomIndex()],
      photo2: data[getRandomIndex()],
      photo3: data[getRandomIndex()],
      photo4: data[getRandomIndex()],
      photo5: data[getRandomIndex()]
    });

    listingId += 1;
  }

  return result;
};

const seedDb = () => {
  let data = generateImageUrls();
  fs.writeFile(__dirname + '/data.json', JSON.stringfiy)
};
