import Auth from '../pages/auth/AuthPage'
import Home from '../pages/home/HomePage'
import Album from '../pages/album/AlbumPage'

export const routes = {
  home: '/',
  auth: '/auth',
  albums: '/albums'
}

export const router = [
  {
    id: 1,
    name: 'home',
    path: routes.home,
    component: Home
  },
  {
    id: 5,
    name: 'auth',
    path: routes.auth,
    component: Auth
  },
  {
    id: 2,
    name: 'albums',
    path: routes.albums,
    component: Album
  }
]
