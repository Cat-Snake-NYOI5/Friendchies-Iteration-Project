import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../img/logo.png';
import {
  dogName,
  ownerName,
  zip,
  breed,
  size,
  age,
  phone,
  gender,
  image,
  fixed,
  biography,
} from '../features/createProfileSlice';
import '../style.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

export default function userInput() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nameDog = useSelector((state) => state.createProfile.dog_name);
  const nameOwner = useSelector((state) => state.createProfile.owner_name);
  const zipC = useSelector((state) => state.createProfile.zip);
  const breedDog = useSelector((state) => state.createProfile.breed);
  const sizeDog = useSelector((state) => state.createProfile.size);
  const ageDog = useSelector((state) => state.createProfile.age);
  const phoneDog = useSelector((state) => state.createProfile.phone_number);
  const genderDog = useSelector((state) => state.createProfile.gender);
  const imageDog = useSelector((state) => state.createProfile.image_url);
  const fixedDog = useSelector((state) => state.createProfile.isfixed);
  const bioDog = useSelector((state) => state.createProfile.biography);

  const handleChange = async (e) => {
    e.preventDefault();
    // console.log('I am here testing create profile')
    try {
      // console.log('this is dog name', id)

      const result = await axios.post('http://localhost:3000/createprofile', {
        dog_name: nameDog,
        owner_name: nameOwner,
        zip: zipC,
        breed: breedDog,
        size: sizeDog,
        age: ageDog,
        phone_number: phoneDog,
        gender: genderDog,
        image_url: imageDog,
        isfixed: fixedDog,
        biography: bioDog,
      });
      console.log('this is my fetch', result);

      if (result) {
        dispatch(dogName({ dog_name: nameDog }));
        dispatch(ownerName({ owner_name: nameOwner }));
        dispatch(zip({ zip: zipC }));
        dispatch(breed({ breed: breedDog }));

        dispatch(size({ size: sizeDog }));
        dispatch(age({ age: ageDog }));
        dispatch(phone({ phone_number: phoneDog }));
        dispatch(gender({ gender: genderDog }));
        dispatch(image({ image_url: imageDog }));
        dispatch(fixed({ isfixed: fixedDog }));
        dispatch(biography({ biography: bioDog }));
        // id: result.data,
        navigate('/swipe')

      }
    } catch (error) {
      console.log('This is an error', error);
    }
  };


  return (
    <div className="login">
      <img className="logo" src={logo} />
      <h2>Create Profile</h2>
      <form className="prof-form" onSubmit={(e) => handleChange(e)}>
        <input
          type='name'
          placeholder='Dog Name'
          // value={dog_name}
          onChange={(e) => dispatch(dogName(e.target.value))}
        />
        <input
          type='name'
          placeholder='Owner Name'
          onChange={(e) => dispatch(ownerName(e.target.value))}
        />
        <input
          type='number'
          placeholder='Zipcode'
          onChange={(e) => dispatch(zip(e.target.value))}
        />
        <input
          type='text'
          placeholder='Breed'
          onChange={(e) => dispatch(breed(e.target.value))}
        />
        <input
          type='text'
          placeholder='Size'
          onChange={(e) => dispatch(size(e.target.value))}
        />
        <input
          type='number'
          placeholder='Age'
          onChange={(e) => dispatch(age(e.target.value))}
        />
        <input
          type='number'
          placeholder='Phone Number'
          onChange={(e) => dispatch(phone(e.target.value))}
        />
        <input
          type='text'
          placeholder='Gender'
          onChange={(e) => dispatch(gender(e.target.value))}
        />
        <input
          type='text'
          placeholder='Image'
          onChange={(e) => dispatch(image(e.target.value))}
        />
        <input
          type='boolean'
          placeholder='Fixed? True/False'
          onChange={(e) => dispatch(fixed(e.target.value))}
        />
        <input
          type='text'
          placeholder='Biography'
          onChange={(e) => dispatch(biography(e.target.value))}
        />

        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
    </div>
  );
}
// send to state onchange via useDispatch
// check type, send dif action creator e.target.val
// react forms
