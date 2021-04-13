import React, { Suspense } from 'react';
import PhotoGallery from './PhotoGallery.jsx';
import '../../styles/photogallery.css';
import '../../styles/allphotos.css';


const App = () => {
  return (
    <div>
      <PhotoGallery />
    </div>
  );
};

export default App;
