import React from 'react';

const InputBoxWithTitle = props => {
  const { title, inputRef, name, placeholder, disabled } = props;
  return (
    <div className="field">
      <label className="label">{title}</label>
      <div className="control">
        <input
          disabled={disabled}
          ref={inputRef}
          className="input"
          name={name}
          type="text"
          placeholder={placeholder || ''}
        />
      </div>
    </div>
  );
};

export default InputBoxWithTitle;
