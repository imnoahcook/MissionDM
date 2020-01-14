import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';

const startGameMutation = gql`
  mutation startGame($gameId: ID!) {
    startGame(gameId: $gameId)
  }
`;

const getComponent = (gameId, onClick) => {
  const games = useSelector(state => state.game);
  if (!games) return 'Loading...';
  const running = games.find(game => game.id === gameId).isRunning;
  if (running) {
    return <p>running</p>;
  } else {
    return <button onClick={onClick}>Start Game</button>; //This should really go in the first one
  }
};

const AdminPage = props => {
  const [startGame] = useMutation(startGameMutation);
  const onClick = async () => {
    await startGame({ variables: { gameId: props.gameId } });
  };

  const body = getComponent(props.gameId, onClick);
  return <div>{body}</div>;
};

export default AdminPage;
