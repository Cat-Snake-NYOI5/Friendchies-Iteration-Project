import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { fetchData } from '../features/buttonSlice';
import SwipeComponent from "../components/swipeComponent.jsx";
// import { ACTION } from '../features/matchSlice'

const SwipePage = () => {
  // const [swipe, setSwipe] = useState('');
  //use useselctor to subscribe to element from state
  const id = useSelector((state) => state.user.user.id);
  const dispatch = useDispatch();
  const myFunction = async () => {
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
  
    useEffect(() => {
      myFunction();
  }, []);

  
  return (
    <div>
     <SwipeComponent/>
      </div>
 )
}

export default SwipePage;
