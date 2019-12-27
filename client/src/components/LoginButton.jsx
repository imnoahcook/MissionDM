import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LoginButton = props => {
  return (
    <FacebookLogin
      appId="1129540520415157"
      autoLoad={true}
      fields="name,email,picture"
      callback={props.responseCallback}
    />
  );
};

export default LoginButton;
