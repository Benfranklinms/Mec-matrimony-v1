import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ConfessionCard from './Component/ConfessionCard'
import Feed from '../Pages/Feed'
import Navbar from './Component/Navbar'
import Addconfession from '../Pages/Addconfession'

function App() {
  return (
    <>
    <Navbar/>
    <Feed/>
    <Addconfession />
    </>
  );
}

export default App;
