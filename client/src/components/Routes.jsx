import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
  withRouter
} from 'react-router-dom';

import Home from './Home';
import Dashboard from './Dashboard';
import Events from './Events';
import Create from './Create';

class Routes extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <div>
          <NavLink to="/dashboard">PepClock</NavLink>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/events/:id" component={Events} />
          <Route path="/create" component={Create} />
        </div>
      </Router>
    );
  }
}

export default Routes;
