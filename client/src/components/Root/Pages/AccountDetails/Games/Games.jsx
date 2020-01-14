import React from 'React';
import GamesList from './GamesList';
import JoinGame from './JoinGame';

import { Content } from 'react-bulma-components';
const Games = () => {
  return (
    <Content>
      <p>Games you are a part of:</p>
      <GamesList />
      <JoinGame />
    </Content>
  );
};

export default Games;
