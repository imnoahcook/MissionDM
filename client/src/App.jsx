import '@babel/polyfill';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import graphqlClient from './api/graphql';
import Root from './components/Root';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import * as theme from './theme';

import 'react-bulma-components/dist/react-bulma-components.min.css';

const GlobalStyle = createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap'); */
  body {
    background-color: ${props => props.theme.eggshell};
    /* font-family: Roboto, sans-serif; */
  }
`;

render(
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Root />
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
