import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const createProf = createAsyncThunk(
//   '/createprofile',
//   async ({ dogName, ownerName, zip, breed, size, age, phone, gender, image, fixed, biography }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         'http://localhost:3000/createprofile',
//         {
//           method: 'POST',
//           headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             dogName,
//             ownerName,
//             zip,
//             breed,
//             size,
//             age,
//             phone,
//             gender,
//             image,
//             fixed,
//             biography,
//           }),
//         }
//       );
//       let data = await response.json();
//       console.log('data', data);

//       if (response.status === 200) {
//         localStorage.setItem('token', data.token);
//         return { ...data, dogName: name, ownerName: ownerName, zip: zip, breed: breed, size: size, age: age, phone: phone, gender: gender, image: image, fixed: fixed, biography: biography };
//       } else {
//         return thunkAPI.rejectWithValue(data);
//       }
//     } catch (e) {
//       console.log('Error', e.response.data);
//       return thunkAPI.rejectWithValue(e.response.data);
//     }
//   }
// );

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
