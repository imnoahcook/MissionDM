import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { addGame } from '#root/store/ducks/game';
import { useDispatch } from 'react-redux';

import gql from 'graphql-tag';

import TextInput from '#root/components/shared/TextInput';

const mutation = gql`
  mutation($gameId: GameId, $password: String!) {
    killTarget(password: $password) {
      id
      name
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

  const onSubmit = handleSubmit(async ({ password, gameId }) => {
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

export default TargetSubmitForm;
