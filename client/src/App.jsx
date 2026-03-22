import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notes from './pages/Notes'
import Profile from './pages/Profile'

function App() {
  const token = localStorage.getItem("token")
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/"
            element={token ? <Notes /> : <Navigate to="/login" />}
          />
          <Route
            path='/login'
            element={!token ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path='/signup'
            element={!token ? <Signup /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
