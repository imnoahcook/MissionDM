import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AccountDetails from './AccountDetails';

import GameInfo from './GameInfo';

const Pages = () => {
  return (
    <Router>
      <Route exact path="/" component={AccountDetails} />
      <Route path="/:gameId" children={<GameInfo />} />
    </Router>
  );
};

export default Pages;
