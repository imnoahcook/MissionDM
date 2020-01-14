import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import styled from 'styled-components';


const TextInfo = styled.div`
  margin-bottom: 10px;
  bottom: 0;
  right: 0;
  width: 100%;
`;

const mutation = gql`
    mutation($sessionId: ID!){
        deleteUserSession(sessionId: $sessionId)
    }
`;

const UserInfo = props => {
    const logoutUser = () => {
      const didLogout = useMutation(mutation);
      console.log(didLogout);
    };
    console.log(props);
    return(
    <>
      {!props || <TextInfo>Logged in as: {props.user.name}</TextInfo>}
      <a onClick={logoutUser}>Logout</a>
    </>
    );
};
export default UserInfo;