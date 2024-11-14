import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-4">Liste des Joueurs</h1>
      <PlayersList />
    </div>
  );
}

export default App;
