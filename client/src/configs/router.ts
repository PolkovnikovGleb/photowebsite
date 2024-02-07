import Auth from '../pages/auth';
import Home from '../pages/home';
import AlbumPage from 'pages/album/AlbumPage';

export const routes = {
  home: '/',
  auth: '/auth',
  albums: '/albums',
};

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
  {
    id: 2,
    name: 'albums',
    path: routes.albums,
    component: AlbumPage,
  },
];
