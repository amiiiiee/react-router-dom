import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Regestration from './Regestration';
import Login from './Login';
import Home from './Home';

const MainPage = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Regestration />}/>
        <Route path='login' element={<Login />}/>
        <Route path='home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default MainPage;
