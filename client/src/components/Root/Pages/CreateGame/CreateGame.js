import React from 'react';
import useForm from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';

import gql from 'graphql-tag';

import InputBoxWithTitle from '#root/components/Shared/InputBoxWithTitle';
import { Button } from 'react-bulma-components';

const mutation = gql`
  mutation($name: String!, $password: String!) {
    createGame(name: $name, password: $password, teams: false) {
      name
    }
  }
`;

const createGame = props => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();
  const [killTarget] = useMutation(mutation);

  const onSubmit = handleSubmit(async ({ name, password }) => {
    await killTarget({
      variables: { name: name, password: password },
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <InputBoxWithTitle
        title="Game Name"
        inputRef={register}
        placeholder="name"
        name="name"
        disabled={isSubmitting}
      />

      <InputBoxWithTitle
        title="Game Password"
        inputRef={register}
        placeholder="password"
        name="password"
        disabled={isSubmitting}
      />

      <Button disabled={isSubmitting} type="submit">
        Create
      </Button>
    </form>
  );
};

export default createGame;
