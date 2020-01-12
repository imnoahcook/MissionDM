import React from 'react';
import useForm from 'react-hook-form';
import styled from 'styled-components';

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

const JoinGame = () => {
  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();
  const onsubmit = handleSubmit(async () => {
    console.log('yo');
  });
  return (
    <form onSubmit={handleSubmit}>
      <Label>
        <LabelText>Game Password</LabelText>
        <TextInput
          disabled={isSubmitting}
          name="gamepassword"
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
