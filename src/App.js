import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import About from './components/About'
import './App.scss'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/portfolio" element = {<Portfolio />} />
          <Route path = "/Contact" element = {<Contact />} />
          <Route path = "*" element = {<Navigate to = "/" />} />

        </Route>
      </Routes>
    </>
  )

}

export default App
