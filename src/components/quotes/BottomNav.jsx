import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/' || location.pathname === '/feed';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-nav">
      <button
        className={`bottom-nav-item ${isActive('/') ? 'active' : ''}`}
        onClick={() => navigate('/feed')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill={isActive('/') ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
        <span>Home</span>
      </button>

      <button
        className={`bottom-nav-item ${isActive('/search') ? 'active' : ''}`}
        onClick={() => navigate('/search')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <span>Search</span>
      </button>

      <button
        className={`bottom-nav-item ${isActive('/saved') ? 'active' : ''}`}
        onClick={() => navigate('/saved')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill={isActive('/saved') ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
        <span>Saved</span>
      </button>

      <button
        className={`bottom-nav-item ${isActive('/about') ? 'active' : ''}`}
        onClick={() => navigate('/about')}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="12" y1="16" x2="12" y2="12"/>
          <line x1="12" y1="8" x2="12.01" y2="8"/>
        </svg>
        <span>About</span>
      </button>
    </nav>
  );
};

export default BottomNav;
