import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router';
import MainPage from 'components/features/MainPage/MainPage';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
