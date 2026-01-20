import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import { quotes, authors, formatNumber } from '../../data/quotesData';

const Saved = () => {
  const navigate = useNavigate();
  const [savedQuotes] = useState(quotes.filter((q) => q.saved));

  return (
    <div className="saved-container">
      {/* Saved Header */}
      <div className="saved-header">
        <button className="saved-back-btn" onClick={() => navigate(-1)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <h1 className="saved-title">Saved</h1>
        <div className="saved-header-spacer"></div>
      </div>

      {/* Saved Content */}
      <div className="saved-content">
        {savedQuotes.length > 0 ? (
          <>
            <div className="saved-info">
              <p className="saved-subtitle">Only you can see what you've saved</p>
            </div>

            <div className="saved-collections">
              <div className="saved-collection">
                <h3 className="saved-collection-title">All Posts</h3>
                <span className="saved-collection-count">{savedQuotes.length} items</span>
              </div>
            </div>

            <div className="saved-grid">
              {savedQuotes.map((quote) => {
                const author = authors[quote.author];
                return (
                  <div key={quote.id} className="saved-grid-item">
                    <img src={quote.image} alt="Quote" />
                    <div className="saved-grid-overlay">
                      <div className="saved-grid-author">
                        <img src={author.avatar} alt={author.name} className="saved-grid-avatar" />
                        <span>{author.username}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="saved-empty">
            <div className="saved-empty-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#8e8e8e" strokeWidth="1">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h2>Save</h2>
            <p>Save quotes to easily find them again in the future.</p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Saved;
