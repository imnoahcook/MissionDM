import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/react-hooks';

import gql from 'graphql-tag';

import { GoodToaster, BadToaster } from '#root/components/shared/toaster';

import { Button, InputGroup, Intent } from '@blueprintjs/core';
import InputBoxWithTitle from '../../../../../Shared/TextInput';

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
  console.log(GoodToaster);
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
      if (data.killTarget) {
        //display toaster
        GoodToaster.show({
          message: 'Successfully eliminated target',
          intent: Intent.DANGER,
        });
        props.refetch();
      } else {
        BadToaster.show({
          message: 'Error eliminating target',
          intent: Intent.DANGER,
        });
      }
    });
  });

  return (
    <form onSubmit={onSubmit}>
      <InputBoxWithTitle
        title="Target Password"
        ref={register}
        placeholder="target password"
        name="password"
        disabled={isSubmitting}
      />

      <Button disabled={isSubmitting} type="submit">
        Compromise
      </Button>
    </form>
  );
};

// <div className="field">
// <label className="label">Target Password</label>
// <div className="control">
//   <input
//     disabled={isSubmitting}
//     ref={register}
//     className="input"
//     name="password"
//     type="text"
//     placeholder="Text input"
//   />
// </div>
// </div>

export default TargetSubmitForm;
