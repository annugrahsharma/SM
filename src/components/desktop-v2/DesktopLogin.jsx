import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../styles/desktop-v2.css'

// SuperMorpheus Logo — inline SVG from brand assets
function SuperMorpheusLogo({ size = 80 }) {
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

// Decorative parallelogram shapes used as background pattern
function BrandShapes() {
  return (
    <div className="d2-brand-shapes" aria-hidden="true">
      <svg className="d2-shape d2-shape-1" viewBox="0 0 260 130" fill="none">
        <path d="M20 34L227 0L258 49L0 128Z" fill="#D5CC8E" opacity="0.15"/>
      </svg>
      <svg className="d2-shape d2-shape-2" viewBox="0 0 260 130" fill="none">
        <path d="M20 34L227 0L258 49L0 128Z" fill="#E2B910" opacity="0.12"/>
      </svg>
      <svg className="d2-shape d2-shape-3" viewBox="0 0 260 130" fill="none">
        <path d="M20 34L227 0L258 49L0 128Z" fill="#FFFFFF" opacity="0.06"/>
      </svg>
    </div>
  )
}

function DesktopLogin() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      navigate('/desktop-v2/dashboard')
    }, 600)
  }

  const handleGoogleLogin = () => {
    navigate('/desktop-v2/dashboard')
  }

  return (
    <div className="d2-login-page">
      {/* Left — Brand Panel */}
      <aside className="d2-brand-panel">
        <BrandShapes />

        <div className="d2-brand-content">
          <div className="d2-brand-logo">
            <SuperMorpheusLogo size={56} />
          </div>

          <div className="d2-brand-text">
            <h2 className="d2-brand-headline">
              Grow with<br />
              <span className="d2-brand-accent">Super Morpheus</span>
            </h2>
            <p className="d2-brand-tagline">
              A platform for personal growth, meaningful connections, and collective progress.
            </p>
          </div>

          <div className="d2-brand-values">
            {['Courage', 'Sincerity', 'Perseverance', 'Generosity', 'Progress', 'Truth'].map((value) => (
              <span key={value} className="d2-value-tag">{value}</span>
            ))}
          </div>
        </div>

        <p className="d2-brand-footer">
          Super Morpheus &copy; {new Date().getFullYear()}
        </p>
      </aside>

      {/* Right — Login Form */}
      <main className="d2-form-panel">
        <div className="d2-form-container">
          <header className="d2-form-header">
            <h1 className="d2-form-title">Welcome back</h1>
            <p className="d2-form-subtitle">Sign in to continue to Super Morpheus</p>
          </header>

          <form className="d2-form" onSubmit={handleSubmit}>
            <div className="d2-input-group">
              <label className="d2-label" htmlFor="d2-email">Email</label>
              <input
                type="email"
                id="d2-email"
                name="email"
                className="d2-input"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
            </div>

            <div className="d2-input-group">
              <div className="d2-label-row">
                <label className="d2-label" htmlFor="d2-password">Password</label>
                <a href="#" className="d2-forgot-link">Forgot password?</a>
              </div>
              <div className="d2-password-wrap">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="d2-password"
                  name="password"
                  className="d2-input"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="d2-eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="d2-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="d2-spinner" aria-label="Signing in" />
              ) : (
                'Continue'
              )}
            </button>
          </form>

          <div className="d2-divider">
            <span className="d2-divider-line" />
            <span className="d2-divider-text">or</span>
            <span className="d2-divider-line" />
          </div>

          <button className="d2-google-btn" onClick={handleGoogleLogin} type="button">
            <svg className="d2-google-icon" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          <p className="d2-signup-prompt">
            Don't have an account?{' '}
            <Link to="/desktop-v2/signup" className="d2-signup-link">Create one</Link>
          </p>
        </div>
      </main>
    </div>
  )
}

export default DesktopLogin
