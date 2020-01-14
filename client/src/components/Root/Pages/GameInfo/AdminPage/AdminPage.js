import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';

const startGameMutation = gql`
  mutation startGame($gameId: ID!) {
    startGame(gameId: $gameId)
  }
`;

const AdminPage = props => {
  const [startGame] = useMutation(startGameMutation);
  const { gameId } = props;
  const onClick = async () => {
    await startGame({ variables: { gameId: props.gameId } });
  };
  return (
    <div>
      <button onClick={onClick}>Start Game</button>
    </div>
  );
};

export default AdminPage;
