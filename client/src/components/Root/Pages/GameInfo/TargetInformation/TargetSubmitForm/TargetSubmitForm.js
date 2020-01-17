import React from 'react';
import useForm from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';

import gql from 'graphql-tag';

import InputBoxWithTitle from '#root/components/Shared/InputBoxWithTitle';
import { Button } from 'react-bulma-components';

const mutation = gql`
  mutation($password: String!, $gameId: ID!) {
    killTarget(password: $password, gameId: $gameId)
  }
`;

const TargetSubmitForm = props => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();
  const [killTarget] = useMutation(mutation);

  const onSubmit = handleSubmit(async ({ password }) => {
    await killTarget({
      variables: { password, gameId: props.gameId },
    }).then(({ data }) => {
      if (data.killTarget) {
        props.refetch();
      }
    });
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <br />
        <InputBoxWithTitle
          inputRef={register}
          placeholder="Target Password"
          name="password"
          disabled={isSubmitting}
        />
        <Button rounded fullwidth={true} disabled={isSubmitting} type="submit">
          Compromise
        </Button>
      </form>
    </>
  );
};

export default TargetSubmitForm;
