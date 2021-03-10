import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // listingId: 3
    };
    this.getPhotos = this.getPhotos.bind(this);
  }

  getPhotos(id) {
    // axios.get(`http://localhost:3000/photos/${id}`)
    //   .then((response) => {
    //     console.log('client success');
    //   })
    //   .catch((error) => {
    //     console.log('getPhotos client error: ', error);
    //   });
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/photos/${id}',
      success: (data) => {
        console.log('data: ', data);
      }
    });
  }

  componentDidMount() {
    this.getPhotos(this.state.listingId);
  }

  render() {
    return (
      <div>
        hello world
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
