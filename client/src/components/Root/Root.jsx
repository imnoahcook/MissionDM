import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';
import graphqlClient from '#root/api/graphql';
import { setSession } from '#root/store/ducks/session';
// Components
import Login from './Login';
import Target from './Target';

const Heading = styled.strong`
  display: block;
  font-size: 2rem;
  margin: 0.75em 0 1em;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60rem;
`;

const query = gql`
  {
    userSession(me: true) {
      id
      user {
        id
      }
    }
  }
`;

const Root = () => {
  const dispatch = useDispatch;
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.userSession) {
        dispatchEvent(sesSession(data.userSession));
      }
      setInitialized(true);
    });
  });
  return (
    <Wrapper>
      <Heading>Mission DM</Heading>
      <Login />
      <Target
        name="John Smith"
        image="https://www.generalatlantic.com/wp-content/uploads/2017/11/square-image-jared-cohen-general-atlantic-headshot.jpg"
      />
    </Wrapper>
  );
};

// {loggedIn || <LoginButton sponseCallback={fbResponseCallback} />}
export default Root;
