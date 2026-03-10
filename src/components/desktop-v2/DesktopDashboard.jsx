import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { currentUser, newMembers, members, events, stats } from '../../data/mockData'
import '../../styles/desktop-v2.css'

function SuperMorpheusLogo({ size = 32 }) {
  return (
    <svg width={size} height={size * 1.52} viewBox="0 0 422 642" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M-1.732 36.95L207.99 9.474L241.622 59.531L-18.994 129.523Z" transform="translate(48.317 512.358)" fill="#D5CC8E"/>
      <path d="M20.351 34.309L226.646 0L257.7 49.431L0 128.222Z" transform="translate(36.792 400.951) rotate(13)" fill="#648349"/>
      <path d="M22.2 39.027L224.841 0L254.008 49.687L0 135.008Z" transform="translate(54.913 289.077) rotate(24)" fill="#E2B910"/>
      <path d="M224.361 36.95L14.638 9.474L-18.994 59.531L241.624 129.522Z" transform="translate(150.696 259.618)" fill="#D5CC8E"/>
      <path d="M20.352 93.913L226.652 128.222L257.7 78.792L0 0Z" transform="translate(413.696 273.146) rotate(167)" fill="#648349"/>
      <path d="M22.2 95.981L224.842 135.008L254.009 85.321L0 0Z" transform="matrix(-0.914, 0.407, -0.407, -0.914, 421.641, 159.672)" fill="#E2B910"/>
      <ellipse cx="330.446" cy="36" rx="36.5" ry="36" fill="#F0BA3F"/>
    </svg>
  )
}

const getInitials = (first, last) => `${first?.charAt(0) || ''}${last?.charAt(0) || ''}`
const statusClass = (s) => s === 'super' ? 'super' : s === 'active' ? 'active' : 'basic'

