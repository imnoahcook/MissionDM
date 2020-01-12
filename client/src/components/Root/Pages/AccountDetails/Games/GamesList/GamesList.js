import React from 'react';
import { useSelector } from 'react-redux';

import GameButton from './GameButton';

const GamesList = props => {
  const session = useSelector(state => state.games);

  return (
    <>
      {props.games.map(game => (
        <GameButton key={game.id} {...game} />
      ))}
    </>
  );
};

export default GamesList;
