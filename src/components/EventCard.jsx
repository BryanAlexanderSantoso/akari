import { Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './EventCard.css';

export default function EventCard({ title, date, location, image, isFeatured }) {
  return (
    <div className={`event-card glass-panel ${isFeatured ? 'featured' : ''}`}>
      <div className="event-image-container">
        <img src={image} alt={title} className="event-image" />
        {isFeatured && <span className="featured-badge">Featured</span>}
      </div>
      <div className="event-content">
        <h3 className="event-title">{title}</h3>
        <div className="event-details">
          <div className="detail-item">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="detail-item">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
        <Link to="/EventDetail" className="btn btn-primary w-100 mt-3" style={{ width: '100%', marginTop: '1rem', justifyContent: 'center' }}>
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}
