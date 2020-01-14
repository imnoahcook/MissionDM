import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import AccountDetails from './AccountDetails';
import GameInfo from './GameInfo';
import CreateGame from './CreateGame';
import UserInfo from './UserInfo';
import { Box } from 'react-bulma-components';

const MinHeight = styled.div`
  min-height: 70vh;
  overflow: auto;
  position: relative;
  background-color: red;
`;

const Pages = () => {
  const session = useSelector(state => state.session);

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
