import React from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
import s from './style.module.scss';

function Layout({children}: {children: React.JSX.Element}): React.JSX.Element {
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <NavBar />
      </div>
      <main className={s.content}>{children}</main>
      <div className={s.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
