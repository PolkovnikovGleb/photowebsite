import Auth from '../pages/auth';
import Home from '../pages/home'

export const routes = {
  home: '/',
  auth: '/auth',
}

export const router = [
  {
    id: 1,
    name: 'home',
    path: routes.home,
    component: Home,
  },
  {
    id: 5,
    name: 'auth',
    path: routes.auth,
    component: Auth,
  },
]