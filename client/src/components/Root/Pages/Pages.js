import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AccountDetails from './AccountDetails';

import GameInfo from './GameInfo';
import CreateGame from './CreateGame';
import { Box, Section } from 'react-bulma-components';

const Pages = () => {
  return (
    <Section>
      <Box>
        <Router>
          <Route exact path="/" component={AccountDetails} />
          <Route exact path="/createGame" component={CreateGame} />
          <Route path="/game/:gameId" children={<GameInfo />} />
        </Router>
      </Box>
    </Section>
  );
};

export default Pages;
