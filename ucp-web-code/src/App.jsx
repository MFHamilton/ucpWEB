import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './app/login/ucp-login.jsx'
import Dashboard from './app/dashboard/ucp-dashboard.jsx'
import './App.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default App
