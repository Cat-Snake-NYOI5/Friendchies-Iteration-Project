import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import buttonReducer from './features/buttonSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    button: buttonReducer,
  },
});
