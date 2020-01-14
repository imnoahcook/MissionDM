import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bulma-components';

const GameButton = props => {
  return (
    <NavLink
      to={{ pathname: `/game/${props.id}` }}
      style={{ textDecoration: 'none' }}
    >
      <Button>{props.name}</Button>
      <br/>
    </NavLink>
  );
};

export default GameButton;
