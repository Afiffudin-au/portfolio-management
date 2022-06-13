import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Language from './components/Language'
import Project from './components/Project'
import Testimonial from './components/Testimonial'
import Topic from './components/Topic'
import User from './components/User'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard from './components/Dashboard'
import PrivateRoute from './routing/PrivateRoute'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className='App'>
      <ToastContainer autoClose={1000} transition={Flip} />
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/basic-auth' element={<User />} />
        <Route
          path='/control'
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path='/control/topics'
          element={
            <PrivateRoute>
              <Topic />
            </PrivateRoute>
          }
        />
        <Route
          path='/control/testimonials'
          element={
            <PrivateRoute>
              <Testimonial />
            </PrivateRoute>
          }
        />
        <Route
          path='/control/languages'
          element={
            <PrivateRoute>
              <Language />
            </PrivateRoute>
          }
        />
        <Route
          path='/control/projects'
          element={
            <PrivateRoute>
              <Project />
            </PrivateRoute>
          }
        />
        <Route
          path='/control/users'
          element={
            <PrivateRoute>
              <User />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  )
}

export default App
