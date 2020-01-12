import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useDispatch } from 'react-redux';
import { setSession } from '#root/store/ducks/session';

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
  const dispatch = useDispatch();
  const [createUserSession] = useMutation(mutation);

  const loginCallback = async res => {
    console.log(res);
    const { id, name, picture } = res;
    const photoURL = 'https://graph.facebook.com/' + id.toString() + '/picture?type=large';
    console.log(photoURL);
    const result = await createUserSession({
      variables: {
        fbid: id,
        name,
        imageurl: photoURL,
      },
    });
    if (!result.data.createUserSession) return;
    dispatch(setSession(result.data.createUserSession.id));
  };

  return <LoginButton callback={loginCallback} />;
};

export default Login;
