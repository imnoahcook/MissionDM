import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bulma-components';

const GameButton = props => {
  return (
    <Button
      renderAs={Link}
      to={`/game/${props.id}`}
      fullwidth={true}
      rounded
      size="medium"
      color="primary"
      outlined
    >
      {props.name}
    </Button>
  );
};

export default GameButton;
