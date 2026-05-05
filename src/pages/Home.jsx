import { Sparkles, MapPin, Zap, ChevronRight, Calendar, Clock, Ticket, Bell, ExternalLink, LayoutGrid, Music, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const events = [
    {
      id: 1,
      title: '˙⋆✮ SASHIMI XIII: The Bounty Princess ✮⋆˙',
      date: '09 Mei 2026',
      time: 'Coming Soon',
      location: 'Universitas Widyatama',
      image: 'https://base44.app/api/apps/6993106ab76e254a518058d9/files/mp/public/6993106ab76e254a518058d9/7f3c5d31d_1000735525.png',
      isFree: true,
      category: 'Anime Event',
      city: 'Bandung'
    },
    {
      id: 2,
      title: 'Japanesia Matsuri Vol. III',
      date: '10 Mei 2026',
      time: 'Coming Soon',
      location: 'Graha I Gede Ardika Poltekpar NHI Bandung',
      image: 'https://base44.app/api/apps/6993106ab76e254a518058d9/files/mp/public/6993106ab76e254a518058d9/d8779bbe1_1000726765.webp',
      isFree: false,
      price: 'Rp 15k - 25k',
      category: 'Anime Event',
      city: 'Bandung'
    },
    {
      id: 3,
      title: 'Love Our Idol Fest',
      date: '10 Mei 2026',
      time: 'Coming Soon',
      location: 'Coming Soon',
      image: 'https://base44.app/api/apps/6993106ab76e254a518058d9/files/mp/public/6993106ab76e254a518058d9/d8f78face_1000726855.jpg',
      isFree: false,
      price: 'Berbayar',
      category: 'Konser Jepang',
      city: 'Bandung'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-950 via-rose-900 to-pink-900 p-8 md:p-14 mb-10 border border-red-900/40">
          <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-8 right-12 text-6xl opacity-10 select-none">🌸</div>
          <div className="absolute bottom-6 left-8 text-5xl opacity-10 select-none">⛩️</div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-pink-300 text-sm font-medium tracking-wider uppercase">Anime & J-Culture Se-Indonesia</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Event Anime &<br />
              <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">Konser Jepang</span><br />
              Se-Indonesia
            </h1>
            <p className="text-rose-200/80 text-base md:text-lg max-w-lg mb-6">
              Temukan jadwal lengkap event anime, cosplay, dan konser J-Pop/J-Rock di seluruh Indonesia. Jangan sampai ketinggalan!
            </p>
            <div className="flex items-center gap-2 text-rose-300/70 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Se-Indonesia</span>
            </div>
          </div>
        </div>

        {/* Event Terdekat (Small Horizontal Cards) */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <h2 className="text-lg font-bold text-white">Event Terdekat</h2>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-yellow-400/10 text-yellow-400">Segera!</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.slice(0,3).map(event => (
              <Link to="/EventDetail" key={`small-${event.id}`} className="flex gap-3 rounded-2xl border p-3 transition-all hover:scale-[1.02] hover:shadow-lg bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-slate-700/50 hover:border-pink-500/40">
                <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-700">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1 mb-1">
                    <p className="font-semibold text-sm leading-tight line-clamp-2 text-white">{event.title}</p>
                    <ChevronRight className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-500" />
                  </div>
                  <div className="flex items-center gap-1 mb-1.5">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500 text-white">Segera</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{event.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6 mt-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-sm shadow-lg shadow-pink-500/25">
            <LayoutGrid className="w-4 h-4" /> Semua
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700/60 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-600 text-slate-300 font-medium text-sm transition-all">
            <Sparkles className="w-4 h-4" /> Anime Event
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700/60 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-600 text-slate-300 font-medium text-sm transition-all">
            <Music className="w-4 h-4" /> Konser Jepang
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-700/60 bg-slate-800/40 hover:bg-slate-800 hover:border-slate-600 text-slate-300 font-medium text-sm transition-all">
            <Newspaper className="w-4 h-4" /> J-News
          </button>
        </div>

        <div className="flex items-center gap-3 mb-8 flex-wrap">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800 hover:border-slate-600 text-slate-300 font-medium text-sm transition-all">
            <MapPin className="w-4 h-4 text-slate-400" /> Lokasi
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 hover:bg-slate-800 hover:border-slate-600 text-slate-300 font-medium text-sm transition-all">
            <Calendar className="w-4 h-4 text-slate-400" /> Bulan
          </button>
        </div>

        {/* Main Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <div key={`large-${event.id}`} className="rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer group bg-slate-900/60 border border-slate-700/50 hover:border-red-500/40 hover:shadow-xl hover:shadow-red-500/5">
              <Link to="/EventDetail" className="block">
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet-900/50 to-slate-800">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
                    <div className="inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold bg-violet-500/20 text-violet-300 border border-violet-500/30 text-xs">{event.category}</div>
                    <div className="inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/20 text-xs">{event.city}</div>
                  </div>
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    <div className="inline-flex items-center rounded-md px-2.5 py-0.5 font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/20 text-xs">Akan Datang</div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-3 group-hover:text-violet-400 transition-colors line-clamp-2 text-white">{event.title}</h3>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Calendar className="w-4 h-4 text-pink-400 flex-shrink-0" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="w-4 h-4 text-violet-400 flex-shrink-0" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <MapPin className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="px-4 pb-4 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <Ticket className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  {event.isFree ? (
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">🎉 GRATIS</span>
                  ) : (
                    <span className="text-sm font-semibold text-amber-300">{event.price}</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-1 text-xs font-semibold px-2.5 py-1.5 rounded-lg border bg-slate-800 border-slate-600 text-slate-400 hover:border-violet-500/60 hover:text-violet-300">
                    <Bell className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Ingatkan</span>
                  </button>
                  <button className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-red-700 hover:to-pink-700 shadow-md">
                    <ExternalLink className="w-3.5 h-3.5" /> Beli Tiket
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
