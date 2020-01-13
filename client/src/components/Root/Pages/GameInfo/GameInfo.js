import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import gql from 'graphql-tag';

import Target from './Target';
import TargetSubmitForm from './TargetSubmitForm';

// Will have to add check to see if game is in progress/you are dead

const query = gql`
  query gameInfo($gameId: ID!) {
    gameInfo(gameId: $gameId) {
      target {
        name
        imageurl
      }
      password
    }
  }
`;

const GameInfo = () => {
  const { gameId } = useParams();
  const { data, loading, refetch } = useQuery(query, {
    variables: { gameId },
  });
  const games = useSelector(state => state.game); // O(n) lookup for game name in redux store... n is small but still not the cleanest
  const { name } = games.find(game => game.id === gameId);

  if (loading) return 'Loading...';

  return (
    <>
      <div>Game Name: {name}</div>
      <Target {...data.gameInfo} />
      <TargetSubmitForm refetch={refetch} gameId={gameId} />
    </>
  );
};

// <Target name={data.target.name} imageurl={data.target.imageurl} />
export default GameInfo;
