import React from 'react';
import NavBar from './navBar/NavBar';
import App from '../App';

function Layout(): React.JSX.Element {
  return (
    <>
      <NavBar />
      <main>
        <App />
      </main>
      <NavBar />
    </>
  );
}

export default Layout;
