import { Calendar, MapPin, Clock, Users, Ticket } from 'lucide-react';

export default function EventDetail() {
  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 0' }}>
      <div className="glass-panel" style={{ overflow: 'hidden', marginBottom: '2rem' }}>
        <img 
          src="https://images.unsplash.com/photo-1612487528505-d2338264c821?w=1200&q=80" 
          alt="Bandung Anime Convention 2026" 
          style={{ width: '100%', height: '400px', objectFit: 'cover' }}
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div>
          <span style={{ display: 'inline-block', padding: '0.25rem 0.75rem', background: 'var(--primary)', borderRadius: '20px', fontSize: '0.875rem', marginBottom: '1rem' }}>Featured Event</span>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bandung Anime Convention 2026</h1>
          
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <Calendar size={20} className="text-primary" /> 15 - 16 Agustus 2026
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <MapPin size={20} className="text-primary" /> Trans Studio Mall Bandung
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)' }}>
              <Clock size={20} className="text-primary" /> 10:00 - 21:00 WIB
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem', marginBottom: '2rem' }}>
            <h2 style={{ marginBottom: '1rem', color: 'var(--primary)' }}>Deskripsi Event</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
              Bandung Anime Convention (BAC) adalah acara tahunan yang mengumpulkan para penggemar anime, manga, dan budaya pop Jepang di seluruh Indonesia. Tahun ini, BAC hadir dengan skala yang lebih besar, mengundang bintang tamu internasional, kompetisi cosplay tingkat nasional, dan puluhan booth merchandise eksklusif.
            </p>
          </div>
        </div>

        <div>
          <div className="glass-panel" style={{ padding: '2rem', position: 'sticky', top: '100px' }}>
            <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>Tiket & Pendaftaran</h3>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span>Presale (2 Hari)</span>
              <span style={{ fontWeight: 'bold' }}>Rp 150.000</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span>On The Spot (Per Hari)</span>
              <span style={{ fontWeight: 'bold' }}>Rp 100.000</span>
            </div>

            <button className="btn btn-primary w-100" style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem' }}>
              <Ticket size={18} /> Beli Tiket
            </button>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', textAlign: 'center' }}>
              *Tiket terbatas. Syarat & ketentuan berlaku.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
