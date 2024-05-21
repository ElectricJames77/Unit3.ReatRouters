import { Route, Routes, Link } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import "./index.css"

function App() {
  return (
    <div id="container">
    <h1>Hello React Router!</h1>
    <div id="navbar">
      <Link to='/'>Home</Link>
      <Link to='/Red'>Red</Link>
      <Link to='/Blue'>Blue</Link>
    </div>
    <div id="main-section">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Red' element={<Red/>}/>
        <Route path='/Blue' element={<Blue/>}/>
      </Routes>
    </div>
  </div>
  )
}

export default App
