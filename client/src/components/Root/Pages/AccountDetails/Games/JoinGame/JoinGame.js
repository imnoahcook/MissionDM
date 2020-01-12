import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import TextInput from '#root/components/shared/TextInput';

const Label = styled.label`
  display: block;
  :not(:first-child) {
    margin-top: 0.75rem;
  }
`;

const LabelText = styled.strong`
  display: block;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const JoinButton = styled.button`
  display: inline-block;
  margin-top: 0.5rem;
`;

const mutation = gql`
  mutation($password: String!) {
    createPlayer(password: $password) {
      id
    }
  }
`;

const JoinGame = () => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();
  const [joinGame] = useMutation(mutation);
  const onSubmit = handleSubmit(async ({ password }) => {
    const result = await joinGame({ variables: { password } });
    console.log(result);
  });
  return (
    <form onSubmit={onSubmit}>
      <Label>
        <LabelText>Game Password</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="password"
          type="text"
          ref={register}
        />
      </Label>

      <JoinButton disabled={isSubmitting} type="submit">
        Join
      </JoinButton>
    </form>
  );
};

export default JoinGame;
