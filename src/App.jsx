import { HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Feed from './components/quotes/Feed'
import Profile from './components/quotes/Profile'
import Search from './components/quotes/Search'
import Saved from './components/quotes/Saved'
import About from './components/quotes/About'
import './styles/App.css'
import './styles/quotes.css'

function App() {
  return (
    <HashRouter>
      <div className="app-container">
        <div className="mobile-frame">
          <Routes>
            <Route path="/" element={<Navigate to="/feed" replace />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile/:authorId" element={<Profile />} />
            <Route path="/search" element={<Search />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
