import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from 'components/features/HomePage/HomePage';
import AlbumPage from 'components/features/AlbumPage/AlbumPage';
import NavBar from 'components/features/Header/NavBar/NavBar';
import {useAppDispatch} from 'Redux/store';
import {albumsInit} from 'components/features/AlbumPage/albumsSlice';

function App(): JSX.Element {
  const dicpatch = useAppDispatch();

  useEffect(() => {
    dicpatch(albumsInit());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/albums" element={<AlbumPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
