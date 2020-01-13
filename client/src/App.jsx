import '@babel/polyfill';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import graphqlClient from './api/graphql';
import Root from './components/Root';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import * as theme from './theme';

import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap');
  body {
    background-color: #F5F8FA;
    font-family: Roboto, sans-serif;
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
