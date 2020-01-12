import { useQuery } from '@apollo/react-hooks';
import React from 'react';
import gql from 'graphql-tag';

import { addGame } from '#root/store/ducks/game';
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
  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.games) {
        dispatch(addGame(data.games));
      }
      setInitialized(true);
    });
  }, []);

  if (loading) return 'Loading...';

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
