import React from 'react';
import { Link } from 'react-router-dom';

const GameButton = props => {
  return (
    <div>
      <Link to={{ pathname: `/game/${props.id}` }}>{props.name}</Link>
    </div>
  );
};

export default GameButton;
