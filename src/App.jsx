import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Boats from './components/Boats'
import './index.css'

const App = () => {
    return (
        <BrowserRouter>
        <header className="header">
            <nav className="navbar">
                <Link to="/">BoatLife</Link>
                <div className="nav-links">
                    <Link to="/about">About</Link>
                    <Link to="/boats">Boats</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/boats" element={<Boats />}></Route>
            </Routes>
        </header>
        </BrowserRouter>
    )
}

        

export default App