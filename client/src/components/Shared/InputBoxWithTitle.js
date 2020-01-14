import React from 'react';
import styled from 'styled-components';
const Blue = styled.div`
  background-color: blue;
`;

import { Container } from 'react-bulma-components';

const InputBoxWithTitle = props => {
  const { title, inputRef, name, placeholder, disabled } = props;
  return (
    <div className="field">
      <label className="label">{title}</label>
      <div className="control">
        <input
          disabled={disabled}
          ref={inputRef}
          className="input is-expanded"
          name={name}
          type="text"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputBoxWithTitle;
