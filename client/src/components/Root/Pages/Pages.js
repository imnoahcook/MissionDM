import React from 'react';
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import AccountDetails from './AccountDetails';
import GameInfo from './GameInfo';
import CreateGame from './CreateGame';
import { Box } from 'react-bulma-components';

const MinHeight = styled.div`
  min-height: 70vh;
  overflow: auto;
`;

const Pages = () => {
  const location = useLocation();
  const session = useSelector(state => state.session);

  if (!session && location.pathname !== '/') return <Redirect to="/" />;

  return (
    <Box>
      <MinHeight>
        <Switch>
          <Route exact path="/" component={AccountDetails} />
          <Route exact path="/createGame" component={CreateGame}>
            <CreateGame />
          </Route>
          <Route path="/game/:gameId" children={<GameInfo />} />
        </Switch>
      </MinHeight>
    </Box>
  );
};

export default Pages;
