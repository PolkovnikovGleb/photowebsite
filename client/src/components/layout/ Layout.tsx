import React from 'react';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';

function Layout({children}: any): React.JSX.Element {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
