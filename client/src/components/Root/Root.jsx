import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Test from '../../pages/Test';

// Components
// import LoginButton from '../LoginButton';

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

  return (
    <Wrapper>
      <Heading>Mission DM</Heading>
<<<<<<< HEAD
      {loggedIn || <LoginButton responseCallback={fbResponseCallback} />}
      <Test />
=======
      <a href="http://localhost:3001/login/facebook">log in</a>
>>>>>>> 3b2c8872cd2839001f78d48459a43fcfc7a5fe66
    </Wrapper>
  );
};

// {loggedIn || <LoginButton responseCallback={fbResponseCallback} />}
export default Root;
