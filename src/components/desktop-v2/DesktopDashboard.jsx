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

// ---- Icons ----
const Icons = {
  back: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  email: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,
  phone: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  location: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  calendar: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  video: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polygon points="23 7 16 12 23 17"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>,
  play: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
  link: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  twitter: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  instagram: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  linkedin: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  globe: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  quote: <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" opacity="0.12"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>,
  edit: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>,
}

const getInitials = (first, last) => `${first?.charAt(0) || ''}${last?.charAt(0) || ''}`
const statusClass = (s) => s === 'super' ? 'super' : s === 'active' ? 'active' : 'basic'
const statusLabel = (s) => s === 'super' ? 'Super Member' : s === 'active' ? 'Active Member' : 'Basic Member'

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
}

const getDomainName = (url) => {
  try {
    const u = new URL(url)
    return u.hostname.replace('www.', '')
  } catch { return url }
}

const NAV_ITEMS = [
  { key: 'home', label: 'Home', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { key: 'members', label: 'Members', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
  { key: 'events', label: 'Events', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
  { key: 'profile', label: 'Profile', icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> },
]

// ---- Full-page Member Profile ----
function MemberProfilePage({ member, onBack, isOwnProfile }) {
  if (!member) return null

  const fullName = [member.firstName, member.middleName, member.lastName].filter(Boolean).join(' ')
  const hasSocials = member.twitter || member.instagram || member.linkedin
  const hasContentLinks = member.contentLinks && member.contentLinks.length > 0
  const hasOtherLinks = member.otherSocialLinks && member.otherSocialLinks.length > 0
  const hasStoryVideos = member.storyVideos && (member.storyVideos.earlyLife || member.storyVideos.professionalJourney || member.storyVideos.currentLife)
  const videoCategories = [
    { key: 'earlyLife', label: 'Early Life', desc: 'Where it all began' },
    { key: 'professionalJourney', label: 'Professional Journey', desc: 'Career milestones' },
    { key: 'currentLife', label: 'Current Life', desc: 'Life today' },
  ]

  return (
    <div className="d2d-profile-page">
      {/* Back navigation */}
      <button className="d2d-profile-back" onClick={onBack} type="button">
        {Icons.back}
        <span>Back</span>
      </button>

      {/* Hero header */}
      <div className="d2d-profile-hero">
        <div className="d2d-profile-hero-left">
          <div className={`d2d-profile-avatar d2d-avatar--${statusClass(member.status)}`}>
            {member.profilePicture
              ? <img src={member.profilePicture} alt={fullName} />
              : getInitials(member.firstName, member.lastName)
            }
          </div>
          <div className="d2d-profile-identity">
            <h1 className="d2d-profile-name">{fullName}</h1>
            <p className="d2d-profile-role">{member.currentRole} at {member.currentOrganization}</p>
            <div className="d2d-profile-meta-row">
              <span className="d2d-profile-meta-item">{Icons.location} {member.livesIn}</span>
              {member.joinedDate && <span className="d2d-profile-meta-item">{Icons.calendar} Joined {formatDate(member.joinedDate)}</span>}
            </div>
          </div>
        </div>
        <div className="d2d-profile-hero-right">
          <span className={`d2d-status-pill d2d-status-pill--lg d2d-status--${statusClass(member.status)}`}>
            {statusLabel(member.status)}
          </span>
          {!isOwnProfile && (
            <div className="d2d-profile-hero-actions">
              <button className="d2d-detail-btn d2d-detail-btn--primary" type="button">Connect</button>
              <button className="d2d-detail-btn d2d-detail-btn--secondary" type="button">Message</button>
            </div>
          )}
          {isOwnProfile && (
            <button className="d2d-detail-btn d2d-detail-btn--secondary" type="button">
              {Icons.edit} Edit Profile
            </button>
          )}
        </div>
      </div>

      {/* Profile completion (own profile only) */}
      {isOwnProfile && member.profileCompletion < 100 && (
        <div className="d2d-profile-completion-banner">
          <div className="d2d-profile-completion-info">
            <span className="d2d-profile-completion-label">Profile Completion</span>
            <span className="d2d-profile-completion-pct">{member.profileCompletion}%</span>
          </div>
          <div className="d2d-completion-bar-track"><div className="d2d-completion-bar-fill" style={{ width: `${member.profileCompletion}%` }} /></div>
          <p className="d2d-profile-completion-hint">Complete your profile to unlock all features and become a Super Member</p>
        </div>
      )}

      {/* Two-column layout */}
      <div className="d2d-profile-content">
        {/* Left column - main content */}
        <div className="d2d-profile-main">
          {/* About */}
          {member.introduction && (
            <section className="d2d-profile-section">
              <h2 className="d2d-profile-section-title">About</h2>
              <p className="d2d-profile-body">{member.introduction}</p>
            </section>
          )}

          {/* Inspiring Quote */}
          {member.inspiringQuote && (
            <section className="d2d-profile-section">
              <h2 className="d2d-profile-section-title">Inspiring Quote</h2>
              <blockquote className="d2d-profile-quote">
                {Icons.quote}
                <p>{member.inspiringQuote}</p>
              </blockquote>
            </section>
          )}

          {/* Joy Outside Work */}
          {member.joyOutsideWork && (
            <section className="d2d-profile-section">
              <h2 className="d2d-profile-section-title">Joy Outside Work</h2>
              <p className="d2d-profile-body">{member.joyOutsideWork}</p>
            </section>
          )}

          {/* Story Videos */}
          <section className="d2d-profile-section">
            <h2 className="d2d-profile-section-title">Story Videos</h2>
            <div className="d2d-profile-videos">
              {videoCategories.map(vc => {
                const recorded = member.storyVideos && member.storyVideos[vc.key]
                return (
                  <div key={vc.key} className={`d2d-video-card ${recorded ? 'd2d-video-card--recorded' : 'd2d-video-card--empty'}`}>
                    <div className="d2d-video-thumb">
                      {recorded ? (
                        <div className="d2d-video-play">{Icons.play}</div>
                      ) : (
                        <div className="d2d-video-placeholder">
                          {Icons.video}
                          <span>Not recorded</span>
                        </div>
                      )}
                    </div>
                    <div className="d2d-video-info">
                      <h4 className="d2d-video-label">{vc.label}</h4>
                      <p className="d2d-video-desc">{vc.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            {!hasStoryVideos && isOwnProfile && (
              <p className="d2d-profile-hint">Record your story videos to become a Super Member and inspire others in the community.</p>
            )}
          </section>

          {/* Interests / Tags */}
          {member.tags && member.tags.length > 0 && (
            <section className="d2d-profile-section">
              <h2 className="d2d-profile-section-title">Interests</h2>
              <div className="d2d-detail-tags">
                {member.tags.map(tag => (
                  <span key={tag} className="d2d-detail-tag">{tag}</span>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right column - sidebar info */}
        <div className="d2d-profile-sidebar-col">
          {/* Contact Info */}
          <div className="d2d-profile-card">
            <h3 className="d2d-profile-card-title">Contact Information</h3>
            <div className="d2d-profile-contact-list">
              <div className="d2d-profile-contact-item">
                {Icons.email}
                <div>
                  <span className="d2d-profile-contact-label">Email</span>
                  <span className="d2d-profile-contact-value">{member.email}</span>
                </div>
              </div>
              {member.phone && (
                <div className="d2d-profile-contact-item">
                  {Icons.phone}
                  <div>
                    <span className="d2d-profile-contact-label">Phone</span>
                    <span className="d2d-profile-contact-value">{member.phone}</span>
                  </div>
                </div>
              )}
              <div className="d2d-profile-contact-item">
                {Icons.location}
                <div>
                  <span className="d2d-profile-contact-label">Location</span>
                  <span className="d2d-profile-contact-value">{member.livesIn}{member.locality ? `, ${member.locality}` : ''}</span>
                  {member.pincode && <span className="d2d-profile-contact-sub">PIN: {member.pincode}</span>}
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          {(hasSocials || hasContentLinks || hasOtherLinks) && (
            <div className="d2d-profile-card">
              <h3 className="d2d-profile-card-title">Social &amp; Links</h3>
              <div className="d2d-profile-social-list">
                {member.twitter && (
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="d2d-profile-social-item">
                    {Icons.twitter}
                    <span>X (Twitter)</span>
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="d2d-profile-social-item">
                    {Icons.instagram}
                    <span>Instagram</span>
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="d2d-profile-social-item">
                    {Icons.linkedin}
                    <span>LinkedIn</span>
                  </a>
                )}
                {hasContentLinks && (
                  <>
                    <div className="d2d-profile-social-divider" />
                    <span className="d2d-profile-social-heading">Content</span>
                    {member.contentLinks.map((url, i) => (
                      <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="d2d-profile-social-item">
                        {Icons.globe}
                        <span>{getDomainName(url)}</span>
                      </a>
                    ))}
                  </>
                )}
                {hasOtherLinks && (
                  <>
                    <div className="d2d-profile-social-divider" />
                    <span className="d2d-profile-social-heading">Other</span>
                    {member.otherSocialLinks.map((url, i) => (
                      <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="d2d-profile-social-item">
                        {Icons.link}
                        <span>{getDomainName(url)}</span>
                      </a>
                    ))}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Details card */}
          <div className="d2d-profile-card">
            <h3 className="d2d-profile-card-title">Details</h3>
            <div className="d2d-profile-details-list">
              <div className="d2d-profile-detail-item">
                <span className="d2d-profile-detail-label">Organization</span>
                <span className="d2d-profile-detail-value">{member.currentOrganization}</span>
              </div>
              <div className="d2d-profile-detail-item">
                <span className="d2d-profile-detail-label">Role</span>
                <span className="d2d-profile-detail-value">{member.currentRole}</span>
              </div>
              {member.joinedDate && (
                <div className="d2d-profile-detail-item">
                  <span className="d2d-profile-detail-label">Member Since</span>
                  <span className="d2d-profile-detail-value">{formatDate(member.joinedDate)}</span>
                </div>
              )}
              <div className="d2d-profile-detail-item">
                <span className="d2d-profile-detail-label">Status</span>
                <span className="d2d-profile-detail-value">
                  <span className={`d2d-status-pill d2d-status--${statusClass(member.status)}`}>{statusLabel(member.status)}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


function DesktopDashboard() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('home')
  const [selectedMember, setSelectedMember] = useState(null)
  const [prevTab, setPrevTab] = useState('home')

  const openMember = (m) => {
    setPrevTab(activeTab)
    setSelectedMember(m)
    setActiveTab('member-profile')
  }
  const closeMember = () => {
    setSelectedMember(null)
    setActiveTab(prevTab)
  }

  // Helper: clickable table row builder
  const MemberTable = ({ memberList }) => (
    <table className="d2d-table">
      <thead>
        <tr><th>Name</th><th>Role</th><th>Location</th><th>Status</th></tr>
      </thead>
      <tbody>
        {memberList.map(m => (
          <tr key={m.id} className="d2d-table-row--clickable" onClick={() => openMember(m)}>
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
  )

  // Helper: clickable member chip
  const MemberChip = ({ m }) => (
    <div className="d2d-member-chip d2d-member-chip--clickable" onClick={() => openMember(m)}>
      <div className={`d2d-avatar d2d-avatar--${statusClass(m.status)}`}>{getInitials(m.firstName, m.lastName)}</div>
      <span>{m.firstName}</span>
    </div>
  )

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
            {Icons.video}
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
          {newMembers.map(m => <MemberChip key={m.id} m={m} />)}
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
        <MemberTable memberList={members} />
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
          {newMembers.map(m => <MemberChip key={m.id} m={m} />)}
        </div>
        <MemberTable memberList={members} />
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

  // Profile tab now opens the full-page profile view for currentUser
  const renderProfile = () => (
    <MemberProfilePage member={currentUser} onBack={() => setActiveTab('home')} isOwnProfile={true} />
  )

  // Member profile view (when a member is clicked)
  const renderMemberProfile = () => (
    <MemberProfilePage member={selectedMember} onBack={closeMember} isOwnProfile={false} />
  )

  const tabTitles = {
    home: `Welcome back, ${currentUser.firstName}!`,
    members: 'Members',
    events: 'Events',
    profile: `${currentUser.firstName}'s Profile`,
    'member-profile': selectedMember ? `${selectedMember.firstName} ${selectedMember.lastName}` : 'Profile',
  }
  const tabSubtitles = {
    home: `${stats.newMembersThisWeek} new people joined this week`,
    members: `${stats.totalMembers} community members`,
    events: `${stats.upcomingEvents} upcoming event${stats.upcomingEvents !== 1 ? 's' : ''}`,
    profile: 'Manage your profile and settings',
    'member-profile': selectedMember ? `${selectedMember.currentRole} at ${selectedMember.currentOrganization}` : '',
  }
  const tabRenderers = {
    home: renderHome,
    members: renderMembers,
    events: renderEvents,
    profile: renderProfile,
    'member-profile': renderMemberProfile,
  }

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
              className={`d2d-nav-item ${(activeTab === item.key || (item.key === 'profile' && activeTab === 'member-profile')) ? 'active' : ''}`}
              onClick={() => { setActiveTab(item.key); if (item.key !== 'member-profile') setSelectedMember(null) }}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="d2d-sidebar-footer">
          <div className="d2d-user-pill" onClick={() => setActiveTab('profile')} style={{ cursor: 'pointer' }}>
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
        {/* Top bar — hidden on profile pages for cleaner look */}
        {activeTab !== 'member-profile' && activeTab !== 'profile' && (
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
        )}

        {tabRenderers[activeTab]()}
      </main>
    </div>
  )
}

export default DesktopDashboard
