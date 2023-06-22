import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { goBack, goForward, dislike, like } from '../features/buttonSlice';
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
    potentialmatches,
    potentialmatches.length
  );
  // console.log(index);
  const handleDislike = async () => {
    //dislike - > send to backend
    try {
      const result = await axios.post('http://localhost:3000/swipe/dislike', {
        giver_id,
        receiver_id: id,
      });
      dispatch(dislike(index));
    } catch (err) {
      //update state and remove from array
      console.log(err);
    }
  };
  const handleLike = async () => {
    try {
      const result = await axios.post('http://localhost:3000/swipe/like', {
        giver_id,
        receiver_id: id,
      });
      dispatch(like(index));
    } catch (err) {
      //update state and remove from array
      console.log(err);
    }
  };
  return (
    <div className='container'>
      <div className='card-container'>
        <div className='pet-name'>{dog_name}</div>
        <div className='profile-pic'>
          <img src={image_url}></img>
        </div>
        <div className='pet-bio'>
          <ul>
            <li>
              <strong>Bio: &ensp;</strong>
              {biography}
            </li>
            <li>
              <strong>Age: &ensp;</strong>
              {age}
            </li>
            <li>
              <strong>Breed: &ensp;</strong>
              {breed}
            </li>
            <li>
              <strong>Owner Name: &ensp;</strong>
              {owner_name}
            </li>
            <li>
              <strong>Zipcode: &ensp;</strong>
              {zip}
            </li>
            <li>
              <strong>Gender: &ensp;</strong>
              {gender}
            </li>
            <li>
              <strong>Is Fixed: &ensp;</strong>
              {isfixed}
            </li>
            <li>
              <strong>Size: &ensp;</strong>
              {size}
            </li>
          </ul>
        </div>
        <div className='btn-container'>
          <button className='goBack' onClick={() => dispatch(goBack())}>
            {'<'}&ensp; {'🐾'}
          </button>
          <button className='dislike' onClick={() => handleDislike()}>
            💔
          </button>
          <button className='like' onClick={() => handleLike()}>
            ❤️
          </button>
          <button className='goForward' onClick={() => dispatch(goForward())}>
            {'🐾'}&ensp;{'>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SwipeComponent;
