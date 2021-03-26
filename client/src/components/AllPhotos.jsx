import React from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const AllPhotos = (props) => {
  return (
    <div className="back">
      <FontAwesomeIcon icon={faChevronLeft} onClick={props.handleClick} />
    </div>
  );
}

export default AllPhotos;