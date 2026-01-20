import React from 'react';
import { authors, categories } from '../../data/quotesData';

const Stories = ({ selectedCategory, onCategorySelect }) => {
  return (
    <div className="stories-container">
      {/* Author Stories */}
      <div className="stories-scroll">
        {/* Sri Aurobindo Story */}
        <div className="story-item" onClick={() => onCategorySelect('all')}>
          <div className="story-ring">
            <img
              src={authors.sriAurobindo.avatar}
              alt={authors.sriAurobindo.name}
              className="story-avatar"
            />
          </div>
          <span className="story-name">Sri Aurobindo</span>
        </div>

        {/* The Mother Story */}
        <div className="story-item" onClick={() => onCategorySelect('all')}>
          <div className="story-ring">
            <img
              src={authors.theMother.avatar}
              alt={authors.theMother.name}
              className="story-avatar"
            />
          </div>
          <span className="story-name">The Mother</span>
        </div>

        {/* Category Stories */}
        {categories.map((category) => (
          <div
            key={category.id}
            className={`story-item ${selectedCategory === category.id ? 'active' : ''}`}
            onClick={() => onCategorySelect(category.id)}
          >
            <div className={`story-ring category-ring ${selectedCategory === category.id ? 'selected' : ''}`}>
              <div className="story-category-icon">
                {category.icon}
              </div>
            </div>
            <span className="story-name">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
