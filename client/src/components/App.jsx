import React, { Suspense } from 'react';
import '../../styles/photogallery.css';
import '../../styles/allphotos.css';

const PhotoGallery = React.lazy(() => import('./PhotoGallery.jsx'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <PhotoGallery />
      </Suspense>
    </div>
  );
};

export default App;
