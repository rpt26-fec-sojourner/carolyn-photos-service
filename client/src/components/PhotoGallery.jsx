import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class PhotoGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 1,
      photo1: '',
      photo2Thumbnail: '',
      photo3: 'Thumbnail',
      photo4: 'Thumbnail',
      photo5: 'Thumbnail',
      photo1Thumbnail: '',
      photo2Thumbnail: '',
      photo3Thumbnail: '',
      photo4Thumbnail: '',
      photo5Thumbnail: ''
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos(id) {
    axios.get(`/photos/${id}`)
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
    this.getPhotos(this.state.listingId);

    // let listingId = window.location.href.split('/').slice(-1);
    // this.getPhotos(listingId);
  }

  render() {
    return (
      <div>
        <img src={this.state.photo1}></img>
        <img src={this.state.photo2Thumbnail}></img>
        <img src={this.state.photo3Thumbnail}></img>
        <img src={this.state.photo4Thumbnail}></img>
        <img src={this.state.photo5Thumbnail}></img>
      </div>
    );
  }
}

export default PhotoGallery;
