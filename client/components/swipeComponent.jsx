import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { goBack, goForward,  } from '../features/buttonSlice'
import axios from 'axios';

const SwipeComponent = () => {
  const dispatch = useDispatch();
  const potentialmatches = useSelector(state => state.button.potentialmatches);
  const index = useSelector(state => state.button.index);
  const giver_id = useSelector(state => state.user.user.id);
  // console.log('POTENTIAL MATCHES', potentialmatches);
  const { dog_name, owner_name, zip, breed, age, gender, image_url, isfixed, size, biography, id} = potentialmatches[index];
  console.log('THIS IS THE POTENTIAL MATCHES AT INDEX', potentialmatches[index]);
  // console.log(index);
  const handleDislike = async () => {
    //dislike - > send to backend
    try {
      const result = await axios.post('http://localhost:3000/swipe/like', { giver_id, receiver_id: id });
      if (result)
    }
    //update state and remove from array
    catch (err) {
      console.log(err);
    }
  }
  return (
     <div className="container">
      <div className="profile-pic">
        <img src={image_url}></img>
        </div>
        <div className="pet-name">
        {dog_name}
        </div>
      <div className="pet-bio">
        {biography}
        {breed}
        {owner_name}
        {zip}
        {age}
        {gender}
        {isfixed}
        {size}
        </div>
        <button
          className="goBack"
          onClick={ () => dispatch(goBack())}
          > previous </button>
        <button className="goForward"
          onClick={()=>dispatch(goForward())}
          >next</button>
        <button
          className="dislike"
          onClick={() => handleDislike()}
          >dislike</button>
        <button className="like"
          onClick={() => handleLike()}
          >like</button>
        </div>
    )
}

export default SwipeComponent;