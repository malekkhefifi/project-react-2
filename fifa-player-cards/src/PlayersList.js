import React from 'react';
import Player from './Player';
import players from './players';

const PlayersList = () => {
  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    justifyContent: 'center',
    padding: '20px'
  };

  const playerStyle = {
    margin: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)'
    }
  };

  return (
    <div style={listStyle}>
      {players.map((player, index) => (
        <div key={index} style={playerStyle}>
          <Player {...player} />
        </div>
      ))}
    </div>
  );
};

PlayersList.defaultProps = {
  players: []
};

export default PlayersList;