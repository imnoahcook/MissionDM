import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { useDispatch } from 'react-redux';

import gql from 'graphql-tag';

import TextInput from '#root/components/shared/TextInput';

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
  mutation($gameId: ID!, $password: String!) {
    killTarget(gameId: $gameId, password: $password) {
      id
    }
  }
`;

const TargetSubmitForm = props => {
  // const dispatch = useDispatch();
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
        console.log(data);
        if (data.killTarget) {
          // const { game } = data.createPlayer;
          // dispatch(addGame(game));
        }
      },
    );
  });
  return (
    <form onSubmit={onSubmit}>
      <LabelText>Target Password</LabelText>
      <TextInput
        disabled={isSubmitting}
        name="password"
        type="text"
        ref={register}
      />
      <JoinButton disabled={isSubmitting} type="submit">
        Join
      </JoinButton>
    </form>
  );
};

export default TargetSubmitForm;
