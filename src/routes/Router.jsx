import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DashBoard from '../pages/DashBoard'
import Login from '../pages/Login'

function Router({handleTheme}) {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/onebox" element={<DashBoard handleTheme={handleTheme} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default Router