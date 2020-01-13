import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';

import gql from 'graphql-tag';

import AppToaster from '#root/components/shared/toaster';
import { Button, InputGroup } from '@blueprintjs/core';

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const KillButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const mutation = gql`
  mutation($password: String!, $gameId: String!) {
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
    const { gameId } = props;
    console.log(gameId);
    const result = await killTarget({ variables: { password, gameId } }).then(
      ({ data }) => {
        console.log(password);
        console.log(gameId);
        if (data.killTarget) {
          // TODO have it refetch the target
        } else {
          AppToaster.show({ message: toasted });
        }
      },
    );
  });
  return (
    <form onSubmit={onSubmit}>
      <LabelText>Target Password</LabelText>
      <InputGroup
        disabled={isSubmitting}
        name="password"
        type="text"
        ref={register}
      />
      <Button disabled={isSubmitting} type="submit">
        Compromise
      </Button>
    </form>
  );
};

export default TargetSubmitForm;
