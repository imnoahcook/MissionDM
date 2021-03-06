import React, { useState, useEffect } from 'react';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';
import graphqlClient from '#root/api/graphql';
import { setSession } from '#root/store/ducks/session';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Components
import Pages from './Pages';
import {
  Heading,
  Container,
  Section,
  Notification,
  Content,
} from 'react-bulma-components';

const Footer = styled.div`
  min-height: 10rem;
  background-color: ${props => props.theme.orange};
  color: white;
  font-weight: bold;
`;

const FooterText = styled.div`
  padding: 1rem;
`;

const query = gql`
  {
    userSession(me: true) {
      id
      user {
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
        dispatch(setSession(data.userSession));
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
      <Footer>
        <FooterText>
          <Content>
            This application was developed by University of Florida students for
            Dance Marathon at the University of Florida. For more information
            about Dance Marathon at UF please visit
            <br />
            <a href="https://floridadm.org" target="_blank">
              floridadm.org
            </a>
          </Content>
        </FooterText>
      </Footer>
    </>
  );
};

export default Root;
