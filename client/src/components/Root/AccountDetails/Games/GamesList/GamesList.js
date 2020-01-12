import React from 'react';

const GamesList = props => {
  return props.games.map(game => {
    <GameButton game={game} />;
  });
};

export default GamesList;
