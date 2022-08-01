import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/custom.scss'

function App() {

  return (
 <Routes>
    <Route path='/' element={<Home />} />
 </Routes>
  )
}

export default App
