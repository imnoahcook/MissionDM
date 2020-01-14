import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';
import graphqlClient from '#root/api/graphql';
import { setSession } from '#root/store/ducks/session';
import { setGames } from '#root/store/ducks/game';
// Components
import Pages from './Pages';

const Heading = styled.strong`
  display: block;
  font-size: 2rem;
`;

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        id
        name
      }
      games {
        id
        name
      }
    }
  }
`;

const Root = () => {
  const dispatch = useDispatch();
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        const { games, ...sessionInfo } = data.userSession;
        dispatch(setGames(games));
        dispatch(setSession(sessionInfo));
      }
      setInitialized(true);
    });
  }, []);

  if (!initialized) return 'Loading...';

  return (
    <>
      <Heading>Mission DM</Heading>
      <Pages />
    </>
  );
};

export default Root;
