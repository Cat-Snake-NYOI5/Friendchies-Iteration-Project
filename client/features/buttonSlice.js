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

    },
    goForward (state, action) {

    },
    dislike (state, action) {

    },
    like (state, action) {

    }
  },
})

export const { fetchData, goBack, goForward, dislike, like } = buttonSlice.actions
export default buttonSlice.reducer
