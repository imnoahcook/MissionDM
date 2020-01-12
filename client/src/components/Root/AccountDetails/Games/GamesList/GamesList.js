import React from 'react';

const GamesList = props => {
  console.log(props);
  console.log(props.games);
  return props.games.map(game => {
    <GameButton game={game} />;
  });
};

export default GamesList;
