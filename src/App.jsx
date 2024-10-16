import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
// import './App.css'
import {Route,Routes} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Dashboard from './pages/Dashboard.jsx'
import {useState} from 'react'
import PrivateRoute from './components/PrivateRoute.jsx'







function App() {

  const [isLoggedIn ,setIsLoggedIn] = useState(false);
  return (
    <div className="w-full h-full bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>  
          </PrivateRoute>
        } />

      </Routes>
    </div>
  )
}
  
  

export default App;
