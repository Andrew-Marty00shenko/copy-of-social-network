import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer'


const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="wrapper">
        <NavBar />
        <Route path="/profile" render={() => <Profile />} />
        <Route path="/dialogs" render={() => <DialogsContainer />} />
      </div>

      {/* <NavBar /> */}
    </div>
  )
}

export default App