import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import SandboxRoom from './pages/SandboxRoom'
import Dashboard from './pages/Dashboard'
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/sandbox"
        element={
          <ProtectedRoute>
            <SandboxRoom />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default App
