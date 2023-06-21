import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDogs } from './matchSlice';

export const Matches = () => {
  const match = useSelector((state) => state.match);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  return (
    <div>
      <h2>List of Matches</h2>
      <ul>
        {match.matches.map((match) => (
          <li key={match.id}>{match.name}</li>
        ))}
      </ul>
    </div>
  );
};
