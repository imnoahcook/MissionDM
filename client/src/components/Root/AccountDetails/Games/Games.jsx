import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import gql from 'graphql-tag';

import GamesList from './GamesList';
const query = gql`
  {
    games {
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
      <GamesList games={data} />
    </>
  );
};

export default Games;
