import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { fetchMatches } from '../features/matchSlice';

const MatchPage = () => {
  const match = useSelector((state) => state.match);
  const id = useSelector((state) => state.user.user.id)
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get('http://localhost:3000/api/matches/' + id)
      console.log(result);
      dispatch(fetchMatches(result.data));
    } fetchData()
  }, []);
  //fetch the data from the backend
  
  //update the data in redux with the data from the backend

  //render the components


  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchDogs());
  // }, []);

  return (
    <div>
      <h2>List of Matches</h2>
      {/* <ul>
        {match.matches.map((match) => (
          <li key={match.id}>{match.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default MatchPage;