import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import gql from 'graphql-tag';

import GamesList from './GamesList';
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
    </>
  );
};

export default Games;
