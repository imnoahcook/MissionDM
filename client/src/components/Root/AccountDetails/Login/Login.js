import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoginButton from './LoginButton';

const mutation = gql`
  mutation($fbid: String!, $name: String!, $imageurl: String!) {
    createUserSession(fbid: $fbid, name: $name, imageurl: $imageurl) {
      id
      user {
        id
      }
    }
  }
`;

const Login = () => {
  const [createUserSession] = useMutation(mutation);

  const loginCallback = async res => {
    console.log(res);
    const { id, name, picture } = res;

    const result = await createUserSession({
      variables: {
        fbid: id,
        name,
        imageurl: picture.data.url,
      },
    });
    console.log(result);
  };

  return <LoginButton callback={loginCallback} />;
};
export default Login;
