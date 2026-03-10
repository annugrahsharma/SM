import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/desktop-v2.css'

function SuperMorpheusLogo({ size = 48 }) {
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

const STEPS = [
  { key: 'welcome', label: 'Welcome' },
  { key: 'basic',   label: 'Basic Info' },
  { key: 'about',   label: 'About You' },
  { key: 'social',  label: 'Social' },
  { key: 'complete', label: 'Complete' },
]

function DesktopOnboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [errors, setErrors] = useState({})
  const [profile, setProfile] = useState({
    firstName: '', middleName: '', lastName: '',
    organization: '', role: '', quote: '',
    introduction: '', livesIn: '', pincode: '', locality: '', joy: '',
    twitter: '', instagram: '', linkedin: '',
    contentLinks: [], otherLinks: [],
    newContentLink: '', newOtherLink: '',
  })

  const set = (field) => (e) => {
    setProfile(p => ({ ...p, [field]: e.target.value }))
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n })
  }

  const completion = () => {
    const fields = [profile.firstName, profile.lastName, profile.organization, profile.role, profile.quote, profile.introduction, profile.livesIn, profile.pincode, profile.joy]
    return Math.round(fields.filter(f => f.trim()).length / fields.length * 100)
  }

  const validateBasic = () => {
    const e = {}
    if (!profile.firstName.trim()) e.firstName = 'Required'
    if (!profile.lastName.trim()) e.lastName = 'Required'
    if (!profile.organization.trim()) e.organization = 'Required'
    if (!profile.role.trim()) e.role = 'Required'
    if (!profile.quote.trim()) e.quote = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const validateAbout = () => {
    const e = {}
    if (!profile.introduction.trim()) e.introduction = 'Required'
    if (!profile.livesIn.trim()) e.livesIn = 'Required'
    if (!profile.pincode.trim()) e.pincode = 'Required'
    if (!profile.joy.trim()) e.joy = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const next = () => {
    if (step === 1 && !validateBasic()) return
    if (step === 2 && !validateAbout()) return
    setErrors({})
    setStep(s => Math.min(s + 1, 4))
  }
  const prev = () => { setErrors({}); setStep(s => Math.max(s - 1, 0)) }

  const addLink = (type) => {
    const field = type === 'content' ? 'contentLinks' : 'otherLinks'
    const inputField = type === 'content' ? 'newContentLink' : 'newOtherLink'
    const val = profile[inputField].trim()
    if (!val) return
    setProfile(p => ({ ...p, [field]: [...p[field], val], [inputField]: '' }))
  }
  const removeLink = (type, idx) => {
    const field = type === 'content' ? 'contentLinks' : 'otherLinks'
    setProfile(p => ({ ...p, [field]: p[field].filter((_, i) => i !== idx) }))
  }

  const wordCount = (text) => text.trim() ? text.trim().split(/\s+/).length : 0

  // ---- Render helpers per step ----
  const renderWelcome = () => (
    <div className="d2o-welcome">
      <div className="d2o-welcome-logo"><SuperMorpheusLogo size={64} /></div>
      <h1 className="d2o-welcome-title">Welcome to Super Morpheus</h1>
      <p className="d2o-welcome-sub">Join our community built on Truth, Progress, Generosity, Perseverance, Sincerity, Courage, and Aspiration.</p>

      <div className="d2o-features">
        {[
          { icon: '👤', title: 'Create Your Profile', desc: 'Share your journey, experiences, and aspirations' },
          { icon: '🤝', title: 'Connect with Members', desc: 'Discover and network with like-minded professionals' },
          { icon: '📅', title: 'Join Events', desc: 'Participate in exclusive community gatherings' },
        ].map(f => (
          <div key={f.title} className="d2o-feature-card">
            <span className="d2o-feature-icon">{f.icon}</span>
            <div>
              <h3 className="d2o-feature-title">{f.title}</h3>
              <p className="d2o-feature-desc">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="d2-submit-btn" onClick={next}>Get Started</button>
      <p className="d2o-time-note">Takes about 5 minutes</p>
    </div>
  )

  const renderBasicInfo = () => (
    <div className="d2o-step-form">
      <div className="d2o-step-header">
        <h2 className="d2o-step-title">Basic Information</h2>
        <p className="d2o-step-sub">Tell us about yourself</p>
      </div>
      <div className="d2-row">
        <div className="d2-input-group">
          <label className="d2-label">First Name *</label>
          <input className={`d2-input ${errors.firstName ? 'd2-input--error' : ''}`} placeholder="e.g., John" value={profile.firstName} onChange={set('firstName')} />
          {errors.firstName && <span className="d2-error">{errors.firstName}</span>}
        </div>
        <div className="d2-input-group">
          <label className="d2-label">Middle Name</label>
          <input className="d2-input" placeholder="e.g., Fitzgerald" value={profile.middleName} onChange={set('middleName')} />
        </div>
      </div>
      <div className="d2-input-group">
        <label className="d2-label">Last Name *</label>
        <input className={`d2-input ${errors.lastName ? 'd2-input--error' : ''}`} placeholder="e.g., Kennedy" value={profile.lastName} onChange={set('lastName')} />
        {errors.lastName && <span className="d2-error">{errors.lastName}</span>}
      </div>
      <div className="d2-row">
        <div className="d2-input-group">
          <label className="d2-label">Current Organization *</label>
          <input className={`d2-input ${errors.organization ? 'd2-input--error' : ''}`} placeholder="Company name" value={profile.organization} onChange={set('organization')} />
          {errors.organization && <span className="d2-error">{errors.organization}</span>}
        </div>
        <div className="d2-input-group">
          <label className="d2-label">Current Role *</label>
          <input className={`d2-input ${errors.role ? 'd2-input--error' : ''}`} placeholder="e.g., Founder & CEO" value={profile.role} onChange={set('role')} />
          {errors.role && <span className="d2-error">{errors.role}</span>}
        </div>
      </div>
      <div className="d2-input-group">
        <label className="d2-label">A Quote That Inspires You *</label>
        <textarea className={`d2-input d2-textarea ${errors.quote ? 'd2-input--error' : ''}`} placeholder="Share a quote that motivates you, along with its source" value={profile.quote} onChange={set('quote')} rows={3} />
        {errors.quote && <span className="d2-error">{errors.quote}</span>}
      </div>
      <button className="d2-submit-btn" onClick={next}>Continue</button>
    </div>
  )

  const renderAbout = () => (
    <div className="d2o-step-form">
      <div className="d2o-step-header">
        <h2 className="d2o-step-title">About You</h2>
        <p className="d2o-step-sub">Help others get to know you better</p>
      </div>
      <div className="d2-input-group">
        <div className="d2-label-row">
          <label className="d2-label">Introduction *</label>
          <span className={`d2o-counter ${wordCount(profile.introduction) >= 100 ? 'd2o-counter--limit' : ''}`}>{wordCount(profile.introduction)}/100 words</span>
        </div>
        <textarea className={`d2-input d2-textarea ${errors.introduction ? 'd2-input--error' : ''}`} placeholder="Write a brief introduction about yourself in 4-5 sentences." value={profile.introduction} onChange={set('introduction')} rows={4} />
        {errors.introduction && <span className="d2-error">{errors.introduction}</span>}
      </div>
      <div className="d2-row">
        <div className="d2-input-group">
          <label className="d2-label">Lives In *</label>
          <input className={`d2-input ${errors.livesIn ? 'd2-input--error' : ''}`} placeholder="e.g., Bengaluru, India" value={profile.livesIn} onChange={set('livesIn')} />
          {errors.livesIn && <span className="d2-error">{errors.livesIn}</span>}
        </div>
        <div className="d2-input-group">
          <label className="d2-label">Pincode *</label>
          <input className={`d2-input ${errors.pincode ? 'd2-input--error' : ''}`} placeholder="e.g., 560001" value={profile.pincode} onChange={(e) => { if (/^\d*$/.test(e.target.value)) set('pincode')(e) }} />
          {errors.pincode && <span className="d2-error">{errors.pincode}</span>}
        </div>
      </div>
      <div className="d2-input-group">
        <label className="d2-label">Locality / Area</label>
        <input className="d2-input" placeholder="e.g., Whitefield" value={profile.locality} onChange={set('locality')} />
      </div>
      <div className="d2-input-group">
        <label className="d2-label">What fills you with joy, outside your work? *</label>
        <textarea className={`d2-input d2-textarea ${errors.joy ? 'd2-input--error' : ''}`} placeholder="Keep it short — hobbies, interests, passions" value={profile.joy} onChange={set('joy')} rows={3} />
        {errors.joy && <span className="d2-error">{errors.joy}</span>}
      </div>
      <div className="d2o-btn-row">
        <button className="d2o-back-btn" type="button" onClick={prev}>Back</button>
        <button className="d2-submit-btn" onClick={next}>Continue</button>
      </div>
    </div>
  )

  const renderSocial = () => (
    <div className="d2o-step-form">
      <div className="d2o-step-header">
        <h2 className="d2o-step-title">Connect & Share</h2>
        <p className="d2o-step-sub">Add your social profiles and content links</p>
      </div>

      <div className="d2o-section-label">Social Profiles</div>
      <div className="d2-row">
        <div className="d2-input-group">
          <label className="d2-label">X (Twitter)</label>
          <input className="d2-input" placeholder="https://x.com/username" value={profile.twitter} onChange={set('twitter')} />
        </div>
        <div className="d2-input-group">
          <label className="d2-label">Instagram</label>
          <input className="d2-input" placeholder="https://instagram.com/username" value={profile.instagram} onChange={set('instagram')} />
        </div>
      </div>
      <div className="d2-input-group">
        <label className="d2-label">LinkedIn</label>
        <input className="d2-input" placeholder="https://linkedin.com/in/username" value={profile.linkedin} onChange={set('linkedin')} />
      </div>

      <div className="d2o-section-label">Content Links <span className="d2o-section-hint">Blogs, videos, podcasts, etc.</span></div>
      {profile.contentLinks.map((link, i) => (
        <div key={i} className="d2o-link-item">
          <span className="d2o-link-text">{link}</span>
          <button className="d2o-link-remove" onClick={() => removeLink('content', i)} type="button">&times;</button>
        </div>
      ))}
      <div className="d2o-add-link-row">
        <input className="d2-input" placeholder="https://your-content-link.com" value={profile.newContentLink} onChange={set('newContentLink')} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addLink('content'))} />
        <button className="d2o-add-btn" type="button" onClick={() => addLink('content')}>+</button>
      </div>

      <div className="d2o-section-label">Other Social Handles</div>
      {profile.otherLinks.map((link, i) => (
        <div key={i} className="d2o-link-item">
          <span className="d2o-link-text">{link}</span>
          <button className="d2o-link-remove" onClick={() => removeLink('other', i)} type="button">&times;</button>
        </div>
      ))}
      <div className="d2o-add-link-row">
        <input className="d2-input" placeholder="https://your-social-profile.com" value={profile.newOtherLink} onChange={set('newOtherLink')} onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addLink('other'))} />
        <button className="d2o-add-btn" type="button" onClick={() => addLink('other')}>+</button>
      </div>

      <div className="d2o-btn-row">
        <button className="d2o-back-btn" type="button" onClick={prev}>Back</button>
        <button className="d2-submit-btn" onClick={next}>Complete Setup</button>
      </div>
      <p className="d2o-time-note">You can add more links later in your profile settings</p>
    </div>
  )

  const renderComplete = () => {
    const pct = completion()
    const initials = `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase()
    return (
      <div className="d2o-complete">
        <div className="d2o-complete-icon">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 className="d2o-complete-title">You're All Set!</h2>
        <p className="d2o-complete-sub">Your profile is ready. Welcome to the Super Morpheus community!</p>

        <div className="d2o-profile-card">
          <div className="d2o-profile-avatar">{initials}</div>
          <div className="d2o-profile-info">
            <h3>{profile.firstName} {profile.lastName}</h3>
            <p>{profile.role} at {profile.organization}</p>
            {profile.livesIn && <span className="d2o-profile-loc">📍 {profile.livesIn}</span>}
          </div>
          <div className="d2o-profile-pct">
            <span className="d2o-pct-num">{pct}%</span>
            <div className="d2o-pct-bar"><div className="d2o-pct-fill" style={{ width: `${pct}%` }} /></div>
          </div>
        </div>

        <div className="d2o-next-steps">
          <h4>What's Next?</h4>
          <div className="d2o-next-grid">
            {[
              { icon: '🎬', title: 'Add Story Videos', desc: 'Share your Early Life, Professional Journey, and Current Life through video' },
              { icon: '🤝', title: 'Browse Members', desc: 'Discover and connect with other community members' },
              { icon: '📅', title: 'Join Gurukul 2025', desc: 'Connect with attendees of our flagship community event' },
            ].map(item => (
              <div key={item.title} className="d2o-next-card">
                <span className="d2o-next-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="d2-submit-btn" onClick={() => navigate('/desktop-v2/dashboard')}>Go to Dashboard</button>
      </div>
    )
  }

  const stepRenderers = [renderWelcome, renderBasicInfo, renderAbout, renderSocial, renderComplete]

  return (
    <div className="d2o-page">
      {/* Sidebar */}
      <aside className="d2o-sidebar">
        <div className="d2o-sidebar-logo"><SuperMorpheusLogo size={36} /></div>

        <nav className="d2o-sidebar-steps">
          {STEPS.map((s, i) => (
            <div key={s.key} className={`d2o-sidebar-step ${i === step ? 'active' : ''} ${i < step ? 'completed' : ''}`}>
              <div className="d2o-step-dot">
                {i < step ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                ) : (
                  <span>{i + 1}</span>
                )}
              </div>
              <span className="d2o-step-label">{s.label}</span>
            </div>
          ))}
        </nav>

        {step > 0 && step < 4 && (
          <div className="d2o-sidebar-progress">
            <span className="d2o-progress-label">{completion()}% complete</span>
            <div className="d2o-progress-track"><div className="d2o-progress-fill" style={{ width: `${completion()}%` }} /></div>
          </div>
        )}

        <p className="d2o-sidebar-footer">Super Morpheus &copy; {new Date().getFullYear()}</p>
      </aside>

      {/* Main content */}
      <main className="d2o-main">
        <div className="d2o-content">
          {stepRenderers[step]()}
        </div>
      </main>
    </div>
  )
}

export default DesktopOnboarding
