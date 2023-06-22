import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  index: 0,
  matches: [{ image_url: '', dog_name :'', biography :'', phone_number : '', owner_name : '', zip : '', breed : '', age :'', gender :'', size :'' }],
};

// export const fetchDogs = createAsyncThunk('ACTION TYPE', () => {
//   return axios
//     .get('http://localhost:3000/api/matches') // pull from db?
//     .then((response) => response.data);
// });

const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    fetchMatches: (state, action) => {
      state.matches = action.payload;
    },
    // deleteMatches: (state, action) => {
    //   //state.matches = action.payload;
    //   if (state.index > 0) {
    //     state.index -= 1;
    //   }
    //},
  },
});

export const { fetchMatches } = matchSlice.actions;

export default matchSlice.reducer;
