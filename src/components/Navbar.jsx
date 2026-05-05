import { Link, useLocation } from 'react-router-dom';
import { Calendar, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/EventDetail' },
    { name: 'JNews', path: '/JNews' },
    { name: 'Contact', path: '/Contact' },
  ];

  return (
    <nav className="navbar glass-panel">
      <div className="container nav-container">
        <Link to="/" className="brand" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6993106ab76e254a518058d9/3e07bf9e0_JPeventInfo.png" 
            alt="Akari Project Logo" 
            style={{ height: '36px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }} 
          />
          <span className="brand-text">Akari Project</span>
        </Link>

        {/* Desktop Nav */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="nav-actions desktop-only">
          <button className="icon-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <Link to="/StaffLogin" className="btn btn-primary btn-sm">
            Staff Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle mobile-only" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu glass-panel">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/StaffLogin" className="mobile-link btn-mobile" onClick={() => setIsOpen(false)}>
            Staff Login
          </Link>
        </div>
      )}
    </nav>
  );
}
