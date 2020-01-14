import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AccountDetails from './AccountDetails';

import GameInfo from './GameInfo';
import CreateGame from './CreateGame';
import { Box, Section } from 'react-bulma-components';

const Pages = () => {
  return (
    <Box>
      <Switch>
        <Route exact path="/" component={AccountDetails} />
        <Route exact path="/createGame" component={CreateGame} />
        <Route path="/game/:gameId" children={<GameInfo />} />
      </Switch>
    </Box>
  );
};

export default Pages;
