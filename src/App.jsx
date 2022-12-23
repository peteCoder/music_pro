import './App.css'
import { Routes, Route } from 'react-router-dom'
import { About, Home, NotFound } from './pages'
import Navbar from './components/Navbar'



export default function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<NotFound />} path='/*' />
      </Routes>
    </div>

  )
}


