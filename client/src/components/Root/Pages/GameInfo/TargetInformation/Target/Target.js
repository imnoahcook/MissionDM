import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 60rem;
`;

const Target = props => {
  const { name, imageurl } = props;
  return (
    <Wrapper>
      <h2>Your target:</h2>
      <p>{name}</p>
      <img src={imageurl} alt="Profile Picture" />
    </Wrapper>
  );
};

export default Target;
