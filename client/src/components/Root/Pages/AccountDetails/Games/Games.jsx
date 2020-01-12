import React, { useEffect, useState } from 'react';
import gql from 'graphql-tag';
import graphqlClient from '#root/api/graphql';
import { useDispatch } from 'react-redux';

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
  const dispatch = useDispatch();

  const [initialized, setInitialized] = useState(false);
  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.games) {
        dispatch(addGame(data.games));
      }
      setInitialized(true);
    });
  }, []);

  if (!initialized) return 'Loading...';

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
