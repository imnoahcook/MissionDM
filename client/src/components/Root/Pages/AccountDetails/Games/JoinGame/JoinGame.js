import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';
import { addGame } from '#root/store/ducks/game';
import { useDispatch } from 'react-redux';

import gql from 'graphql-tag';

import InputBoxWithTitle from '#root/components/shared/InputBoxWithTitle';

import { Button } from 'react-bulma-components';
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
      game {
        id
        name
      }
    }
  }
`;

const JoinGame = () => {
  const dispatch = useDispatch();
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();
  const [joinGame] = useMutation(mutation);
  const onSubmit = handleSubmit(async ({ password }) => {
    const result = await joinGame({ variables: { password } }).then(
      ({ data }) => {
        if (data.createPlayer) {
          const { game } = data.createPlayer;
          dispatch(addGame(game));
        }
      },
    );
  });
  return (
    <form onSubmit={onSubmit}>
      <Label>
        <LabelText>Game Password</LabelText>
        <InputBoxWithTitle
          disabled={isSubmitting}
          name="password"
          inputRef={register}
          placeholder="game password"
        />
      </Label>
      <Button disabled={isSubmitting} type="submit">
        Join
      </Button>
    </form>
  );
};

export default JoinGame;
