import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 3,
      photo1: '',
      photo2: '',
      photo3: '',
      photo4: '',
      photo5: ''
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
          photo5: response.data.photo5[0].fullsize
        });
      })
      .catch((error) => {
        console.log('getPhotos client error: ', error);
      });
  }

  componentDidMount() {
    this.getPhotos(this.state.listingId);
  }

  render() {
    return (
      <div>
        test
        {this.state.photo1}
        {this.state.photo2}
        {this.state.photo3}
        {this.state.photo4}
        {this.state.photo5}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
