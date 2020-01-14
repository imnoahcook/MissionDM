import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bulma-components';

const GameButton = props => {
  return (
    <NavLink
      to={{ pathname: `/game/${props.id}` }}
      style={{ textDecoration: 'none' }}
    >
      <Button rounded size="normal" color="primary" outlined>
        {props.name}
      </Button>
    </NavLink>
  );
};

export default GameButton;
