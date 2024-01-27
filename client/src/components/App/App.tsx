import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router';
import {router} from '../../configs/router';

function App(): JSX.Element {
  return (
    <div className="app">
      <Routes>
        {router.map(item => (
          <Route
            key={item.id}
            path={item.path}
            element={<item.component />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
