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
      photo6: '',
      photo7: '',
      photo1Thumbnail: '',
      photo2Thumbnail: '',
      photo3Thumbnail: '',
      photo4Thumbnail: '',
      photo5Thumbnail: '',
      photo6Thumbnail: '',
      photo7Thumbnail: ''
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos(id) {
    axios.get(`http://localhost/3000/${id}/photos`)
      .then((response) => {
        // console.log(response.data);
        this.setState ({
          photo1: response.data.photo1[0].fullsize,
          photo2: response.data.photo2[0].fullsize,
          photo3: response.data.photo3[0].fullsize,
          photo4: response.data.photo4[0].fullsize,
          photo5: response.data.photo5[0].fullsize,
          photo6: response.data.photo6[0].fullsize,
          photo7: response.data.photo6[0].fullsize,
          photo1Thumbnail: response.data.photo1[0].thumbnail,
          photo2Thumbnail: response.data.photo2[0].thumbnail,
          photo3Thumbnail: response.data.photo3[0].thumbnail,
          photo4Thumbnail: response.data.photo4[0].thumbnail,
          photo5Thumbnail: response.data.photo5[0].thumbnail,
          photo6Thumbnail: response.data.photo6[0].thumbnail,
          photo7Thumbnail: response.data.photo7[0].thumbnail
        });
      })
      .catch((error) => {
        console.log('getPhotos client error: ', error);
      });
  }

  componentDidMount() {
    let listingId = window.location.href.split('/').slice(-1);
    this.getPhotos(listingId);
  }

  render() {
    return (
      <div className="container">
        <div className="gallery">
          <figure className="gallery_item gallery_item_1">
            <img src={this.state.photo1} className="gallery_img gallery_img_1" alt="image 1"></img>
          </figure>
          <figure className="gallery_item gallery_item_2">
            <img src={this.state.photo2} className="gallery_img gallery_img_2" alt="image 2"></img>
          </figure>
          <figure className="gallery_item gallery_item_3">
            <img src={this.state.photo3} className="gallery_img gallery_img_3" alt="image 3"></img>
          </figure>
          <figure className="gallery_item gallery_item_4">
            <img src={this.state.photo4} className="gallery_img gallery_img_4" alt="image 4"></img>
          </figure>
          <div className="gallery_item gallery_item_5">
            <img src={this.state.photo5} className="gallery_img gallery_img_5" alt="image 5"></img>
            <button className="btn"><i class="fas fa-th"></i> Show all photos</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PhotoGallery;
// module.exports.PhotoGallery= PhotoGallery;
