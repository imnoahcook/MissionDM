import React from 'react';
import { useSelector } from 'react-redux';

import Login from './Login';


// will show the target once target is implemented 
const AccountDetails = () => {
  const session = useSelector(state => state.session);

  return session ? null : <Login />;
};

export default AccountDetails;
