import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className=' bg-[#1f1E24] flex w-screen h-screen'>
     <Routes>
       <Route path='/' element={<Home />} />
       
     </Routes>
    </div>
  )
}

export default App
