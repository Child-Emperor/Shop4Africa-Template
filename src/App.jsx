import {BrowserRouter, Routes, Route} from 'react-router'
import Layout from "./Layout"
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import About from '../pages/About'
import Login from '../pages/Login'
import AccountProfile from '../pages/AccountProfile'
import './App.css'


function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element= {<Home/>}/>
        <Route path="shop" element= {<Shop/>}/>
        <Route path="about"  element= {<About/>}/>
        <Route path="login" element= {<Login/>}/>
        <Route path="account-profile" element= {<AccountProfile/>}/>
        <Route path='*' element= {<Home/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
