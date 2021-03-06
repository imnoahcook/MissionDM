import React from 'react';
import useForm from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { addGame } from '#root/store/ducks/game';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

const Bottom = styled.div`
  position: absolute;
  margin-bottom: 10px;
  bottom: 0px;
  width: 100%;
`;

import gql from 'graphql-tag';
import InputBoxWithTitle from '#root/components/Shared/InputBoxWithTitle';

import { Button } from 'react-bulma-components';

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
    await joinGame({ variables: { password } }).then(({ data }) => {
      if (data.createPlayer) {
        const { game } = data.createPlayer;
        dispatch(addGame(game));
      }
    });
  });
  return (
    <Bottom>
      <form onSubmit={onSubmit}>
        <InputBoxWithTitle
          title="Enter password to join a game"
          inputRef={register}
          placeholder="Password"
          name="password"
          disabled={isSubmitting}
        />
        <Button rounded fullwidth={true} disabled={isSubmitting} type="submit">
          Join
        </Button>
      </form>
    </Bottom>
  );
};

export default JoinGame;
