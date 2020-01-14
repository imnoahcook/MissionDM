import React from 'react';
import { useSelector } from 'react-redux';

import GameButton from './GameButton';
import { Button } from 'react-bulma-components';

const { Group } = Button;

const GamesList = () => {
  const games = useSelector(state => state.game);

  if (!games) return 'Loading...';
  return (
    <Group>
      {games.map(game => (
        <GameButton key={game.id} {...game} />
      ))}
    </Group>
  );
};

export default GamesList;
