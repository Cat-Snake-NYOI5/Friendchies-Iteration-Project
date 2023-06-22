import React from "react";

const MatchComponent = ({dog_name, owner_name, zip, breed, age, gender, image_url, size, biography, phone_number}) => {
    return (
        <div>
            <img src = {image_url}></img>
            {dog_name} {biography} {phone_number} {owner_name}{zip} {breed} {age} {gender} {size}
         </div>
    )
}

export default MatchComponent;