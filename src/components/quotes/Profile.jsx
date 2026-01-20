import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import { authors, getQuotesByAuthor, formatNumber } from '../../data/quotesData';

const Profile = () => {
  const { authorId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('posts');

  // Map URL param to author key
  const authorKey = authorId === 'sri-aurobindo' ? 'sriAurobindo' : 'theMother';
  const author = authors[authorKey];
  const authorQuotes = getQuotesByAuthor(authorKey);

  if (!author) {
    return (
      <div className="profile-container">
        <div className="profile-error">Author not found</div>
        <BottomNav />
      </div>
    );
  }

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <button className="profile-back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <span className="profile-username">{author.username}</span>
        <button className="profile-menu-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <line x1="3" y1="18" x2="21" y2="18"/>
          </svg>
        </button>
      </div>

      {/* Profile Info */}
      <div className="profile-info">
        <div className="profile-avatar-section">
          <div className="profile-avatar-ring">
            <img
              src={author.avatar}
              alt={author.name}
              className="profile-avatar"
            />
          </div>
        </div>

        <div className="profile-stats">
          <div className="profile-stat">
            <span className="profile-stat-number">{author.posts}</span>
            <span className="profile-stat-label">posts</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-number">{author.followers}</span>
            <span className="profile-stat-label">followers</span>
          </div>
          <div className="profile-stat">
            <span className="profile-stat-number">{author.following}</span>
            <span className="profile-stat-label">following</span>
          </div>
        </div>
      </div>

      {/* Profile Details */}
      <div className="profile-details">
        <h2 className="profile-name">{author.name}</h2>
        <p className="profile-title">{author.title}</p>
        <p className="profile-bio">{author.bio}</p>
        <div className="profile-dates">
          <span>🌸 {author.birthDate}</span>
          <span>🙏 Mahasamadhi: {author.mahasamadhi}</span>
        </div>
        <a href={author.website} target="_blank" rel="noopener noreferrer" className="profile-link">
          {author.website}
        </a>
      </div>

      {/* Action Buttons */}
      <div className="profile-actions">
        <button className="profile-follow-btn">Follow</button>
        <button className="profile-message-btn">Message</button>
      </div>

      {/* Tabs */}
      <div className="profile-tabs">
        <button
          className={`profile-tab ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
          </svg>
        </button>
        <button
          className={`profile-tab ${activeTab === 'tagged' ? 'active' : ''}`}
          onClick={() => setActiveTab('tagged')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
            <line x1="7" y1="7" x2="7.01" y2="7"/>
          </svg>
        </button>
      </div>

      {/* Grid */}
      <div className="profile-grid">
        {authorQuotes.map((quote) => (
          <div key={quote.id} className="profile-grid-item">
            <img src={quote.image} alt="Quote" />
            <div className="profile-grid-overlay">
              <span>❤️ {formatNumber(quote.likes)}</span>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default Profile;
