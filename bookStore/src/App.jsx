import { useState } from 'react'
import './App.css'
import Books from './components/Books'
import Form from './components/Form'
import {Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <>
            
    <Routes>
        <Route path='/' element={<Books/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
    </Routes>
    </>
  )
}

export default App
