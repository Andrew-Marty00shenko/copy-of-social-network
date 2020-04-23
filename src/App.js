import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'


const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="wrapper">
        <NavBar />
        <Route path="/" render={() => <Profile />} />
      </div>
      {/* <NavBar /> */}
    </div>
  )
}

export default App