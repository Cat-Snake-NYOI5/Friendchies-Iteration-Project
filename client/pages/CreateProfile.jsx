import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dogName, ownerName, zip, breed, size, age, phone, gender, image, fixed, biography } from '../features/createProfileSlice';
import '../style.css';
import axios from 'axios';

export default function userInput() {
  const dispatch = useDispatch();

  return (
    <div className='userProfile'>
      <form className='dogName'>
        <input
          type='dogName'
          placeholder='Dog Name'
          onChange={dispatch(dogName(e.target.value))}
          />
        <input
          type='ownerName'
          placeholder='Owner Name'
          onChange={dispatch(ownerName(e.target.value))}
          />
        <input
          type='zipcode'
          placeholder='Zipcode'
          onChange={dispatch(zip((e.target.value)))}
          />
        <input
          type='breed'
          placeholder='Breed'
          onChange={dispatch(breed((e.target.value)))}
          />
        <input
          type='size'
          placeholder='Size'
          onChange={dispatch(size((e.target.value)))}
          />
        <input
          type='age'
          placeholder='Age'
          onChange={dispatch(age((e.target.value)))}
          />
        <input
          type='phoneNumber'
          placeholder='Phone Number'
          onChange={dispatch(phone((e.target.value)))}
          />
        <input
          type='gender'
          placeholder='Gender'
          onChange={dispatch(gender((e.target.value)))}
          />
        <input
          type='image'
          placeholder='Image'
          onChange={dispatch(image((e.target.value)))}
          />
        <input
          type='isFixed'
          placeholder='Fixed?'
          onChange={dispatch(fixed((e.target.value)))}
          />
        <input
          type='biography'
          placeholder='Biography'
          onChange={dispatch(biography((e.target.value)))}
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
