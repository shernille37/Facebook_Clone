import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';

const App = () => {
  return (
    <div className='app'>
      <Header />

      <div className='app__body'>
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
