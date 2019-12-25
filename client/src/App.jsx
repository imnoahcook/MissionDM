import * as React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,500&display=swap');
  body {
    font-family: Roboto, sans-serif;
  }
`;
// import MainRouter from 'routes/MainRouter';

render(
  <>
    <GlobalStyle />
    <Root />
  </>,
  document.getElementById('root'),
);
