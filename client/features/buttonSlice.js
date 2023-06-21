import { createSlice } from '@reduxjs/toolkit'

const initialState = { dogs }

const buttonSlice = createSlice({
  name: 'click',
  initialState,
  reducers: {
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

export const { goBack, goForward, dislike, like } = buttonSlice.actions
export default buttonSlice.reducer