const NAV_ITEMS = [
  { key: 'home', label: 'Home', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { key: 'members', label: 'Members', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { key: 'events', label: 'Events', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { key: 'profile', label: 'Profile', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
]

function DesktopDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('home')

  // ---- Tab content renderers ----

  const renderHome = () => (
    <div className="d2d-grid">
      {/* Profile completion */}
      <div className="d2d-card d2d-card--completion">
        <div className="d2d-completion-top">
          <div>
            <h3>Complete Your Profile</h3>
            <p>Add more details to unlock all features</p>
          </div>
          <span className="d2d-completion-pct">{currentUser.profileCompletion}%</span>
        </div>
        <div className="d2d-completion-bar-track"><div className="d2d-completion-bar-fill" style={{ width: `${currentUser.profileCompletion}%` }} /></div>
        <div className="d2d-completion-actions">
          <span className="d2d-completion-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
            Add Story Videos
          </span>
          <span className="d2d-completion-badge">Become Super</span>
        </div>
      </div>

      {/* Event card */}
      {events[0] && (
        <div className="d2d-card d2d-card--event" onClick={() => setActiveTab('events')} style={{ cursor: 'pointer' }}>
          <div className="d2d-event-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div className="d2d-event-content">
            <h3 className="d2d-event-title">{events[0].title}</h3>
            <p className="d2d-event-sub">{events[0].subtitle}</p>
            <div className="d2d-event-meta">
              <span>{events[0].date}</span>
              <span>{events[0].attendeesCount} attending</span>
            </div>
          </div>
        </div>
      )}

      {/* New members */}
      <div className="d2d-card d2d-card--members">
        <div className="d2d-card-header">
          <h3>New Members</h3>
          <button className="d2d-see-all" onClick={() => setActiveTab('members')}>See all</button>
        </div>
        <div className="d2d-member-avatars">
          {newMembers.map(m => (
            <div key={m.id} className="d2d-member-chip">
              <div className={`d2d-avatar d2d-avatar--${statusClass(m.status)}`}>{getInitials(m.firstName, m.lastName)}</div>
              <span>{m.firstName}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="d2d-card d2d-card--stat">
        <span className="d2d-stat-num">{stats.totalMembers}</span>
        <span className="d2d-stat-label">Total Members</span>
      </div>
      <div className="d2d-card d2d-card--stat">
        <span className="d2d-stat-num">{stats.newMembersThisWeek}</span>
        <span className="d2d-stat-label">Joined This Week</span>
      </div>
      <div className="d2d-card d2d-card--stat">
        <span className="d2d-stat-num">{stats.upcomingEvents}</span>
        <span className="d2d-stat-label">Upcoming Events</span>
      </div>

      {/* All members table */}
      <div className="d2d-card d2d-card--table">
        <div className="d2d-card-header">
          <h3>All Members</h3>
          <button className="d2d-see-all" onClick={() => setActiveTab('members')}>{stats.totalMembers} members</button>
        </div>
        <table className="d2d-table">
          <thead>
            <tr><th>Name</th><th>Role</th><th>Location</th><th>Status</th></tr>
          </thead>
          <tbody>
            {members.map(m => (
              <tr key={m.id}>
                <td>
                  <div className="d2d-table-user">
                    <div className={`d2d-avatar-sm d2d-avatar--${statusClass(m.status)}`}>{getInitials(m.firstName, m.lastName)}</div>
                    <div>
                      <span className="d2d-table-name">{m.firstName} {m.lastName}</span>
                      <span className="d2d-table-org">{m.currentOrganization}</span>
                    </div>
                  </div>
                </td>
                <td>{m.currentRole}</td>
                <td>{m.livesIn}</td>
                <td><span className={`d2d-status-pill d2d-status--${statusClass(m.status)}`}>{m.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderMembers = () => (
    <div className="d2d-grid">
      <div className="d2d-card d2d-card--table" style={{ gridColumn: '1 / -1' }}>
        <div className="d2d-card-header">
          <h3>All Members</h3>
          <span className="d2d-member-count">{stats.totalMembers} members</span>
        </div>
        <div className="d2d-member-avatars" style={{ marginBottom: '24px' }}>
          {newMembers.map(m => (
            <div key={m.id} className="d2d-member-chip">
              <div className={`d2d-avatar d2d-avatar--${statusClass(m.status)}`}>{getInitials(m.firstName, m.lastName)}</div>
              <span>{m.firstName}</span>
            </div>
          ))}
        </div>
        <table className="d2d-table">
          <thead>
            <tr><th>Name</th><th>Role</th><th>Location</th><th>Status</th></tr>
          </thead>
          <tbody>
            {members.map(m => (
              <tr key={m.id}>
                <td>
                  <div className="d2d-table-user">
                    <div className={`d2d-avatar-sm d2d-avatar--${statusClass(m.status)}`}>{getInitials(m.firstName, m.lastName)}</div>
                    <div>
                      <span className="d2d-table-name">{m.firstName} {m.lastName}</span>
                      <span className="d2d-table-org">{m.currentOrganization}</span>
                    </div>
                  </div>
                </td>
                <td>{m.currentRole}</td>
                <td>{m.livesIn}</td>
                <td><span className={`d2d-status-pill d2d-status--${statusClass(m.status)}`}>{m.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )

  const renderEvents = () => (
    <div className="d2d-grid">
      {events.map((event, i) => (
        <div key={i} className="d2d-card d2d-card--event" style={{ gridColumn: '1 / -1' }}>
          <div className="d2d-event-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div className="d2d-event-content">
            <h3 className="d2d-event-title">{event.title}</h3>
            <p className="d2d-event-sub">{event.subtitle}</p>
            <div className="d2d-event-meta">
              <span>{event.date}</span>
              <span>{event.attendeesCount} attending</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )

  const renderProfile = () => (
    <div className="d2d-grid">
      <div className="d2d-card" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '48px 32px' }}>
        <div className="d2d-user-avatar" style={{ width: 80, height: 80, fontSize: 28, margin: '0 auto 16px', borderRadius: '50%', background: 'var(--primary-green, #648349)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {getInitials(currentUser.firstName, currentUser.lastName)}
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#2d3a2e', marginBottom: 4 }}>{currentUser.firstName} {currentUser.lastName}</h2>
        <p style={{ color: '#6b7c6e', marginBottom: 4 }}>{currentUser.currentRole} at {currentUser.currentOrganization}</p>
        <p style={{ color: '#8a9a8c', marginBottom: 24 }}>📍 {currentUser.livesIn}</p>

        <div className="d2d-completion-bar-track" style={{ maxWidth: 300, margin: '0 auto 8px' }}>
          <div className="d2d-completion-bar-fill" style={{ width: `${currentUser.profileCompletion}%` }} />
        </div>
        <p style={{ color: '#6b7c6e', fontSize: 14 }}>Profile {currentUser.profileCompletion}% complete</p>
      </div>

      <div className="d2d-card" style={{ gridColumn: '1 / -1', padding: '32px' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#2d3a2e', marginBottom: 16 }}>About</h3>
        <p style={{ color: '#6b7c6e', lineHeight: 1.6 }}>{currentUser.introduction || 'No introduction added yet. Complete your profile to tell others about yourself.'}</p>
      </div>

      <div className="d2d-card" style={{ padding: '32px' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#2d3a2e', marginBottom: 16 }}>Details</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div><span style={{ color: '#8a9a8c', fontSize: 13 }}>Organization</span><p style={{ color: '#2d3a2e', fontWeight: 500 }}>{currentUser.currentOrganization}</p></div>
          <div><span style={{ color: '#8a9a8c', fontSize: 13 }}>Role</span><p style={{ color: '#2d3a2e', fontWeight: 500 }}>{currentUser.currentRole}</p></div>
          <div><span style={{ color: '#8a9a8c', fontSize: 13 }}>Location</span><p style={{ color: '#2d3a2e', fontWeight: 500 }}>{currentUser.livesIn}</p></div>
        </div>
      </div>

      <div className="d2d-card" style={{ padding: '32px' }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, color: '#2d3a2e', marginBottom: 16 }}>Inspiration</h3>
        <blockquote style={{ borderLeft: '3px solid var(--primary-green, #648349)', paddingLeft: 16, color: '#4a5a4c', fontStyle: 'italic', lineHeight: 1.6 }}>
          {currentUser.quote || '"The only way to do great work is to love what you do."'}
        </blockquote>
      </div>
    </div>
  )

  const tabTitles = { home: `Welcome back, ${currentUser.firstName}!`, members: 'Members', events: 'Events', profile: 'Profile' }
  const tabSubtitles = { home: `${stats.newMembersThisWeek} new people joined this week`, members: `${stats.totalMembers} community members`, events: `${stats.upcomingEvents} upcoming event${stats.upcomingEvents !== 1 ? 's' : ''}`, profile: 'Manage your profile and settings' }
  const tabRenderers = { home: renderHome, members: renderMembers, events: renderEvents, profile: renderProfile }

  return (
    <div className="d2d-page">
      {/* Sidebar Nav */}
      <aside className="d2d-sidebar">
        <div className="d2d-sidebar-brand">
          <SuperMorpheusLogo size={28} />
          <span className="d2d-brand-name">Super Morpheus</span>
        </div>

        <nav className="d2d-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.key}
              className={`d2d-nav-item ${activeTab === item.key ? 'active' : ''}`}
              onClick={() => setActiveTab(item.key)}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="d2d-sidebar-footer">
          <div className="d2d-user-pill">
            <div className="d2d-user-avatar">{getInitials(currentUser.firstName, currentUser.lastName)}</div>
            <div className="d2d-user-meta">
              <span className="d2d-user-name">{currentUser.firstName} {currentUser.lastName}</span>
              <span className="d2d-user-role">{currentUser.currentRole}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="d2d-main">
        {/* Top bar */}
        <header className="d2d-topbar">
          <div>
            <h1 className="d2d-greeting">{tabTitles[activeTab]}</h1>
            <p className="d2d-greeting-sub">{tabSubtitles[activeTab]}</p>
          </div>
          <div className="d2d-topbar-actions">
            <div className="d2d-search-box">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search members, events..." className="d2d-search-input" />
            </div>
            <button className="d2d-notif-btn" type="button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span className="d2d-notif-badge">3</span>
            </button>
          </div>
        </header>

        {tabRenderers[activeTab]()}
      </main>
    </div>
  )
}

export default DesktopDashboard
