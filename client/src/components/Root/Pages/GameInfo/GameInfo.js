import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { useSelector } from 'react-redux';
import gql from 'graphql-tag';

import TargetInformation from './TargetInformation';
import AdminPage from './AdminPage';
import GameNotStarted from './GameNotStarted';
import Revived from './Revived';
import Won from './Won';

// Will have to add check to see if game is in progress/you are dead

const query = gql`
  query gameInfo($gameId: ID!) {
    gameInfo(gameId: $gameId) {
      target {
        name
        imageurl
        id
      }
      password
      admin
      alive
      revived
      userId
    }
  }
`;

const getComponent = (gameInfo, gameId, data, refetch) => {
  if (gameInfo.admin) {
    return <AdminPage gameId={gameId} />;
  } else if (gameInfo.revived) {
    return <Revived />;
  } else if (!gameInfo.target) {
    return <GameNotStarted />;
  } else if (gameInfo.target.id === gameInfo.userId) {
    return <Won />;
  } else {
    return <TargetInformation {...data} refetch={refetch} gameId={gameId} />;
  }
};

const GameInfo = () => {
  const { gameId } = useParams();
  const { data, loading, refetch } = useQuery(query, {
    variables: { gameId },
  });
  const games = useSelector(state => state.game); // O(n) lookup for game name in redux store... n is small but still not the cleanest
  const { name } = games.find(game => game.id === gameId);

  if (loading) return 'Loading...';

  // TODO show on UI some things like my password. This should be a higher order component that shows
  // different components based on the status of admin.

  const body = getComponent(data.gameInfo, gameId, data, refetch);
  return (
    <>
      <div>Game Name: {name}</div>
      {body}
    </>
  );
};

export default GameInfo;
