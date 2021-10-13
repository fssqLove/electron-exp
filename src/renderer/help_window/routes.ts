import Login from './pages/Login';
import Homepage from './pages/Homepage';

const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage,
  },
  {
    path: '/login',
    component: Login,
  },
];

export default routes;
