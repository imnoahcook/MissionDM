import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import AccountDetails from './AccountDetails';
import GameInfo from './GameInfo';
import CreateGame from './CreateGame';
import { Box } from 'react-bulma-components';

const MinHeight = styled.div`
  min-height: 30em;
`;

const Pages = () => {
  return (
    <Box>
      <MinHeight>
        <Switch>
          <Route exact path="/" component={AccountDetails} />
          <Route exact path="/createGame" component={CreateGame} />
          <Route path="/game/:gameId" children={<GameInfo />} />
        </Switch>
      </MinHeight>
    </Box>
  );
};

export default Pages;
