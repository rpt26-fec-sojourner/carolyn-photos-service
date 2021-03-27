import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faShareSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

const AllPhotos = (props) => {
  return (
    <div>
      <div className="back">
        <span>
          <FontAwesomeIcon icon={faChevronLeft} onClick={props.handleClick} />
        </span>
        <span>
          <FontAwesomeIcon icon={faShareSquare} />
          Share
        </span>
        <span>
          <FontAwesomeIcon icon={faHeart} />
          Save
        </span>
      </div>
      <div className="container">
        <div className="scroll">
          <figure className="scroll_item scroll_item_1">
            <img src={props.photo1} className="scroll_img scroll_img_1" alt="image 1"></img>
          </figure>
          <figure className="scroll_item scroll_item_2">
            <img src={props.photo2} className="scroll_img scroll_img_2" alt="image 2"></img>
          </figure>
          <figure className="scroll_item scroll_item_3">
            <img src={props.photo3} className="scroll_img scroll_img_3" alt="image 3"></img>
          </figure>
          <figure className="scroll_item scroll_item_4">
            <img src={props.photo4} className="scroll_img scroll_img_4" alt="image 4"></img>
          </figure>
          <figure className="scroll_item scroll_item_5">
            <img src={props.photo5} className="scroll_img scroll_img_5" alt="image 5"></img>
          </figure>
          <figure className="scroll_item scroll_item_6">
            <img src={props.photo6} className="scroll_img scroll_img_6" alt="image 6"></img>
          </figure>
          <figure className="scroll_item scroll_item_7">
            <img src={props.photo7} className="scroll_img scroll_img_7" alt="image 7"></img>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default AllPhotos;