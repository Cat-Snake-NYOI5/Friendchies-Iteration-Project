import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import { ACTION } from '../features/matchSlice'

const SwipePage = () => {
  const matches = useSelector((state) => state.matches);
  const id = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();
  console.log('ID FROM SWIPE COMPONENT', id);




  return (
    <div className="container">
      <h1>'Header'</h1>
      <div className="profile-pic">

      </div>
      <div className="pet-name">

      </div>
      <div className="pet-bio">

      </div>
      <button
        className="goBack"
        onClick={() => handleBack(FILLER)}
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

export default SwipePage;
