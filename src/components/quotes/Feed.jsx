import React, { useState } from 'react';
import Header from './Header';
import Stories from './Stories';
import QuoteCard from './QuoteCard';
import BottomNav from './BottomNav';
import { quotes, getQuotesByCategory } from '../../data/quotesData';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [feedQuotes, setFeedQuotes] = useState(quotes);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setFeedQuotes(getQuotesByCategory(categoryId));
  };

  const handleLike = (quoteId) => {
    console.log('Liked quote:', quoteId);
  };

  const handleSave = (quoteId) => {
    console.log('Saved quote:', quoteId);
  };

  return (
    <div className="feed-container">
      <Header />
      <Stories
        selectedCategory={selectedCategory}
        onCategorySelect={handleCategorySelect}
      />
      <div className="feed-content">
        {feedQuotes.map((quote) => (
          <QuoteCard
            key={quote.id}
            quote={quote}
            onLike={handleLike}
            onSave={handleSave}
          />
        ))}
      </div>
      <BottomNav />
    </div>
  );
};

export default Feed;
