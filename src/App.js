import './App.css';
import React from 'react';
import Header from './components/Header';
import SearchCity from './components/SearchCity';
import HintTextCity from './components/HintTextCity';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchCity />
      <HintTextCity />
    </div>
  );
}

export default App;
