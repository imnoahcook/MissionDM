import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import graphqlClient from './api/graphql';
import Root from './components/Root';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap');
  body {
    font-family: Roboto, sans-serif;
  }
`;
// import MainRouter from 'routes/MainRouter';

console.log('hello????');

render(
  <ApolloProvider client={graphqlClient}>
    <GlobalStyle />
    <Root />
  </ApolloProvider>,
  document.getElementById('root'),
);
