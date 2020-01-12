import React from 'react';

const GamesList = props => {
  console.log(props);
  return '';
  return props.games.map(game => {
    <GameButton />;
  });
};

export default GamesList;
