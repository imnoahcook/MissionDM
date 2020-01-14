import '@babel/polyfill';
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import graphqlClient from './api/graphql';
import Root from './components/Root';

import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import * as theme from './theme';

import 'react-bulma-components/dist/react-bulma-components.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.eggshell};
    box-sizing: border-box;
    text-align: center;
  }
`;

render(
  <Provider store={store}>
    <ApolloProvider client={graphqlClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Root />
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('root'),
);
