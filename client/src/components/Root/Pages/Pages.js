import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import AccountDetails from './AccountDetails';

const Pages = () => {
  return (
    <Router>
      <Route exact path='/' component={AccountDetails}/>
      <Route path='/:gameId' children={<GameInfo />} />
    </Router>
  );
};

function GameInfo() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { gameId } = useParams();

  return (
    <div>
      <h3>gameID: {gameId}</h3>
    </div>
  );
}

export default Pages;
