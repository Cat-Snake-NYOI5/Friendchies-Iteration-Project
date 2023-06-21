import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { ACTION } from '../features/matchSlice'

const SwipePage = () => {
  const matches = useSelector((state) => state.matches);
  const useDispatch = useDispatch();



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
        onClick={() => handleBack(FILLER)}
        > back </button>
      <button className="goForward"
        onClick={() => handleForward(FILLER)}
        ></button>
      <button
        className="dislike"
        onClick={() => handleDislike(FILLER)}
        ></button>
      <button className="like"
        onCanPlay={() => handleLike(FILLER)}
        ></button>
    </div>
  )
}

export default SwipePage;
