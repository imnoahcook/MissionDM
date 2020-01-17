import React, { useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import styled from 'styled-components';

const TextInfo = styled.div`
  margin-bottom: 10px;
  bottom: 0;
  right: 0;
  width: 100%;
`;

// const mutation = gql`
//   mutation($sessionId: ID!) {
//     deleteUserSession(sessionId: $sessionId)
//   }
// `;

const UserInfo = props => {
//   const [logOutMutation] = useMutation(mutation);
//   const logoutUser = async () => {
//     logOutMutation({ variables: { sessionId: props.user.id } });
//   };
  return (
    <>
      {!props || <TextInfo>Logged in as: {props.user.name}</TextInfo>}
    </>
  );
};
export default UserInfo;
