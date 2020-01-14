import React from 'react';
import styled from 'styled-components';

import { Heading } from 'react-bulma-components';

const Target = props => {
  const { name, imageurl, password } = props;
  return (
    <>
      <Heading>Your target:</Heading>
      <p>{name}</p>
      <img src={imageurl} alt="Profile Picture" />
      <p>Your password is {password}</p>
    </>
  );
};

export default Target;
