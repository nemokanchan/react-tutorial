import { useState } from 'react'

import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/login'

function App() {
  

  return (
    <>
      <UserContextProvider>
        <div>Hey I am Kanchan.</div>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App
