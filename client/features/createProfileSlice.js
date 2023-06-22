import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dog_name: '',
  owner_name: '',
  zip: '',
  breed: '',
  size: '',
  age: '',
  phone_number: '',
  gender: '',
  image_url: '',
  isfixed: '',
  biography: ''
};

export const createProfile = createSlice({
  name: 'createProfile',
  initialState,

  reducers: {
    dogName: (state, action) => {
      state.dog_name = action.payload;
    },
    ownerName: (state, action) => {
      state.owner_name = action.payload;
    },
    zip: (state, action) => {
      state.zip = action.payload;
    },
    breed: (state, action) => {
      state.breed = action.payload;
    },
    size: (state, action) => {
      state.size = action.payload;
    },
    age: (state, action) => {
      state.age = action.payload;
    },
    phone: (state, action) => {
      state.phone_number = action.payload;
    },
    gender: (state, action) => {
      state.gender = action.payload;
    },
    image: (state, action) => {
      state.image_url = action.payload;
    },
    fixed: (state, action) => {
      state.isfixed = action.payload;
    },
    biography: (state, action) => {
      state.biography = action.payload
    }
  }
},
);

export const { dogName, ownerName, zip, breed, size, age, phone, gender, image, fixed, biography } = createProfile.actions;

// export const selectUser = (state) => state.user.user;

export default createProfile.reducer;
