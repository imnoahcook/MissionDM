import React from 'react';

import GameButton from './GameButton';

const GamesList = props => {
  return (
    <>
      {props.games.map(game => (
        <GameButton key={game.id} {...game} />
      ))}
    </>
  );
};

export default GamesList;
