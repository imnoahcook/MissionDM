import React from 'react';
import styled from 'styled-components';

const DeathImage = styled.img`
  width: 200px;
  height: 200px;
`;

const Dead = () => {
  return (
    <>
      <h2>Sorry agent, you have been compromised!</h2>
      <br />
      <DeathImage
        src="https://upload.wikimedia.org/wikipedia/commons/b/bb/Silly_string.jpg"
        alt="Silly String"
      />
    </>
  );
};

export default Dead;
