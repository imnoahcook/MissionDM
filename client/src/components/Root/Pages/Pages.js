import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import AccountDetails from './AccountDetails';
import GameInfo from './GameInfo';
import CreateGame from './CreateGame';
import { Box } from 'react-bulma-components';

const MinHeight = styled.div`
  min-height: 70vh;
  overflow: auto;
  position: relative;
`;

const UserInfo = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0px;
`;


const GrowingDiv = styled.div``;

const Pages = () => {
  const session = useSelector(state => state.session);

  if (!session) return 'Loading...';
  return (
    <Box>
      <MinHeight>
        <GrowingDiv>
          <Switch>
            <Route exact path="/" component={AccountDetails} />
            <Route exact path="/createGame" component={CreateGame} />
            <Route path="/game/:gameId" children={<GameInfo />} />
          </Switch>
        </GrowingDiv>
        <UserInfo>Logged in as: {session.user.name}</UserInfo>
      </MinHeight>
    </Box>
  );
};

export default Pages;
