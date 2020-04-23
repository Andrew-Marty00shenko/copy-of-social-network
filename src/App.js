import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'


const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="wrapper">
        <NavBar />

      </div>
      {/* <NavBar /> */}
    </div>
  )
}

export default App