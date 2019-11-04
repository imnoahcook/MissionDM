import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Test, Test2 } from 'pages';

const MainRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Test} />
      <Route exact path="/test" component={Test2} />
    </Router>
  );
};

export default MainRouter;
