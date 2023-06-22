import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import buttonReducer from './features/buttonSlice'
import matchReducer from './features/matchSlice'
import createProfileReducer from './features/createProfileSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    button: buttonReducer,
    match: matchReducer,
    createProfile: createProfileReducer
  },
});
