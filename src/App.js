import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import Feed from './components/layout/Feed';

const App = () => {
  return (
    <div className='app'>
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
};

export default App;
