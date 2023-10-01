import React from 'react';
import { useParams } from 'react-router-dom';
import PlayerCard from '../PlayerCard/PlayerCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../HomePage/HomePage.css'
import './TournamentPage.css'


const TournamentPage = () => {
    const { name } = useParams();
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(
          response => {
            const res = response.data;
            console.log(res);
            setPlayers(res);
            console.log(players);
          }
        )
      }, []);
    
  return (
    <div className="homepage">
    <h2 className="title">{name}</h2>
    <PlayerCard />
    {
        players.map((player) => (
            <PlayerCard name={player.name} email = {player.email} phone={player.phone} />
        ))
    }
    </div>
  );
}

export default TournamentPage;