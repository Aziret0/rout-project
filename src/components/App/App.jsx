import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../Header/Header'
import Home from '../../pages/Home'
import Products from '../../pages/Products'
import Albums from '../../pages/Albums'
import Photos from '../../pages/Photos'
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/albums' element={<Albums/>}/>
        <Route path='/albums/:id' element={<Photos/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App