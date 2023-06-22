import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  index: 0,
  potentialmatches: [],

}

const buttonSlice = createSlice({
  name: 'click',
  initialState,
  reducers: {
    fetchData(state, action) {
      state.potentialmatches = action.payload;
    },
    goBack (state, action) {
      if (state.index > 0) {
        state.index -= 1;
      }
      else {
        state.index = state.potentialmatches.length-1;
      }
    },
    goForward(state) {
      if (state.index < state.potentialmatches.length-1) {
        state.index += 1;
      }
      else {
        state.index = 0;
      }
    },
    dislike (state, action) {

    },
    like (state, action) {

    }
  },
})

export const { fetchData, goBack, goForward, dislike, like } = buttonSlice.actions
export default buttonSlice.reducer
