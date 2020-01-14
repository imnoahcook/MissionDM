import React from 'react';
import { useSelector } from 'react-redux';

import GameButton from './GameButton';
import { ButtonList } from 'react-bulma-components';

const GamesList = () => {
  const games = useSelector(state => state.game);

  if (!games) return 'Loading...';

  return (
    <ButtonList position="centered">
      {games.map(game => <GameButton key={game.id} {...game} />)}
    </ButtonList>
  );
};

export default GamesList;
