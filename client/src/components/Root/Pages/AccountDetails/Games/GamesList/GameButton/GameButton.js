import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bulma-components';

const GameButton = props => {
  return (
    <Button fullwidth={true} rounded size="medium" color="primary" outlined>
      <NavLink
        to={{ pathname: `/game/${props.id}` }}
        style={{ textDecoration: 'none', width: '100%' }}
      >
        {props.name}
      </NavLink>
    </Button>
  );
};

export default GameButton;
