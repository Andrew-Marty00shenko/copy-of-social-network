import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Users from './components/Users/Users'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile';



const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="wrapper">
        <NavBar />
        <Route exact path="/" render={() => <Redirect to="/profile" />} />
        <Route path='/login' component={Login} />
        <Route path="/profile/:userId?" component={Profile} />
        <Route path="/users" component={Users} />
      </div>
    </div >
  )
}

export default App