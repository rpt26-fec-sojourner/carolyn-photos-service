import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AllPhotos = (props) => {
  return (
    <div>
      <div className="back">
        <FontAwesomeIcon icon={faChevronLeft} onClick={props.handleClick} />
      </div>
    </div>
  );
};

export default AllPhotos;