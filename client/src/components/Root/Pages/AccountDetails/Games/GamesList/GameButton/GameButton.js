import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bulma-components';

const GameButton = props => {
  return (
    <Button rounded size="normal" color="primary" outlined>
      <NavLink
        to={{ pathname: `/game/${props.id}` }}
        style={{ textDecoration: 'none' }}
      >
        {props.name}
      </NavLink>
    </Button>
  );
};

export default GameButton;
