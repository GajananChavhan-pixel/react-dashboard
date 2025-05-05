import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Templates/Header'
import Home from './Templates/Home'
import About from './Templates/About'
import Contact from './Templates/Contact'
import Login from './Templates/Login'
import Dashboard from './Dashboard/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

     <BrowserRouter>
     
     <Header/>

     <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/dashboard/*' element={<Dashboard/>}></Route>
     </Routes>

     </BrowserRouter>
    
  
    </>
  )
}

export default App
