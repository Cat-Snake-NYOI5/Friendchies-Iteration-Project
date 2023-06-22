import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchData } from '../features/buttonSlice';
import SwipeComponent from "../components/swipeComponent.jsx";
// import { ACTION } from '../features/matchSlice'

const SwipePage = () => {
  //use useselctor to subscribe to element from state
  const id = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();
  
  const fetchMatches = async () => {
    try {
      const result = await axios.get('http://localhost:3000/swipe/' + id);
      console.log(result);
      console.log(result.data);
      //dispatch(action(payload))
      dispatch(fetchData(result.data));
      
    }
    catch (err) {
      console.log(err)
    }
  }
  fetchMatches();
  
  return (
    <div>
      <SwipeComponent/>
      </div>
 )
}

export default SwipePage;
