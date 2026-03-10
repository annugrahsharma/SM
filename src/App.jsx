import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Onboarding from './components/onboarding/Onboarding'
import Dashboard from './components/dashboard/Dashboard'
import DesktopLogin from './components/desktop-v2/DesktopLogin'
import { OnboardingProvider } from './context/OnboardingContext'
import './styles/App.css'

// Wrapper component for onboarding with provider
function OnboardingWrapper() {
  return (
    <OnboardingProvider>
      <Onboarding />
    </OnboardingProvider>
  )
}

// Layout wrapper — desktop-v2 routes render full-bleed, others use mobile frame
function AppLayout() {
  const location = useLocation()
  const isDesktop = location.pathname.startsWith('/desktop-v2')

  if (isDesktop) {
    return (
      <Routes>
        <Route path="/desktop-v2/login" element={<DesktopLogin />} />
      </Routes>
    )
  }

  return (
    <div className="app-container">
      <div className="mobile-frame">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/onboarding" element={<OnboardingWrapper />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  )
}

export default App
