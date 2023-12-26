import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Header from './components/Header'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    {/* <Header /> */}
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signin' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App