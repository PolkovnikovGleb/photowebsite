import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar(): JSX.Element {
  return (
    <nav className="navbar">
      <div className="navMain">
        <Link to="/">Главная</Link>
      </div>
      <div>
        <Link to="/">Работы</Link> {/* компонент с альбомами */}
      </div>
      <div>
        <p>Gleb Polkovnikov</p>
      </div>
      <div>
        <Link to="/">Зарегистрироваться</Link> {/* Ссылка на регу */}
      </div>
      <div>
        <Link to="/">Войти</Link> {/* Ссылка на вход */}
      </div>
    </nav>
  );
}
