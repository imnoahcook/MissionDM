import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

const Root = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const fbResponseCallback = response => {
    console.log(response, "I'm in a different component now");
    setLoggedIn(true);

    // axios.post('localhost:3001/api/login', response);
  };

  return (
    <Wrapper>
      <Heading>Mission DM</Heading>
      {/* <Login /> */}
      <Target
        name="John Smith"
        image="https://www.generalatlantic.com/wp-content/uploads/2017/11/square-image-jared-cohen-general-atlantic-headshot.jpg"
      />
    </Wrapper>
  );
};

// {loggedIn || <LoginButton sponseCallback={fbResponseCallback} />}
export default Root;
