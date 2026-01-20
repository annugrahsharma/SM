// Spiritual Quotes Data from Sri Aurobindo and The Mother
// Source: Incarnate Word (https://incarnateword.in)

export const authors = {
  sriAurobindo: {
    id: 'sri-aurobindo',
    name: 'Sri Aurobindo',
    username: 'sriaurobindo',
    title: 'Philosopher, Yogi, Poet',
    bio: 'Sri Aurobindo was an Indian philosopher, yogi, maharishi, poet, and Indian nationalist. He joined the Indian movement for independence from British colonial rule, and became one of its influential leaders. He later became a spiritual reformer, introducing his visions on human progress and spiritual evolution.',
    birthDate: 'August 15, 1872',
    mahasamadhi: 'December 5, 1950',
    location: 'Pondicherry, India',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Sri_Aurobindo.jpg/440px-Sri_Aurobindo.jpg',
    coverImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
    followers: '1.2M',
    following: '0',
    posts: '108',
    website: 'https://incarnateword.in/sabcl'
  },
  theMother: {
    id: 'the-mother',
    name: 'The Mother',
    username: 'themother',
    title: 'Mirra Alfassa - Spiritual Collaborator',
    bio: 'The Mother, born Mirra Alfassa, was a spiritual guru and collaborator of Sri Aurobindo. She was the spiritual leader of the Sri Aurobindo Ashram and founded Auroville, an international township in Tamil Nadu, India. Her teachings emphasize the transformation of human consciousness and the practice of integral yoga.',
    birthDate: 'February 21, 1878',
    mahasamadhi: 'November 17, 1973',
    location: 'Pondicherry, India',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Mirra_alfance_1920s.jpg/440px-Mirra_alfance_1920s.jpg',
    coverImage: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=400&fit=crop',
    followers: '980K',
    following: '0',
    posts: '156',
    website: 'https://incarnateword.in/cwm'
  }
};

export const categories = [
  { id: 'all', name: 'All', icon: '🕉️' },
  { id: 'yoga', name: 'Yoga', icon: '🧘' },
  { id: 'consciousness', name: 'Consciousness', icon: '✨' },
  { id: 'life', name: 'Life', icon: '🌸' },
  { id: 'love', name: 'Love', icon: '💖' },
  { id: 'aspiration', name: 'Aspiration', icon: '🔥' },
  { id: 'peace', name: 'Peace', icon: '☮️' },
  { id: 'transformation', name: 'Transformation', icon: '🦋' }
];

