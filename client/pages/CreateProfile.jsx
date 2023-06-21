import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../style.css';
import axios from 'axios';

export default function userInput() {
  return (
    <div className='userProfile'>
      <form className='dogName'>
        <input
          type='dogName'
          placeholder='Dog Name'
          value={dogName}
          />
        <input
          type='ownerName'
          placeholder='Owner Name'
          value={ownerName}
          />
        <input
          type='breed'
          placeholder='Breed'
          value={breed}
          />
        <input
          type='size'
          placeholder='Size'
          value={size}
          />
        <input
          type='sex'
          placeholder='Sex'
          value={sex}
          />
        <input
          type='age'
          placeholder='Age'
          value={age}
          />
        <input
          type='zipcode'
          placeholder='Zipcode'
          value={zipcode}
          />
        <input
          type='image'
          placeholder='Image'
          value={image}
          />
        <input
          type='phoneNumber'
          placeholder='Phone Number'
          value={phoneNumber}
          />


        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </form>
    </div>
  );
}
