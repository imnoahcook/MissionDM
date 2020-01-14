import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

import GameButton from './GameButton';
import { Button } from 'react-bulma-components';
import gql from 'graphql-tag';
import { setGames } from '#root/store/ducks/game';
import graphqlClient from '#root/api/graphql';

const { Group } = Button;

const PrefaceText = styled.div`
  font-weight: bold;
  color: #363636;
  padding-bottom: 10px;
`;

const query = gql`
  {
    games {
      id
      name
      isRunning
    }
  }
`;

const GamesList = () => {
  const games = useSelector(state => state.game);
  const dispatch = useDispatch();

  useEffect(() => {
    graphqlClient.query({ query }).then(({ data }) => {
      if (data.games) {
        dispatch(setGames(data.games));
      }
    });
  }, []);

  if (!games) return 'Loading...';
  return (
    <Group>
      <PrefaceText>Games you are a part of:</PrefaceText>
      {games.map(game => (
        <GameButton key={game.id} {...game} />
      ))}
    </Group>
  );
};

export default GamesList;
