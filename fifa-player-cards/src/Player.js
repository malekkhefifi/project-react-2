import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jersey, age, image }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Équipe : {team}<br />
          Nationalité : {nationality}<br />
          Numéro : {jersey}<br />
          Âge : {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

Player.defaultProps = {
    name: "Lionel Messi",
    team: "Paris Saint-Germain",
    nationality: "Argentine",
    jersey: 30,
    age: 35,
    image: "https://th.bing.com/th/id/OIP.X7NwwzjdZ6a_8JKshwNuiAHaE7?rs=1&pid=ImgDetMain"
};

export default Player;