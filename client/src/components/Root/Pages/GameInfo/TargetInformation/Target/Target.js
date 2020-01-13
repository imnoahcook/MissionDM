import React from 'react';
import styled from 'styled-components';
import { Card, Elevation } from '@blueprintjs/core';

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 60rem;
`;

const Target = props => {
  const { name, imageurl } = props;
  return (
    <Card elevation={Elevation.TWO}>
      <Wrapper>
        <h2>Your target:</h2>
        <p>{name}</p>
        <img src={imageurl} alt="Profile Picture" />
      </Wrapper>
    </Card>
  );
};

export default Target;
