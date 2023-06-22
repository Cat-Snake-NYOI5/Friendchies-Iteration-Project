import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
//import { deleteMatches } from "../features/matchSlice";
import axios from "axios";

const MatchCard2 = (props) => {
  //   const dispatch = useDispatch();

  //   const matches = useSelector((state) => state.matches);

  //   //const index = useSelector((state) => state.matches.index);

  //   const user_id = useSelector((state) => state.user.user.id);

  //   //   const handleDelete = async () => {
  //   //     try {
  //   //       const result = await axios.post('http://localhost:3000/api/match', {
  //   //         user_id,
  //   //         remove_id: id,
  //   //       });
  //   //       dispatch(delete(index));
  //   //     } catch (err) {
  //   //       //update state and remove from array
  //   //       console.log(err);
  //   //     }
  //   // }

  //   return (
  //     <div className="container">
  //       <div className="card-container">
  //         <div className="pet-name">{dog_name}</div>
  //         <div className="profile-pic">
  //           <img src={image_url}></img>
  //         </div>
  //         <div className="pet-bio">
  //           <ul>
  //             <li>
  //               <strong>Bio: &ensp;</strong>
  //               {biography}
  //             </li>
  //             <li>
  //               <strong>Age: &ensp;</strong>
  //               {age}
  //             </li>
  //             <li>
  //               <strong>Breed: &ensp;</strong>
  //               {breed}
  //             </li>
  //             <li>
  //               <strong>Owner Name: &ensp;</strong>
  //               {owner_name}
  //             </li>
  //             <li>
  //               <strong>Phone Number: &ensp;</strong>
  //               {phone_number}
  //             </li>
  //             <li>
  //               <strong>Zipcode: &ensp;</strong>
  //               {zip}
  //             </li>
  //             <li>
  //               <strong>Gender: &ensp;</strong>
  //               {gender}
  //             </li>
  //             <li>
  //               <strong>Is Fixed: &ensp;</strong>
  //               {isfixed}
  //             </li>
  //             <li>
  //               <strong>Size: &ensp;</strong>
  //               {size}
  //             </li>
  //           </ul>
  //         </div>
  //         <div className="btn-container">
  //           <button className="delete" onClick={() => handleDelete()}>
  //             {"🐾"}
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   );
  console.log("PROPS", props);
  return <div>hello</div>;
};

export default MatchCard2;
