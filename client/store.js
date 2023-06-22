import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import buttonSlice from './features/buttonSlice';
import matchSlice from './features/matchSlice';
import createProfileSlice from './features/createProfileSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    button: buttonSlice,
    match: matchSlice,
    profile: createProfileSlice
  },
});
