import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfiniteScroll from './InfiniteScroll';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <InfiniteScroll />
      </header>
    </div>
  );
}

export default App;
