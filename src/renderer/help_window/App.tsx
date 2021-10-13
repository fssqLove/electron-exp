import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

function App() {
  return (
    <Router>
      <Link to="/">首页</Link>
      <Link to="/login">登录</Link>
      {renderRoutes(routes)}
    </Router>
  );
}

export default App;
