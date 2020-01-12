import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login, Target, Test } from 'pages';

const MainRouter = () => {
  return (
    <Router>
      <Route exact path="/" component={Login} />
      <Route exact path="/target" component={Target} />
      <Route exact path="/test" component={Test} />
    </Router>
  );
};

export default MainRouter;
