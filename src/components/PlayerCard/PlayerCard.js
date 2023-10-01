import React from "react";
import './PlayerCard.css';

function PlayerCard({name, email, phone}) {
    return (
      <div className='profile-card'>
        <div>{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
      </div>
    );
  }
  
  export default PlayerCard;