export const quotes = [
  {
    id: 1,
    author: 'sriAurobindo',
    quote: 'All life is Yoga.',
    source: 'The Synthesis of Yoga',
    category: 'yoga',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=600&fit=crop',
    likes: 12453,
    comments: 234,
    saved: true,
    timestamp: '2h ago'
  },
  {
    id: 2,
    author: 'theMother',
    quote: 'Peace is the first condition for the perception of the Divine.',
    source: 'Words of the Mother',
    category: 'peace',
    image: 'https://images.unsplash.com/photo-1528715471579-d1bcf0ba5e83?w=600&h=600&fit=crop',
    likes: 8976,
    comments: 156,
    saved: false,
    timestamp: '4h ago'
  },
  {
    id: 3,
    author: 'sriAurobindo',
    quote: 'The Divine is everywhere, in everything, and if He is hidden... it is because we do not take the trouble to discover Him.',
    source: 'Letters on Yoga',
    category: 'consciousness',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=600&fit=crop',
    likes: 15678,
    comments: 312,
    saved: true,
    timestamp: '6h ago'
  },
  {
    id: 4,
    author: 'theMother',
    quote: 'Love is the only power that can overcome all difficulties.',
    source: 'Collected Works of the Mother',
    category: 'love',
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=600&fit=crop',
    likes: 23456,
    comments: 567,
    saved: false,
    timestamp: '8h ago'
  },
  {
    id: 5,
    author: 'sriAurobindo',
    quote: 'What the soul sees and has experienced, that it knows; the rest is appearance, prejudice and opinion.',
    source: 'The Hour of God',
    category: 'consciousness',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    likes: 9876,
    comments: 189,
    saved: false,
    timestamp: '12h ago'
  },
  {
    id: 6,
    author: 'theMother',
    quote: 'To be conscious of the Divine, to live in the Divine, to act for the Divine — this is the true Yoga.',
    source: 'Questions and Answers',
    category: 'yoga',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop',
    likes: 11234,
    comments: 245,
    saved: true,
    timestamp: '1d ago'
  },
  {
    id: 7,
    author: 'sriAurobindo',
    quote: 'There is no greater courage than to aspire for the highest.',
    source: 'Letters on Yoga',
    category: 'aspiration',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=600&fit=crop',
    likes: 18765,
    comments: 423,
    saved: false,
    timestamp: '1d ago'
  },
  {
    id: 8,
    author: 'theMother',
    quote: 'The more you give, the more you receive. But you must give sincerely.',
    source: 'Words of the Mother',
    category: 'life',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=600&fit=crop',
    likes: 14567,
    comments: 298,
    saved: true,
    timestamp: '2d ago'
  },
  {
    id: 9,
    author: 'sriAurobindo',
    quote: 'Hidden Nature is secret God.',
    source: 'Savitri',
    category: 'consciousness',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=600&fit=crop',
    likes: 7890,
    comments: 134,
    saved: false,
    timestamp: '2d ago'
  },
  {
    id: 10,
    author: 'theMother',
    quote: 'If you want to be true, be simple. If you want peace, be sincere.',
    source: 'Collected Works of the Mother',
    category: 'peace',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
    likes: 16789,
    comments: 356,
    saved: false,
    timestamp: '3d ago'
  },
  {
    id: 11,
    author: 'sriAurobindo',
    quote: 'A total self-giving is the supreme path of love.',
    source: 'The Synthesis of Yoga',
    category: 'love',
    image: 'https://images.unsplash.com/photo-1490730141103-6cac27abb37f?w=600&h=600&fit=crop',
    likes: 21345,
    comments: 489,
    saved: true,
    timestamp: '3d ago'
  },
  {
    id: 12,
    author: 'theMother',
    quote: 'True transformation is not something that comes from outside; it must come from within.',
    source: 'Questions and Answers',
    category: 'transformation',
    image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&h=600&fit=crop',
    likes: 13456,
    comments: 267,
    saved: false,
    timestamp: '4d ago'
  },
  {
    id: 13,
    author: 'sriAurobindo',
    quote: 'Be conscious first of thyself within, then think and act.',
    source: 'Thoughts and Aphorisms',
    category: 'consciousness',
    image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=600&fit=crop',
    likes: 8765,
    comments: 156,
    saved: false,
    timestamp: '4d ago'
  },
  {
    id: 14,
    author: 'theMother',
    quote: 'One must learn to live for the sake of living, and not for the result.',
    source: 'Words of the Mother',
    category: 'life',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=600&fit=crop',
    likes: 19876,
    comments: 445,
    saved: true,
    timestamp: '5d ago'
  },
  {
    id: 15,
    author: 'sriAurobindo',
    quote: 'Aspire, concentrate and be confident that all will be done for you.',
    source: 'Letters on Yoga',
    category: 'aspiration',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=600&fit=crop',
    likes: 17654,
    comments: 378,
    saved: false,
    timestamp: '5d ago'
  },
  {
    id: 16,
    author: 'theMother',
    quote: 'Nothing is impossible. With the Divine, all things are possible.',
    source: 'Collected Works of the Mother',
    category: 'aspiration',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop',
    likes: 24567,
    comments: 589,
    saved: true,
    timestamp: '6d ago'
  },
  {
    id: 17,
    author: 'sriAurobindo',
    quote: 'Earth must transform herself and equal Heaven.',
    source: 'Savitri',
    category: 'transformation',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&h=600&fit=crop',
    likes: 11234,
    comments: 234,
    saved: false,
    timestamp: '1w ago'
  },
  {
    id: 18,
    author: 'theMother',
    quote: 'The psychic being is the true individual in us.',
    source: 'Questions and Answers',
    category: 'consciousness',
    image: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&h=600&fit=crop',
    likes: 9876,
    comments: 178,
    saved: false,
    timestamp: '1w ago'
  },
  {
    id: 19,
    author: 'sriAurobindo',
    quote: 'In quietness shall be your strength.',
    source: 'Letters on Yoga',
    category: 'peace',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=600&h=600&fit=crop',
    likes: 15678,
    comments: 312,
    saved: true,
    timestamp: '1w ago'
  },
  {
    id: 20,
    author: 'theMother',
    quote: 'Love is not something to be loved, but something that is to be done.',
    source: 'Words of the Mother',
    category: 'love',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=600&fit=crop',
    likes: 22345,
    comments: 534,
    saved: false,
    timestamp: '1w ago'
  }
];

// Helper function to get quotes by author
export const getQuotesByAuthor = (authorId) => {
  return quotes.filter(quote => quote.author === authorId);
};

// Helper function to get quotes by category
export const getQuotesByCategory = (categoryId) => {
  if (categoryId === 'all') return quotes;
  return quotes.filter(quote => quote.category === categoryId);
};

// Helper function to get author info
export const getAuthorInfo = (authorId) => {
  return authors[authorId] || null;
};

// Format number for display (e.g., 12453 -> 12.4K)
export const formatNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};
