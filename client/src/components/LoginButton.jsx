import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = response => {
  console.log(response);
};

const cl = () => {
  console.log('component was clicked');
};

const LoginButton = () => {
  return (
    <FacebookLogin
      appId="1129540520415157"
      autoLoad={true}
      fields="name,email,picture"
      onClick={cl}
      callback={responseFacebook}
    />
  );
};

export default LoginButton;
