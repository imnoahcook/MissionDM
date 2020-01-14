import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';
import graphqlClient from '#root/api/graphql';
import { setSession } from '#root/store/ducks/session';
import { setGames } from '#root/store/ducks/game';
import { Link } from 'react-router-dom';

// Components
import Pages from './Pages';
import {
  Heading,
  Content,
  Container,
  Section,
  Notification,
  Hero,
} from 'react-bulma-components';

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
        isRunning
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
      <Section>
        <Container renderAs={Link} to="/">
          <Notification color="info">
            <Heading>MISSION DM</Heading>
          </Notification>
        </Container>
        <br />
        <Pages />
      </Section>
    </>
  );
};

export default Root;
