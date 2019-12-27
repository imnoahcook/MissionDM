import React, { useState } from 'react';
import styled from 'styled-components';

// Components
import LoginButton from '../LoginButton';

const Heading = styled.strong`
  display: block;
  font-size: 2rem;
  margin: 0.75em 0 1em;
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60rem;
`;

const Root = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const fbResponseCallback = response => {
    console.log(response, "I'm in a different component now");
    setLoggedIn(true);
  };

  console.log(loggedIn);
  return (
    <Wrapper>
      <Heading>Mission DM</Heading>
      {loggedIn || <LoginButton responseCallback={fbResponseCallback} />}
    </Wrapper>
  );
};

export default Root;
