import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNav from './BottomNav';
import { quotes, categories, authors, formatNumber } from '../../data/quotesData';

const Search = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      const results = quotes.filter(
        (quote) =>
          quote.quote.toLowerCase().includes(query.toLowerCase()) ||
          quote.source.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setHasSearched(true);
    } else {
      setSearchResults([]);
      setHasSearched(false);
    }
  };

  return (
    <div className="search-container">
      {/* Search Header */}
      <div className="search-header">
        <div className="search-input-container">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8e8e8e" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            type="text"
            placeholder="Search quotes..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button className="search-clear" onClick={() => handleSearch('')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8e8e8e" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <line x1="15" y1="9" x2="9" y2="15"/>
                <line x1="9" y1="9" x2="15" y2="15"/>
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Categories Section */}
      {!hasSearched && (
        <>
          <div className="search-section">
            <h3 className="search-section-title">Authors</h3>
            <div className="search-authors">
              <div
                className="search-author-card"
                onClick={() => navigate('/profile/sri-aurobindo')}
              >
                <img src={authors.sriAurobindo.avatar} alt="Sri Aurobindo" />
                <div className="search-author-info">
                  <span className="search-author-name">{authors.sriAurobindo.name}</span>
                  <span className="search-author-title">{authors.sriAurobindo.title}</span>
                </div>
              </div>
              <div
                className="search-author-card"
                onClick={() => navigate('/profile/the-mother')}
              >
                <img src={authors.theMother.avatar} alt="The Mother" />
                <div className="search-author-info">
                  <span className="search-author-name">{authors.theMother.name}</span>
                  <span className="search-author-title">{authors.theMother.title}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="search-section">
            <h3 className="search-section-title">Categories</h3>
            <div className="search-categories">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="search-category-btn"
                  onClick={() => handleSearch(category.name)}
                >
                  <span className="search-category-icon">{category.icon}</span>
                  <span className="search-category-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="search-section">
            <h3 className="search-section-title">Explore</h3>
            <div className="search-grid">
              {quotes.slice(0, 9).map((quote) => (
                <div key={quote.id} className="search-grid-item">
                  <img src={quote.image} alt="Quote" />
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Search Results */}
      {hasSearched && (
        <div className="search-results">
          {searchResults.length > 0 ? (
            <>
              <p className="search-results-count">{searchResults.length} quotes found</p>
              <div className="search-grid">
                {searchResults.map((quote) => (
                  <div key={quote.id} className="search-grid-item">
                    <img src={quote.image} alt="Quote" />
                    <div className="search-grid-overlay">
                      <span>❤️ {formatNumber(quote.likes)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="search-no-results">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8e8e8e" strokeWidth="1">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <p>No quotes found for "{searchQuery}"</p>
            </div>
          )}
        </div>
      )}

      <BottomNav />
    </div>
  );
};

export default Search;
