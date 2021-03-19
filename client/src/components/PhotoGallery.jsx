import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 1,
      photo1: '',
      photo2: '',
      photo3: '',
      photo4: '',
      photo5: '',
      photo1Thumbnail: '',
      photo2Thumbnail: '',
      photo3Thumbnail: '',
      photo4Thumbnail: '',
      photo5Thumbnail: ''
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos(id) {
    axios.get(`/${id}/photos`)
      .then((response) => {
        console.log(response.data);
        this.setState ({
          photo1: response.data.photo1[0].fullsize,
          photo2: response.data.photo2[0].fullsize,
          photo3: response.data.photo3[0].fullsize,
          photo4: response.data.photo4[0].fullsize,
          photo5: response.data.photo5[0].fullsize,
          photo1Thumbnail: response.data.photo1[0].thumbnail,
          photo2Thumbnail: response.data.photo2[0].thumbnail,
          photo3Thumbnail: response.data.photo3[0].thumbnail,
          photo4Thumbnail: response.data.photo4[0].thumbnail,
          photo5Thumbnail: response.data.photo5[0].thumbnail
        });
      })
      .catch((error) => {
        console.log('getPhotos client error: ', error);
      });
  }

  componentDidMount() {
    // this.getPhotos(this.state.listingId);

    let listingId = window.location.href.split('/').slice(-1);
    this.getPhotos(listingId);
  }

  render() {
    return (
      <div className="container">
        <div className="gallery">
          <figure class="gallery_item gallery_item-1">
            <img src={this.state.photo1} className="gallery_img" alt="image 1" style={{ borderRadius: '15px 0 0 15px' }}></img>
          </figure>
          <figure class="gallery_item gallery_item-2">
            <img src={this.state.photo2} className="gallery_img" alt="image 2"></img>
          </figure>
          <figure class="gallery_item gallery_item-3">
            <img src={this.state.photo3} className="gallery_img" alt="image 3" style={{ borderRadius: '0 15px 0 0' }}></img>
          </figure>
          <figure class="gallery_item gallery_item-4">
            <img src={this.state.photo4} className="gallery_img" alt="image 4"></img>
          </figure>
          <figure class="gallery_item gallery_item-5">
            <img src={this.state.photo5} className="gallery_img" alt="image 5" style={{ borderRadius: '0 0 15px 0' }}></img>
          </figure>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
// module.exports.PhotoGallery= PhotoGallery;
