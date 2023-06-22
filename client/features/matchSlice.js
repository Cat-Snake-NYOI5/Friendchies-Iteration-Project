import {createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  matches: [],
};

// export const fetchDogs = createAsyncThunk('ACTION TYPE', () => {
//   return axios
//     .get('http://localhost:3000/api/matches') // pull from db?
//     .then((response) => response.data);
// });

const matchSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    fetchMatches: (state, action) => {
      state.matches = action.payload;
    },
  },
});

export const { fetchMatches } = matchSlice.actions;
export default matchSlice.reducer;
