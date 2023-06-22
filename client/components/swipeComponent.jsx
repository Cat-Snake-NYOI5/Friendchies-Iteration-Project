import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { goBack, goForward } from '../features/buttonSlice';
import axios from 'axios';

const SwipeComponent = () => {
  const dispatch = useDispatch();
  const potentialmatches = useSelector(
    (state) => state.button.potentialmatches
  );
  const index = useSelector((state) => state.button.index);
  const giver_id = useSelector((state) => state.user.user.id);
  // console.log('POTENTIAL MATCHES', potentialmatches);
  const {
    dog_name,
    owner_name,
    zip,
    breed,
    age,
    gender,
    image_url,
    isfixed,
    size,
    biography,
    id,
  } = potentialmatches[index];
  console.log(
    'THIS IS THE POTENTIAL MATCHES AT INDEX',
    potentialmatches[index]
  );
  // console.log(index);
  const handleDislike = async () => {
    //dislike - > send to backend
    try {
      const result = await axios.post('http://localhost:3000/swipe/like', {
        giver_id,
        receiver_id: id,
      });
      // if (result)
    } catch (err) {
      //update state and remove from array
      console.log(err);
    }
  };
  return (
    <div className="container">
      <div className="card-container">
        <div className="pet-name">{dog_name}</div>
        <div className="profile-pic">
          <img src={image_url}></img>
        </div>
        <div className="pet-bio">
          <ul>
            <li>{biography}</li>
            <li>{breed}</li>
            <li>{owner_name}</li>
            <li>{zip}</li>
            <li>{age}</li>
            <li>{gender}</li>
            <li>{isfixed}</li>
            <li>{size}</li>
          </ul>
        </div>
        <div className="btn-container">
          <button className="goBack" onClick={() => dispatch(goBack())}>
            {'<'}
          </button>
          <button className="dislike" onClick={() => handleDislike()}>
            💔
          </button>
          <button className="like" onClick={() => handleLike()}>
            ❤️
          </button>
          <button className="goForward" onClick={() => dispatch(goForward())}>
            {'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipeComponent;
