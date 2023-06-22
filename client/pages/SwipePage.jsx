import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {fetchData} from '../features/buttonSlice';
import SwipeComponent from '../components/swipeComponent.jsx';
// import { ACTION } from '../features/matchSlice'

const SwipePage = () => {
  const id = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();
  console.log('ID FROM SWIPE COMPONENT', id);
  
  const fetchMatches = async () => {
    try {
      const result = await axios.get('http://localhost:3000/api/swipe/' + id);
      dispatch(fetchData(result.data));
    }
    catch (err) {
      console.log(err)
    }
  }
  fetchMatches();
  
  return (
    <div>
      <SwipeComponent  />
      </div>
 )
}

export default SwipePage;
