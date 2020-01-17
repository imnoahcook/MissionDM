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
        name
        id
      }
    }
  }
`;

const Login = () => {
  const dispatch = useDispatch();
  const [createUserSession] = useMutation(mutation);

  const loginCallback = async res => {
    const { id, name } = res;
    const photoURL =
      'https://graph.facebook.com/' + id.toString() + '/picture?type=large';
    await createUserSession({
      variables: {
        fbid: id,
        name,
        imageurl: photoURL,
      },
    }).then(({ data }) => {
      if (data.createUserSession) {
        dispatch(setSession(data.createUserSession));
      }
    });
  };

  return (
    <>
      Welcome to Mission DM. Please Log In to facebook to get assigned your
      first mission
      <hr />
      <LoginButton callback={loginCallback} />
    </>
  );
};

export default Login;
