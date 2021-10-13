import React, { FC } from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';

function Home() {
  return (
    <div>
      <h3>Home Page</h3>
    </div>
  );
}

function User() {
  return (
    <div>
      <h3>User Page</h3>
    </div>
  );
}

function Empty() {
  return (
    <div>
      <h3>Empty Page</h3>
    </div>
  );
}

const App:FC = () => (
  <div>
    <h3>RouterPage</h3>

    <Router>
      <Link to="/">首页</Link>
      <Link to="/user">用户中心</Link>

      <Switch>
        {/* exact 实现精确匹配 */}
        <Route
          exact
          path="/"
          component={Home}
        />

        <Route
          path="/user"
          component={User}
        />

        <Route
          component={Empty}
        />
      </Switch>

    </Router>
  </div>
);

render(<App />, document.getElementById('root'));
