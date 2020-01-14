import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import GameButton from './GameButton';
import { Button } from 'react-bulma-components';

const { Group } = Button;

const PrefaceText = styled.div`
  font-weight: bold;
  color: #363636;
  padding-bottom: 10px;
`;

const GamesList = () => {
  const games = useSelector(state => state.game);

  if (!games) return 'Loading...';
  return (
    <Group>
      <PrefaceText>Games you are a part of:</PrefaceText>
      {games.map(game => (
        <GameButton key={game.id} {...game} />
      ))}
    </Group>
  );
};

export default GamesList;
