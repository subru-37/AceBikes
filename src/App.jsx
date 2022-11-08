import React from 'react';
import { Route, Routes } from "react-router-dom";
import './App.css';
import ResponsiveAppBar from './Components/navbar/ResponsiveAppBar';
import MobileAppBar from './Components/navbar/MobileAppBar';
import Landing from './pages/Landing/Landing';
function App() {

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <MobileAppBar/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
      </Routes>
    </div>
  )
}

export default App
