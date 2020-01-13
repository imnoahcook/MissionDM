import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Target from './Target';
import TargetSubmitForm from './TargetSubmitForm';

// Will have to add check to see if game is in progress/you are dead

const query = gql`
  {
    target(gameId: "3") {
      id
      name
      imageurl
    }
  }
`;

const GameInfo = () => {
  const { gameId } = useParams();
  const { data, loading, refetch } = useQuery(query, {
    variables: { gameId },
  });

  if (loading) return 'Loading...';

  return (
    <>
      <Target {...data} />
      <TargetSubmitForm refetch={refetch} gameId={gameId} />
    </>
  );
};

// <Target name={data.target.name} imageurl={data.target.imageurl} />
export default GameInfo;
