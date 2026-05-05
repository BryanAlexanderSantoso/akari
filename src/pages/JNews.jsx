import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export default function JNews() {
  const newsList = [
    {
      id: 1,
      title: 'YOASOBI Konfirmasi Konser di Jakarta Tahun Depan',
      date: '12 Mei 2026',
      summary: 'Duo musik Jepang yang sedang naik daun, YOASOBI, secara resmi mengumumkan jadwal tur Asia mereka termasuk pemberhentian di Jakarta...',
      image: 'https://images.unsplash.com/photo-1493225457124-a1a2a5f5f4dc?w=800&q=80',
      category: 'Musik'
    },
    {
      id: 2,
      title: 'Review: Adaptasi Live-Action Anime Terpopuler',
      date: '10 Mei 2026',
      summary: 'Film adaptasi live-action terbaru akhirnya tayang di bioskop lokal. Apakah film ini memenuhi ekspektasi para penggemar setia animenya?',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80',
      category: 'Film'
    },
    {
      id: 3,
      title: 'Tren Cosplay yang Mendominasi Event Tahun Ini',
      date: '08 Mei 2026',
      summary: 'Dari karakter game gacha hingga anime musiman, berikut adalah daftar karakter yang paling banyak dicosplaykan di event jejepangan belakangan ini.',
      image: 'https://images.unsplash.com/photo-1608889175123-8ee362201f81?w=800&q=80',
      category: 'Komunitas'
    }
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '2rem 0' }}>
      <h1 className="section-title text-center" style={{ marginBottom: '3rem' }}>J-News</h1>
      
      <div style={{ display: 'grid', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        {newsList.map(news => (
          <div key={news.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'row', overflow: 'hidden' }}>
            <img src={news.image} alt={news.title} style={{ width: '300px', objectFit: 'cover' }} />
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <span style={{ color: 'var(--primary)', fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>{news.category}</span>
                <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>
                  <Link to="/NewsDetail" style={{ transition: 'color 0.3s' }}>{news.title}</Link>
                </h2>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1rem', fontSize: '0.95rem', lineHeight: 1.6 }}>{news.summary}</p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                  <Calendar size={14} /> {news.date}
                </span>
                <Link to="/NewsDetail" style={{ color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600 }}>
                  Baca Selengkapnya <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
