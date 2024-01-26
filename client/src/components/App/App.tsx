import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router';
import MainPage from 'components/features/HomePage/HomePage';

function App(): JSX.Element {
  return (
    <div className="app">
      <h1>Hello World!</h1>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
