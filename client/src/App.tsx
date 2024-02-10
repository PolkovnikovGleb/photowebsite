import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router';
import {router} from './configs/router';
import {albumsInit} from './store/Albums/albumsSlice';
import {useAppDispatch} from './store/store';
import Layout from './components/layout/ Layout';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(albumsInit());
  }, []);

  return (
    <Layout className="app">
      <Routes>
        {router.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
