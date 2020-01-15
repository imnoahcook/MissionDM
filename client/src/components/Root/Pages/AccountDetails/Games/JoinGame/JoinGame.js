import React from 'react';
import useForm from 'react-hook-form';
import { useMutation } from '@apollo/react-hooks';
import { addGame } from '#root/store/ducks/game';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import gql from 'graphql-tag';
import InputBoxWithTitle from '#root/components/shared/InputBoxWithTitle';

import { Button } from 'react-bulma-components';
import Bottom from '#root/components/shared/Bottom';

const TempBottom = styled.div`
  bottom: 40px;
  width: 100%;
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
