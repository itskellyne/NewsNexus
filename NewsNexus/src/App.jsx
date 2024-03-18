import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar'
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Search from './pages/Search';
import {
  Routes,
  Route,
} from "react-router-dom";

const  App = () => {
  return (
    <>
       <Navbar />
       <Routes>
        <Route path= "/" element={<Home />}/>
        <Route path= "/" element={<Search />}/>
        <Route path= "/" element={<Favorites />}/>
       </Routes>
    </>
  )
}

export default App
