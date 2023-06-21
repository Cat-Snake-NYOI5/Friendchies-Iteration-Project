import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {fetchData} from '../features/buttonSlice';
// import { ACTION } from '../features/matchSlice'

const SwipePage = () => {
  const id = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();
  
  const fetchMatches = async () => {
    try {
      const result = await axios.get('http://localhost:3000/api/swipe/' + id);
      console.log(result);
      // dispatch(fetchData(result.data));
    }
    catch (err) {
      console.log(err)
    }
  }
  fetchMatches();
  
  return (
    <div>
      HELLO
      </div>
 )
}

export default SwipePage;
