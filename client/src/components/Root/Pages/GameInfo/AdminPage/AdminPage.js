import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import { Button } from 'react-bulma-components';

const startGameMutation = gql`
  mutation startGame($gameId: ID!) {
    startGame(gameId: $gameId)
  }
`;

const randomizeTargetsMutation = gql`
  mutation randomizeTargets($gameId: ID!) {
    randomizeTargets(gameId: $gameId)
  }
`;

const getComponent = (gameId, onClick, plotTwist) => {
  const games = useSelector(state => state.game);
  if (!games) return 'Loading...';
  const running = games.find(game => game.id === gameId).isRunning;
  if (running) {
    return <Button onClick={onClick}>Start Game</Button>;
  } else {
    return <Button onClick={plotTwist}>Randomize Targets</Button>;
  }
};

const AdminPage = props => {
  const [startGame] = useMutation(startGameMutation);
  const onClick = async () => {
    await startGame({ variables: { gameId: props.gameId } });
  };

  const [randomizeTargets] = useMutation(randomizeTargetsMutation);
  const plotTwist = async () => {
    await randomizeTargets({ variables: { gameId: props.gameId } });
  };

  const body = getComponent(props.gameId, onClick, plotTwist);
  return <div>{body}</div>;
};

export default AdminPage;
