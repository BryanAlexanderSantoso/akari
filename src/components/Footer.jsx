import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Share2, Mail } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6993106ab76e254a518058d9/3e07bf9e0_JPeventInfo.png" 
              alt="Akari Project Logo" 
              style={{ height: '40px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }} 
            />
            <span className="brand-text">Akari Project</span>
          </Link>
          <p className="footer-desc">
            Aplikasi untuk menemukan jadwal event anime, konser jejepangan, dan acara seru lainnya di Bandung.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Website" className="social-link"><Globe size={20} /></a>
            <a href="#" aria-label="Community" className="social-link"><MessageCircle size={20} /></a>
            <a href="#" aria-label="Share" className="social-link"><Share2 size={20} /></a>
            <a href="#" aria-label="Email" className="social-link"><Mail size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links-group">
          <h3>Sitemap</h3>
          <Link to="/">Home</Link>
          <Link to="/EventDetail">Events</Link>
          <Link to="/JNews">JNews</Link>
        </div>
        
        <div className="footer-links-group">
          <h3>About</h3>
          <Link to="/Contact">Contact Us</Link>
          <Link to="/StaffLogin">Staff Login</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Akari Project. All rights reserved.</p>
      </div>
    </footer>
  );
}
