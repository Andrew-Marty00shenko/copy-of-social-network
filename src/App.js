import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'


const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="wrapper">
        <NavBar />
        <Route path='/login' component={Login} />
        <Route path="/profile/:userId?" component={Profile} />
      </div>
    </div>
  )
}

export default App