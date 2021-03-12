const { getPhotos } = require('../client/src/index.jsx');

beforeEach(() => {
  jest.useFakeTimers();
});

describe ('generateImageUrls function', () => {
  test('it should find a document by listingId', () => {
    const input = 3;
    const output = 'https://fec-sojourner.s3.us-east-2.amazonaws.com/image66.jpg';
    // const output = 4;

    expect(getPhotos(input).photo1[0].fullsize).toEqual(output);
    expect(4).toEqual(output);
  });
});


