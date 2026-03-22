// Mock data for Gang 360 app

export const currentUser = {
  id: 'user-001',
  firstName: 'Anu',
  middleName: '',
  lastName: 'Grah',
  email: 'anu@supermorpheus.com',
  phone: '+91 99887 76655',
  profilePicture: null,
  currentOrganization: 'Super Morpheus',
  currentRole: 'Product Lead',
  livesIn: 'Bengaluru, India',
  pincode: '560001',
  locality: 'Koramangala',
  introduction: 'Passionate about building products that make a difference. Love connecting with fellow entrepreneurs and sharing ideas. Currently leading product at Super Morpheus, where we\'re building tools for personal growth and meaningful connections.',
  inspiringQuote: '"The only way to do great work is to love what you do." — Steve Jobs',
  joyOutsideWork: 'Trail running in the Western Ghats, reading philosophy, and experimenting with sourdough baking.',
  trailerVideo: null,
  trailerQuestions: ['What drives you every day?', 'What\'s your superpower?', 'What would surprise people about you?'],
  profileCompletion: 65,
  status: 'basic',
  joinedDate: '2025-01-15',
  tags: ['Product', 'Community', 'Growth'],
  twitter: 'https://x.com/anugrah',
  instagram: 'https://instagram.com/anugrah',
  linkedin: 'https://linkedin.com/in/anugrah',
  contentLinks: ['https://medium.com/@anugrah'],
  otherSocialLinks: [],
  storyVideos: {
    earlyLife: null,
    professionalJourney: null,
    currentLife: null
  },
  lifeStories: null
}

