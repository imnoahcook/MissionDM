import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Target from './Target';

// Will have to add check to see if game is in progress/you are dead

const query = gql`
  query {
    target(gameId: $gameId) {
      name
      imageurl
    }
  }
`;

const GameInfo = () => {
  const { gameId } = useParams();
  const { data } = useQuery(query, {
    variables: { gameId },
  });

  return (
    <>
      <h3>gameID: {gameId}</h3>
      <Target name={data.target.name} imageurl={data.target.imageurl} />
    </>
  );
};

export default GameInfo;
