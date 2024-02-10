import React from 'react';
import s from './styles/style.module.scss';
import {Link, Outlet} from 'react-router-dom';

export default function NavBar(): React.JSX.Element {
  return (
    <>
      <nav className={s.navbar}>
        <div>
          <Link to="/">Главная</Link>
        </div>
        <div>
          <Link to="/albums">Работы</Link> {/* компонент с альбомами */}
        </div>
        <div>
          <p>Gleb Polkovnikov</p>
        </div>
        <div>
          <Link to="/">Регистрация</Link> {/* Ссылка на регу */}
        </div>
        <div>
          <Link to="/">Войти</Link> {/* Ссылка на вход */}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
