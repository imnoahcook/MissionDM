import React from 'react';
import styled from 'styled-components';

import { Heading, Content } from 'react-bulma-components';

const PageBody = styled.div`
  font-size: 1rem;
`;

const TargetName = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

const Target = props => {
  const { name, imageurl, password } = props;
  return (
    <PageBody>
      <p>
        Your password is <b>{password}</b>
      </p>
      <hr />
      <p>Your target is</p>
      <TargetName>{name}</TargetName>
      <img src={imageurl} alt="Profile Picture" />
    </PageBody>
  );
};

export default Target;
