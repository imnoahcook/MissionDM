import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';

import gql from 'graphql-tag';

import { GoodToaster, BadToaster } from '#root/components/shared/toaster';
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
      console.log(data);
      if(data.killTarget){
        //display toaster
        GoodToaster.show({ message: 'Successfully eliminated target'});
        props.refetch();
      } else {
        BadToaster.show({ message: 'Error eliminating target' });
      }
    });
  });
  return (
    <form onSubmit={onSubmit}>
      <LabelText>Target Password</LabelText>
      <InputGroup
        disabled={isSubmitting}
        name="password"
        type="text"
        inputRef={register}
      />
      <Button disabled={isSubmitting} type="submit">
        Compromise
      </Button>
    </form>
  );
};

export default TargetSubmitForm;
