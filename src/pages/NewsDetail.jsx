import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NewsDetail() {
  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 0', maxWidth: '800px' }}>
      <Link to="/JNews" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Kembali ke Berita
      </Link>
      
      <span style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Musik</span>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.3 }}>YOASOBI Konfirmasi Konser di Jakarta Tahun Depan</h1>
      
      <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> 12 Mei 2026</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><User size={16} /> Oleh Akari Admin</span>
      </div>

      <img 
        src="https://images.unsplash.com/photo-1493225457124-a1a2a5f5f4dc?w=800&q=80" 
        alt="News Cover" 
        style={{ width: '100%', height: 'auto', borderRadius: '16px', marginBottom: '2rem' }} 
      />

      <div style={{ color: 'var(--text-main)', lineHeight: 1.8, fontSize: '1.1rem' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          Duo musik Jepang yang sedang naik daun, YOASOBI, secara resmi mengumumkan jadwal tur Asia mereka termasuk pemberhentian di Jakarta. Pengumuman ini disambut dengan antusiasme yang luar biasa dari para penggemar di Indonesia.
        </p>
        <p style={{ marginBottom: '1.5rem' }}>
          Konser ini akan menjadi kedatangan pertama YOASOBI ke Indonesia setelah popularitas mereka meroket berkat lagu-lagu hit seperti "Yoru ni Kakeru" dan lagu tema anime populer "Idol". Promotor lokal telah mengkonfirmasi bahwa konser akan digelar di venue berkapasitas besar untuk menampung animo penggemar.
        </p>
        <h3 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem', color: 'var(--primary)' }}>Informasi Tiket</h3>
        <p style={{ marginBottom: '1.5rem' }}>
          Detail mengenai harga tiket dan denah tempat duduk akan diumumkan minggu depan. Penggemar disarankan untuk memantau terus media sosial resmi promotor dan Akari Project untuk mendapatkan update terbaru.
        </p>
      </div>
    </div>
  );
}
