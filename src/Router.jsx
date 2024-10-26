import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'

function RouterMain() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/home' element={ <Home/> } />
            <Route path='/about' element={ <About/> } />
            <Route path='/contact' element={ <Contact/> } />
        </Routes>
    
    </BrowserRouter>
  )
}


export default RouterMain;