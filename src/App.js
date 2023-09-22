import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './home';
import About from './About';



const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={Home}/>
      <Route path='/about' Component={About}/>
    </Routes>
    </>
  )
}


export default App
