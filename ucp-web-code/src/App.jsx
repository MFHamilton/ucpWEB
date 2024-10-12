import { useState } from 'react'
import LogIn from './app/login/ucp-login.jsx'
import Dashboard from './app/dashboard/ucp-dashboard.jsx'
import './App.css'


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="app-container">
      {isLoggedIn ? <Dashboard /> : <LogIn onLogin={() => setIsLoggedIn(true)} />}
    </div>
  )
}

export default App
