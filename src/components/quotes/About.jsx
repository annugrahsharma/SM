import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import { authors } from '../../data/quotesData';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* About Header */}
      <div className="about-header">
        <button className="about-back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <h1 className="about-title">About</h1>
        <div className="about-header-spacer"></div>
      </div>

      {/* About Content */}
      <div className="about-content">
        {/* App Info */}
        <div className="about-app-info">
          <div className="about-logo">
            <span className="about-logo-icon">🕉️</span>
            <h2 className="about-logo-text">AuroGram</h2>
          </div>
          <p className="about-tagline">Spiritual Quotes from Sri Aurobindo & The Mother</p>
        </div>

        {/* Mission */}
        <div className="about-section">
          <h3 className="about-section-title">Our Mission</h3>
          <p className="about-section-text">
            AuroGram brings the timeless wisdom of Sri Aurobindo and The Mother to your daily life.
            Through carefully curated quotes and beautiful imagery, we aim to inspire spiritual
            growth and inner transformation.
          </p>
        </div>

        {/* About Sri Aurobindo */}
        <div className="about-author-section">
          <div className="about-author-header">
            <img src={authors.sriAurobindo.avatar} alt="Sri Aurobindo" className="about-author-avatar" />
            <div>
              <h3 className="about-author-name">{authors.sriAurobindo.name}</h3>
              <p className="about-author-dates">{authors.sriAurobindo.birthDate} - {authors.sriAurobindo.mahasamadhi}</p>
            </div>
          </div>
          <p className="about-author-bio">{authors.sriAurobindo.bio}</p>
          <button
            className="about-author-btn"
            onClick={() => navigate('/profile/sri-aurobindo')}
          >
            View Profile
          </button>
        </div>

        {/* About The Mother */}
        <div className="about-author-section">
          <div className="about-author-header">
            <img src={authors.theMother.avatar} alt="The Mother" className="about-author-avatar" />
            <div>
              <h3 className="about-author-name">{authors.theMother.name}</h3>
              <p className="about-author-dates">{authors.theMother.birthDate} - {authors.theMother.mahasamadhi}</p>
            </div>
          </div>
          <p className="about-author-bio">{authors.theMother.bio}</p>
          <button
            className="about-author-btn"
            onClick={() => navigate('/profile/the-mother')}
          >
            View Profile
          </button>
        </div>

        {/* Source */}
        <div className="about-section">
          <h3 className="about-section-title">Source</h3>
          <p className="about-section-text">
            All quotes are sourced from the official archives at{' '}
            <a href="https://incarnateword.in" target="_blank" rel="noopener noreferrer">
              Incarnate Word
            </a>
            , a comprehensive digital library of Sri Aurobindo's and The Mother's collected works.
          </p>
        </div>

        {/* Links */}
        <div className="about-links">
          <a
            href="https://incarnateword.in"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Incarnate Word
          </a>
          <a
            href="https://www.sriaurobindoashram.org"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Sri Aurobindo Ashram
          </a>
          <a
            href="https://www.auroville.org"
            target="_blank"
            rel="noopener noreferrer"
            className="about-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
            Auroville
          </a>
        </div>

        {/* Version */}
        <div className="about-version">
          <p>AuroGram v1.0.0</p>
          <p>Made with 💖 for spiritual seekers</p>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default About;
