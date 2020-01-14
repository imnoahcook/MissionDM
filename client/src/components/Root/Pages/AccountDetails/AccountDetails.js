import React from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';
import Games from './Games';

const AccountDetails = () => {
  const session = useSelector(state => state.session);

  console.log(session);

  return session ? <Games /> : <Login />;
};

export default AccountDetails;
