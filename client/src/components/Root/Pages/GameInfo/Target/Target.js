import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 60rem;
`;

const LoginButton = props => {
  return (
    <Wrapper>
      <h2>Your target:</h2>
      <p>{props.name}</p>
      <img src={props.image} alt="Profile Picture" />
    </Wrapper>
  );
};

export default LoginButton;
