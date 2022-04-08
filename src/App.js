import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CityPage from './components/CityPage';

function App() {
  let [data, setData] = useState({});
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/city/:id" element={<CityPage data={data}/>}/>
          <Route path="" element={<Home onDataChange={(dat) => {
            setData(dat);
          }}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
