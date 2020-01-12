import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import gql from 'graphql-tag';

import GamesList from './GamesList';
import JoinGame from './JoinGame';
const query = gql`
  {
    games {
      id
      name
    }
  }
`;

const Games = () => {
  const { data, loading } = useQuery(query);

  if (loading) return 'Loading...';

  return (
    <>
      <p>Games you are a part of:</p>
      <GamesList {...data} />
      <p>Join a game</p>
      <JoinGame />
    </>
  );
};

export default Games;
