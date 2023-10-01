import React from 'react';
import './TournamentLink.css';
import { Link } from 'react-router-dom';
import img from './tennis.png'

const TournamentLink = ({ title, description }) => {
  return (
    <Link to={'/tournament/' + title}>
      <div className="tournament-link">
      <img className="tournament-link-image" src={img} alt={'title'} />
      <h2>{title}</h2>
      <hr />
      <p>{description}</p>
      </div>
    </Link>
  );
}

export default TournamentLink;