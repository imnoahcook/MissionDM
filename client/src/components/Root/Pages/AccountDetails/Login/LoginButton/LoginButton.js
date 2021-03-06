import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginButton = props => {
  return (
    <FacebookLogin
      appId="1129540520415157"
      autoLoad={false}
      fields="name,email,picture"
      callback={props.callback}
    />
  );
};
// callback keys are id, name, picture, email,

export default LoginButton;
