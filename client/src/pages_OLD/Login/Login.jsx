import * as React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>Welcome to mission DM</h1>
      <Link to="/target">Click here to log in</Link>{' '}
      {/* Facebook login stuff */}
    </div>
  );
};

export default Login;
