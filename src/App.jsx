import React, { useEffect } from 'react'
import Navbar from './components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/homepage'
import Signup from './components/pages/signuppage'
import Login from './components/pages/login'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserTasks } from './components/redux/authslice'


import Addtask from './components/pages/addtask'
import ProfilePage from './components/pages/profile'
import Dashboard from './components/pages/dashboard'
import About from './components/pages/about'

function App() {
  const { tasks, taskLoading, taskError } = useSelector((state) => state.auth)

  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchUserTasks())
  }, [dispatch])
  
  console.log(tasks)
  console.log(taskLoading)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addtasks" element={<Addtask />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
