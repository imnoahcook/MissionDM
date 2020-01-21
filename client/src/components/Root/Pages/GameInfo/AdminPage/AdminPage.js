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

const kill24HoursMutation = gql`
  mutation kill24Hours($gameId: ID!) {
    kill24Hours(gameId: $gameId)
  }
`;

const getComponent = (gameId, onClick, plotTwist, plotTwist2) => {
  const games = useSelector(state => state.game);
  if (!games) return 'Loading...';
  const running = games.find(game => game.id === gameId).isRunning;
  if (running) {
    return (
      <Button fullwidth={true} onClick={onClick}>
        Start Game
      </Button>
    );
  } else {
    return (
      <>
        <Button fullwidth={true} onClick={plotTwist}>
          Randomize Targets
        </Button>
        <Button fullwidth={true} onClick={plotTwist2}>
          Kill targets that have not killed in the last 24 hours
        </Button>
      </>
    );
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

  const [kill24Hours] = useMutation(kill24HoursMutation);
  const plotTwist2 = async () => {
    await kill24Hours({ variables: { gameId: props.gameId } });
  };

  const body = getComponent(props.gameId, onClick, plotTwist, plotTwist2);
  return <div>{body}</div>;
};

export default AdminPage;
