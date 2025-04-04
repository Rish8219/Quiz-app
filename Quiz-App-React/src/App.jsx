import React from 'react'
import Quiz from './components/Quiz'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/navbar'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className=''>
      {/* <Quiz/> */}
      <Navbar/> 
      <Outlet />
      {/* <Login/> */}
      {/* <Signup/> */}
    </div>
  )
}

export default App