export const members = [
  {
    id: 'member-001',
    firstName: 'Priya',
    middleName: '',
    lastName: 'Sharma',
    profilePicture: null,
    currentOrganization: 'TechStart India',
    currentRole: 'Founder & CEO',
    livesIn: 'Mumbai, India',
    pincode: '400001',
    locality: 'Bandra West',
    email: 'priya@techstart.in',
    phone: '+91 98765 43210',
    introduction: 'Building the future of EdTech in India. Former Google engineer turned entrepreneur. I believe technology can democratize education and create opportunities for every child, regardless of geography or background.',
    inspiringQuote: '"Education is the most powerful weapon which you can use to change the world." — Nelson Mandela',
    joyOutsideWork: 'Classical Bharatanatyam dancer, amateur astronomer, and passionate about mentoring young women in tech.',
    trailerVideo: { duration: '0:45' },
    status: 'super',
    tags: ['EdTech', 'AI/ML', 'Startup', 'Women in Tech'],
    joinedDate: '2024-08-10',
    profileCompletion: 100,
    twitter: 'https://x.com/priyasharma',
    instagram: 'https://instagram.com/priyasharma',
    linkedin: 'https://linkedin.com/in/priyasharma',
    contentLinks: ['https://priyasharma.substack.com', 'https://youtube.com/@priyatalks'],
    otherSocialLinks: ['https://github.com/priyasharma'],
    storyVideos: {
      earlyLife: 'recorded',
      professionalJourney: 'recorded',
      currentLife: 'recorded'
    },
    lifeStories: {
      earlyLife: {
        tags: ['Small Town', 'Curious Mind', 'Science Olympiad'],
        bornIn: 'Jaipur, Rajasthan',
        hometown: 'Jaipur',
        schools: ['St. Xavier\'s School, Jaipur'],
        universities: ['IIT Delhi — B.Tech Computer Science', 'Stanford University — MS Computer Science'],
        summary: 'Grew up in the pink city surrounded by art and history, but was always drawn to taking things apart and putting them back together. Won the national Science Olympiad at 14, which sparked a lifelong love for problem-solving. My parents ran a small bookshop, and I spent evenings reading everything from astrophysics to philosophy.',
        videoDuration: '12:34'
      },
      professional: {
        tags: ['Google', 'EdTech', 'Founder', 'Y Combinator'],
        firstJob: 'Google — Software Engineer (Mountain View)',
        subsequentJobs: ['Google — Senior Engineer, Search Quality', 'TechStart India — Founder & CEO'],
        summary: 'Joined Google straight out of Stanford and spent 6 years building search algorithms. The turning point was a trip home to Jaipur where I saw kids learning from outdated textbooks while I was optimizing code for billions. Left Google in 2022, joined Y Combinator with TechStart India, and haven\'t looked back.',
        videoDuration: '17:01'
      },
      current: {
        tags: ['Mumbai Life', 'Building in Public', 'Mentorship'],
        organizations: [{ role: 'Founder & CEO', org: 'TechStart India' }, { role: 'Advisor', org: 'WomenWhoCode India' }],
        travelCities: ['Jaipur', 'Bengaluru', 'San Francisco', 'Singapore'],
        summary: 'Today I lead a team of 45 people building India\'s most accessible EdTech platform. We serve 2 million students across 500 districts. When I\'m not at work, I\'m either on stage performing Bharatanatyam or on my terrace with a telescope, chasing the Milky Way.',
        videoDuration: '9:22'
      }
    }
  },
  {
    id: 'member-002',
    firstName: 'Rahul',
    middleName: 'Kumar',
    lastName: 'Verma',
    profilePicture: null,
    currentOrganization: 'GreenEnergy Solutions',
    currentRole: 'Co-Founder',
    livesIn: 'Delhi, India',
    pincode: '110001',
    locality: 'Hauz Khas',
    email: 'rahul@greenenergy.co',
    phone: '+91 98765 43211',
    introduction: 'Climate tech enthusiast. Working on making renewable energy accessible to everyone. Our mission at GreenEnergy Solutions is to bring solar power to 10 million rural households by 2030.',
    inspiringQuote: '"We do not inherit the earth from our ancestors; we borrow it from our children." — Native American Proverb',
    joyOutsideWork: 'Long-distance cycling, rooftop gardening, and volunteering at local environmental NGOs.',
    status: 'active',
    tags: ['CleanTech', 'Sustainability', 'B2B', 'Impact'],
    joinedDate: '2024-09-22',
    profileCompletion: 85,
    twitter: 'https://x.com/rahulverma_green',
    instagram: null,
    linkedin: 'https://linkedin.com/in/rahulverma',
    contentLinks: ['https://rahulverma.medium.com'],
    otherSocialLinks: [],
    storyVideos: {
      earlyLife: 'recorded',
      professionalJourney: 'recorded',
      currentLife: null
    },
    lifeStories: {
      earlyLife: {
        tags: ['Village Life', 'Nature', 'Engineering'],
        bornIn: 'Varanasi, UP',
        hometown: 'Varanasi',
        schools: ['Kendriya Vidyalaya, Varanasi'],
        universities: ['IIT Kanpur — B.Tech Electrical Engineering'],
        summary: 'Growing up on the banks of the Ganga, I saw firsthand how pollution and energy poverty affected everyday life. My grandmother\'s village had only 4 hours of electricity a day. That childhood memory became the seed for everything I\'m building today.',
        videoDuration: '10:08'
      },
      professional: {
        tags: ['Consulting', 'Solar', 'Clean Energy', 'Startup'],
        firstJob: 'McKinsey & Company — Associate (Energy Practice)',
        subsequentJobs: ['Tata Power Solar — Strategy Lead', 'GreenEnergy Solutions — Co-Founder'],
        summary: 'Spent 3 years at McKinsey advising energy companies, then moved to Tata Power Solar to get hands-on with the industry. Co-founded GreenEnergy Solutions in 2021 to bring solar power directly to rural India, bypassing the grid entirely.',
        videoDuration: '14:22'
      },
      current: null
    }
  },
  {
    id: 'member-003',
    firstName: 'Ananya',
    middleName: '',
    lastName: 'Krishnan',
    profilePicture: null,
    currentOrganization: 'HealthFirst',
    currentRole: 'CTO',
    livesIn: 'Chennai, India',
    pincode: '600001',
    locality: 'Adyar',
    email: 'ananya@healthfirst.com',
    phone: '+91 98765 43212',
    introduction: 'Healthcare technology leader with 15 years of experience. Passionate about digital health and using data to improve patient outcomes. Previously built large-scale systems at Amazon and Flipkart.',
    inspiringQuote: '"The best way to predict the future is to invent it." — Alan Kay',
    joyOutsideWork: 'Carnatic music vocalist, competitive chess player, and weekend scuba diver.',
    status: 'super',
    tags: ['HealthTech', 'Digital Health', 'SaaS', 'Data Science'],
    joinedDate: '2024-07-05',
    profileCompletion: 100,
    twitter: 'https://x.com/ananyak',
    instagram: 'https://instagram.com/ananyakrishnan',
    linkedin: 'https://linkedin.com/in/ananyakrishnan',
    contentLinks: ['https://ananyak.dev/blog', 'https://youtube.com/@ananyahealth'],
    otherSocialLinks: ['https://github.com/ananyak'],
    storyVideos: {
      earlyLife: 'recorded',
      professionalJourney: 'recorded',
      currentLife: 'recorded'
    },
    lifeStories: {
      earlyLife: {
        tags: ['Music', 'Chess', 'South India'],
        bornIn: 'Madurai, Tamil Nadu',
        hometown: 'Madurai',
        schools: ['Meenakshi Ammal School, Madurai'],
        universities: ['BITS Pilani — B.E. Computer Science', 'University of Michigan — MS Data Science'],
        summary: 'Raised in a family of doctors, I was the rebel who chose computers over stethoscopes. Started programming at 12, built my first database at 15 to track my father\'s clinic patients. Carnatic music and chess were my two escapes — one taught me discipline, the other taught me strategy.',
        videoDuration: '11:45'
      },
      professional: {
        tags: ['Amazon', 'Flipkart', 'HealthTech', 'CTO'],
        firstJob: 'Amazon — Software Development Engineer (Hyderabad)',
        subsequentJobs: ['Flipkart — Principal Engineer, Data Platform', 'HealthFirst — CTO'],
        summary: 'Built recommendation systems at Amazon for 5 years, then led Flipkart\'s data platform team. When my mother was misdiagnosed due to fragmented medical records, I knew where technology was needed most. Joined HealthFirst as CTO to build India\'s first unified health data platform.',
        videoDuration: '15:30'
      },
      current: {
        tags: ['Chennai', 'Tech Leadership', 'Digital Health'],
        organizations: [{ role: 'CTO', org: 'HealthFirst' }, { role: 'Board Member', org: 'DataHealth Alliance' }],
        travelCities: ['Bengaluru', 'Hyderabad', 'Singapore', 'Boston'],
        summary: 'Today we serve 500+ hospitals and 15 million patient records. I split my time between deep technical work and speaking about digital health at conferences. Weekends are reserved for Carnatic music recitals at the local sabha and scuba diving trips to Pondicherry.',
        videoDuration: '10:15'
      }
    }
  },
  {
    id: 'member-004',
    firstName: 'Vikram',
    middleName: '',
    lastName: 'Singh',
    profilePicture: null,
    currentOrganization: 'FinLeap',
    currentRole: 'Founder',
    livesIn: 'Bengaluru, India',
    pincode: '560034',
    locality: 'Indiranagar',
    email: 'vikram@finleap.in',
    phone: '+91 98765 43213',
    introduction: 'Fintech founder focused on financial inclusion. Building banking for the next billion. We\'re reimagining how underbanked communities access financial services through mobile-first solutions.',
    inspiringQuote: '"In the middle of difficulty lies opportunity." — Albert Einstein',
    joyOutsideWork: 'Stand-up comedy open mics, trekking in the Himalayas, and building mechanical keyboards.',
    status: 'active',
    tags: ['FinTech', 'Payments', 'Inclusion', 'Mobile'],
    joinedDate: '2024-10-18',
    profileCompletion: 80,
    twitter: 'https://x.com/vikramfinleap',
    instagram: null,
    linkedin: 'https://linkedin.com/in/vikramsingh',
    contentLinks: [],
    otherSocialLinks: [],
    storyVideos: {
      earlyLife: 'recorded',
      professionalJourney: null,
      currentLife: null
    },
    lifeStories: {
      earlyLife: {
        tags: ['Army Brat', 'Nomad', 'Resilience'],
        bornIn: 'Dehradun, Uttarakhand',
        hometown: 'Multiple cities (Army family)',
        schools: ['Army Public School (multiple cities)'],
        universities: ['NIT Surathkal — B.Tech Electronics', 'ISB Hyderabad — MBA'],
        summary: 'An army brat who changed schools 8 times before turning 18. Every new posting meant new friends, new cultures. It made me adaptable and gave me an acute understanding of how different India really is — the spark behind building financial products for diverse communities.',
        videoDuration: '9:50'
      },
      professional: null,
      current: null
    }
  },
  {
    id: 'member-005',
    firstName: 'Meera',
    middleName: '',
    lastName: 'Patel',
    profilePicture: null,
    currentOrganization: 'CreativeMinds',
    currentRole: 'Design Director',
    livesIn: 'Pune, India',
    pincode: '411001',
    locality: 'Koregaon Park',
    email: 'meera@creativeminds.co',
    phone: '+91 98765 43214',
    introduction: 'Design thinking advocate. Helping startups build user-centric products. I run design sprints and workshops that transform how teams approach product development.',
    inspiringQuote: '"Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs',
    joyOutsideWork: 'Watercolor painting, pottery at weekend workshops, and exploring street food across Indian cities.',
    status: 'basic',
    tags: ['Design', 'UX', 'Consulting', 'Design Thinking'],
    joinedDate: '2025-01-02',
    profileCompletion: 55,
    twitter: null,
    instagram: 'https://instagram.com/meerapatel.design',
    linkedin: 'https://linkedin.com/in/meerapatel',
    contentLinks: ['https://dribbble.com/meerapatel'],
    otherSocialLinks: [],
    storyVideos: {
      earlyLife: null,
      professionalJourney: null,
      currentLife: null
    },
    lifeStories: null
  },
  {
    id: 'member-006',
    firstName: 'Arjun',
    middleName: '',
    lastName: 'Nair',
    profilePicture: null,
    currentOrganization: 'LogiTech Solutions',
    currentRole: 'CEO',
    livesIn: 'Hyderabad, India',
    pincode: '500001',
    locality: 'Jubilee Hills',
    email: 'arjun@logitech.in',
    phone: '+91 98765 43215',
    introduction: 'Supply chain optimization expert. Making logistics smarter with AI. Our platform processes over 2 million shipments monthly, helping businesses reduce delivery times by 40%.',
    inspiringQuote: '"Innovation distinguishes between a leader and a follower." — Steve Jobs',
    joyOutsideWork: 'Amateur marathon runner, weekend cricket player, and avid reader of historical non-fiction.',
    status: 'super',
    tags: ['LogiTech', 'AI', 'Supply Chain', 'Operations'],
    joinedDate: '2024-06-20',
    profileCompletion: 100,
    twitter: 'https://x.com/arjunnair',
    instagram: 'https://instagram.com/arjunnair',
    linkedin: 'https://linkedin.com/in/arjunnair',
    contentLinks: ['https://arjunnair.com/blog'],
    otherSocialLinks: ['https://github.com/arjunnair'],
    storyVideos: {
      earlyLife: 'recorded',
      professionalJourney: 'recorded',
      currentLife: 'recorded'
    },
    lifeStories: {
      earlyLife: {
        tags: ['Kerala', 'Backwaters', 'Debate Champion'],
        bornIn: 'Kochi, Kerala',
        hometown: 'Kochi',
        schools: ['Loyola School, Thiruvananthapuram'],
        universities: ['IIM Ahmedabad — MBA', 'NIT Trichy — B.Tech Mechanical Engineering'],
        summary: 'Grew up in Kerala\'s backwaters where my grandfather ran a small cargo boat business. Watching him optimize routes by intuition planted the seed for my lifelong obsession with logistics. Won the National Debate Championship in college, which taught me to think on my feet.',
        videoDuration: '10:30'
      },
      professional: {
        tags: ['Supply Chain', 'Flipkart', 'AI', 'Logistics'],
        firstJob: 'Flipkart — Supply Chain Analyst',
        subsequentJobs: ['Flipkart — Head of Last Mile Delivery', 'LogiTech Solutions — Founder & CEO'],
        summary: 'Flipkart was my playground for learning supply chain at scale. Led the last-mile delivery team that grew from 10 to 500 cities. Left to start LogiTech Solutions when I realized AI could solve the inefficiencies I kept seeing. Today we process 2 million shipments monthly.',
        videoDuration: '13:45'
      },
      current: {
        tags: ['Hyderabad', 'AI in Logistics', 'Running'],
        organizations: [{ role: 'CEO', org: 'LogiTech Solutions' }, { role: 'Mentor', org: 'T-Hub Hyderabad' }],
        travelCities: ['Mumbai', 'Delhi', 'Dubai', 'London'],
        summary: 'Based in Jubilee Hills with a team of 120 spread across 5 cities. I\'m training for my first marathon while also building India\'s largest logistics AI platform. Weekends are for cricket at Hitex grounds and reading about the East India Company\'s supply chain (ironic, I know).',
        videoDuration: '8:55'
      }
    }
  }
]

export const newMembers = members.slice(0, 4)

export const events = [
  {
    id: 'event-001',
    title: 'Gurukul 2025',
    subtitle: 'Annual Retreat - Goa',
    date: 'March 15-18, 2025',
    location: 'Goa, India',
    attendeesCount: 45,
    image: null
  }
]

export const stats = {
  totalMembers: 789,
  newMembersThisWeek: 12,
  upcomingEvents: 1
}
