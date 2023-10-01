import React from 'react';
import './HomePage.css';
import TournamentLink from '../TournamentLink/TournamentLink';

const sampleTournaments = [
  // Sample data for demonstration
  { id: '001', title: 'Horseshoe Bay Open', description: 'March 1, 2023', imageUrl: 'path_to_image_1.jpg' },
  { id: '002', title: 'Polo Club April Open', description: 'April 21st, 2023', imageUrl: 'path_to_image_2.jpg' },
  { id: '002', title: 'ATA WTN Prize Money', description: 'Jun 14th, 2023', imageUrl: 'path_to_image_3.jpg' },
  // ... add 9 more sample articles
];

const HomePage = () => {
  return (
    <div className="homepage">
      {sampleTournaments.map((tournament, index) => (
        <TournamentLink key={index} {...tournament} />
      ))}
    </div>
  );
}

export default HomePage;
