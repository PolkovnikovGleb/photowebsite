import React, {useEffect} from 'react';
import './App.css';
import {Route, Routes} from 'react-router';
import {router} from '../../configs/router';
import {albumsInit} from 'components/features/AlbumPage/albumsSlice';
import {useAppDispatch} from 'Redux/store';

function App(): JSX.Element {
  const dicpatch = useAppDispatch();

  useEffect(() => {
    dicpatch(albumsInit());
  }, []);

  return (
    <div className="app">
      <Routes>
        {router.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
