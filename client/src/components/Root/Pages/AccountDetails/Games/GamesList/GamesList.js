import React from 'react';
import { useSelector } from 'react-redux';

import GameButton from './GameButton';

const GamesList = () => {
  const games = useSelector(state => state.game);

  if (!games) return 'Loading...';

  return games.map(game => <GameButton key={game.id} {...game} />);
};

export default GamesList;
