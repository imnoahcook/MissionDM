import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';

import graphqlClient from './api/graphql';
import Root from './components/Root';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import * as theme from './theme';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap');
  body {
    font-family: Roboto, sans-serif;
  }
`;
render(
  <ApolloProvider client={graphqlClient}>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Root />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);
