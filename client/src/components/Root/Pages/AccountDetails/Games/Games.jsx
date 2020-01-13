import React from 'React';
import GamesList from './GamesList';
import JoinGame from './JoinGame';

const Games = () => {
  return (
    <>
      <p>Games you are a part of:</p>
      <GamesList />
      <p>Join a game</p>
      <JoinGame />
    </>
  );
};

export default Games;
