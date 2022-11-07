import { useState } from 'react'
import './App.css'
import ResponsiveAppBar from './Components/navbar/ResponsiveAppBar'
import MobileAppBar from './Components/navbar/MobileAppBar'
function App() {

  return (
    <div className="App">
      <ResponsiveAppBar/>
      <MobileAppBar/>
    </div>
  )
}

export default App
