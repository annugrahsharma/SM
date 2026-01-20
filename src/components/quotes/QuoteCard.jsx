import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authors, formatNumber } from '../../data/quotesData';

const QuoteCard = ({ quote, onLike, onSave }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(quote.saved);
  const [likes, setLikes] = useState(quote.likes);
  const [showHeart, setShowHeart] = useState(false);

  const author = authors[quote.author];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    if (onLike) onLike(quote.id);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    if (onSave) onSave(quote.id);
  };

  const handleDoubleClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setLikes(likes + 1);
    }
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
  };

  const goToProfile = () => {
    navigate(`/profile/${author.id}`);
  };

  return (
    <div className="quote-card">
      {/* Header */}
      <div className="quote-card-header" onClick={goToProfile}>
        <img
          src={author.avatar}
          alt={author.name}
          className="quote-card-avatar"
        />
        <div className="quote-card-author-info">
          <span className="quote-card-author-name">{author.name}</span>
          <span className="quote-card-source">{quote.source}</span>
        </div>
        <button className="quote-card-more-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="6" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
            <circle cx="12" cy="18" r="1.5" fill="currentColor"/>
          </svg>
        </button>
      </div>

      {/* Image with Quote Overlay */}
      <div className="quote-card-image-container" onDoubleClick={handleDoubleClick}>
        <img
          src={quote.image}
          alt="Quote background"
          className="quote-card-image"
        />
        <div className="quote-card-overlay">
          <p className="quote-card-text">"{quote.quote}"</p>
          <span className="quote-card-signature">— {author.name}</span>
        </div>
        {showHeart && (
          <div className="quote-card-heart-animation">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="#fff">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="quote-card-actions">
        <div className="quote-card-actions-left">
          <button
            className={`quote-action-btn ${isLiked ? 'liked' : ''}`}
            onClick={handleLike}
          >
            {isLiked ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#ed4956">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            )}
          </button>
          <button className="quote-action-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </button>
          <button className="quote-action-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
        <button
          className={`quote-action-btn ${isSaved ? 'saved' : ''}`}
          onClick={handleSave}
        >
          {isSaved ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Likes */}
      <div className="quote-card-likes">
        {formatNumber(likes)} likes
      </div>

      {/* Caption */}
      <div className="quote-card-caption">
        <span className="quote-card-caption-author">{author.username}</span>
        <span className="quote-card-caption-text">{quote.quote}</span>
      </div>

      {/* Comments */}
      {quote.comments > 0 && (
        <div className="quote-card-comments">
          View all {formatNumber(quote.comments)} comments
        </div>
      )}

      {/* Timestamp */}
      <div className="quote-card-timestamp">
        {quote.timestamp}
      </div>
    </div>
  );
};

export default QuoteCard;
