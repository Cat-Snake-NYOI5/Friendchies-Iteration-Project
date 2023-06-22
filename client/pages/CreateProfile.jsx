import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dogName, ownerName, zip, breed, size, age, phone, gender, image, fixed, biography } from '../features/createProfileSlice';
import '../style.css';
import axios from 'axios';

export default function userInput() {
  const dispatch = useDispatch();
  // const onSubmit = (data) => {
  //   dispatch(createProf(data));
  // };
  const handleChange = async (e) => {
    e.preventDefault();
    // console.log('I am here testing create profile')

    // const value = e.target.value;
    // const name = e.target.name;
    // if (name === 'dog_name') {
    //   dispatch(dogName(value));
    // }
    // if (name === 'owner_name') {
    //   dispatch(ownerName(value));
    // }
    // if (name === 'zipcode') {
    //   dispatch(zip(value));
    // }
    // if (name === 'breed') {
    //   dispatch(breed(value));
    // }
    // if (name === 'size') {
    //   dispatch(size(value));
    // }
    // if (name === 'age') {
    //   dispatch(age(value));
    // }
    // if (name === 'phoneNumber') {
    //   dispatch(phone(value));
    // }
    // if (name === 'gender') {
    //   dispatch(gender(value));
    // }
    // if (name === 'dogimage') {
    //   dispatch(image(value));
    // }
    // if (name === 'isFixed') {
    //   dispatch(isfixed(value));
    // }
    // if (name === 'biography') {
    //   dispatch(biography(value));
    // }
    try {
      const result = await axios.post('http://localhost:3000/createprofile', {
        dog_name: dog_name,
        owner_name: owner_name,
        zip: zip,
        breed: breed,
        size: size,
        age: age,
        phone_number: phone_number,
        gender: gender,
        image_url: image_url,
        isfixed: isfixed,
        biography: biography,
     });
     console.log('this is my fetch', result)

     if (result) {
         dispatch(
           profile({
            dog_name: dog_name,
            owner_name: owner_name,
            zip: zip,
            breed: breed,
            size: size,
            age: age,
            phone_number: phone_number,
            gender: gender,
            image_url: image_url,
            isfixed: isfixed,
            biography: biography,
             id: result.data,
           })
           );
         }
   } catch (error) {
       console.log('This is an error', error);
     }
  }


  return (
    <div className='userProfile'>
      <form className='profile' onSubmit={(e) =>handleChange(e)}>
        <input
          type='dog_name'
          placeholder='Dog Name'
          // value={dog_name}
          onChange={(e)=> dispatch(dogName(e.target.value))}
          /><br></br>
        <input
          type='ownerName'
          placeholder='Owner Name'
          onChange={(e)=> dispatch(ownerName(e.target.value))}
          /><br></br>
        <input
          type='zipcode'
          placeholder='Zipcode'
          onChange={(e)=> dispatch(zip(e.target.value))}
          /><br></br>
        <input
          type='breed'
          placeholder='Breed'
          onChange={(e)=> dispatch(breed(e.target.value))}
          /><br></br>
        <input
          type='size'
          placeholder='Size'
          onChange={(e) => dispatch(size(e.target.value))}
          /><br></br>
        <input
          type='age'
          placeholder='Age'
          onChange={(e) => dispatch(age(e.target.value))}
          /><br></br>
        <input
          type='phoneNumber'
          placeholder='Phone Number'
          onChange={(e) => dispatch(phone(e.target.value))}
          /><br></br>
        <input
          type='gender'
          placeholder='Gender'
          onChange={(e) => dispatch(gender(e.target.value))}
          /><br></br>
        <input
          type='dogimage'
          placeholder='Image'
          onChange={(e) => dispatch(image(e.target.value))}
          /><br></br>
        <input
          type='isFixed'
          placeholder='Fixed?'
          onChange={(e)=> dispatch(fixed(e.target.value))}
          /><br></br>
        <input
          type='biography'
          placeholder='Biography'
          onChange={(e)=> dispatch(biography(e.target.value))}
          /><br></br>


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
