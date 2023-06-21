import React from 'react';
import { useSelector, useDispatch } from "react-redux";

const SwipeComponent = () => {
    const potentialmatches = useSelector(state => state.button.potentialmatches);
    const index = useSelector(state => state.button.index);
    const { dog_name, owner_name, zip, breed, age, gender, image_url, isfixed, size, biography } = potentialmatches[index];
    console.log('THIS IS THE POTENTIAL MATCHES AT INDEX', potentialmatches[index]);
    return (
      <div className="container">
        <div className="profile-pic">
        </div>
        <div className="pet-name">
  
        </div>
        <div className="pet-bio">
  
        </div>
        <button
          className="goBack"
          onClick={ () => handleBackward(FILLER)}
          > previous </button>
        <button className="goForward"
          onClick={() => handleForward(FILLER)}
          >next</button>
        <button
          className="dislike"
          onClick={() => handleDislike(FILLER)}
          >dislike</button>
        <button className="like"
          onClick={() => handleLike(FILLER)}
          >like</button>
        </div>
    )
}

export default SwipeComponent;