import React from 'react';

const MatchComponent = ({
  dog_name,
  owner_name,
  zip,
  breed,
  age,
  gender,
  image_url,
  size,
  biography,
  phone_number,
}) => {
  return (
    <div className='match-card-container'>
      <div>
        <img className='match-profile' src={image_url} />
      </div>

      <div className='pet-name'>{dog_name}</div>
      <div className='pet-bio'>
        <ul>
          <li>
            <strong>Bio: &ensp;</strong>
            {biography}
          </li>
          <li>
            <strong>Phone Number: &ensp;</strong>
            {phone_number}
          </li>
          <li>
            <strong>Owner Name: &ensp;</strong>
            {owner_name}
          </li>
          <li>
            <strong>Zipcode: &ensp;</strong>
            {zip}
          </li>
          <li>
            <strong>Breed: &ensp;</strong>
            {breed}
          </li>
          <li>
            <strong>Age: &ensp;</strong>
            {age}
          </li>
          <li>
            <strong>Gender: &ensp;</strong>
            {gender}
          </li>
          <li>
            <strong>Size: &ensp;</strong>
            {size}
          </li>
        </ul>

        {/* {dog_name} {biography} {phone_number} {owner_name}
      {zip} {breed} {age} {gender} {size} */}
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <img src={image_url}></img>
  //     {dog_name} {biography} {phone_number} {owner_name}
  //     {zip} {breed} {age} {gender} {size}
  //   </div>
  // );
};

export default MatchComponent;
