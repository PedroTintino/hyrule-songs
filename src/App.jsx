import './App.css'
import Intro from './pages/Intro'
import Navbar from './components/Navbar/Index'
import Footer from './components/Footer/Footer'
import { Routes, Route } from "react-router-dom"
import  Masks  from './pages/Masks'

function App() {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<Intro />} />
      <Route exact path='/masks' element={<Masks />} />
      </Routes>
      <Navbar />
      <Footer />
    </>
  )
}

export default App
