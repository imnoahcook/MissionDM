import React from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';
import Games from './Games';

// will show the target once target is implemented
const AccountDetails = () => {
  const session = useSelector(state => state.session);

  return session ? <Games /> : <Login />;
};

export default AccountDetails;
