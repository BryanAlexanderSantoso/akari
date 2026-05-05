import { Phone, MessageCircle, ExternalLink, Mail, Send } from 'lucide-react';

const InstagramIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
    <path d="m10 15 5-3-5-3z"></path>
  </svg>
);

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 bg-red-500/10 border border-red-500/20">
            <Phone className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300">Hubungi Kami</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Kontak &amp; <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">Media Sosial</span>
          </h1>
          <p className="max-w-xl mx-auto leading-relaxed text-slate-400">
            Ada pertanyaan atau ingin berkolaborasi / partnership? Hubungi kami langsung lewat WhatsApp atau DM di akun media sosial kami. <span className="text-pink-400">Jangan lupa follow &amp; support akun-akun kami ya! 🙌</span>
          </p>
        </div>

        <div className="space-y-8">
          {/* WhatsApp Section */}
          <div>
            <h2 className="text-base font-semibold mb-3 flex items-center gap-2 text-white">
              <MessageCircle className="w-5 h-5 text-green-400" /> WhatsApp
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: 'Ridho Dwi Septiyan', phone: '+62 878-1124-1643', url: 'https://wa.me/6287811241643' },
                { name: 'Rezvan Zavier', phone: '+62 851-8330-8364', url: 'https://wa.me/6285183308364' },
                { name: 'Syarif Hidayatullah', phone: '+62 878-0984-8222', url: 'https://wa.me/6287809848222' },
                { name: 'Sanji / Kurisu', phone: '+62 815-4301-4046', url: 'https://wa.me/6281543014046' }
              ].map((contact, i) => (
                <a key={i} href={contact.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border hover:scale-[1.02] transition-transform group bg-green-500/10 border-green-500/20 hover:border-green-400/40">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-white">{contact.name}</p>
                    <p className="text-xs text-slate-400">{contact.phone}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 flex-shrink-0 transition-colors text-slate-600 group-hover:text-green-400" />
                </a>
              ))}
            </div>
          </div>

          {/* Instagram Section */}
          <div>
            <h2 className="text-base font-semibold mb-3 flex items-center gap-2 text-white">
              <InstagramIcon className="w-5 h-5 text-pink-400" /> Instagram
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { handle: '@akari_community', desc: 'Jakarta · Akun utama komunitas', url: 'https://instagram.com/akari_community' },
                { handle: '@akari__project', desc: 'Bandung · Akun dokumentasi & project', url: 'https://instagram.com/akari__project' }
              ].map((ig, i) => (
                <a key={i} href={ig.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border hover:scale-[1.02] transition-transform group bg-pink-500/10 border-pink-500/20 hover:border-pink-400/40">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                    <InstagramIcon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-white">{ig.handle}</p>
                    <p className="text-xs text-slate-400">{ig.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 flex-shrink-0 transition-colors text-slate-600 group-hover:text-pink-400" />
                </a>
              ))}
            </div>
          </div>

          {/* TikTok Section */}
          <div>
            <h2 className="text-base font-semibold mb-3 flex items-center gap-2 text-white">
              <span className="text-slate-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.22 8.22 0 0 0 4.81 1.54V6.82a4.85 4.85 0 0 1-1.04-.13z"></path></svg>
              </span>
              TikTok
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { handle: '@akarii_comunity', desc: 'Jakarta · Akun TikTok utama komunitas', url: 'https://tiktok.com/@akarii_comunity' },
                { handle: '@akari_projectid', desc: 'Bandung · Akun TikTok dokumentasi & project', url: 'https://tiktok.com/@akari_projectid' }
              ].map((tk, i) => (
                <a key={i} href={tk.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border hover:scale-[1.02] transition-transform group bg-slate-800/60 border-slate-700/50 hover:border-slate-500">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center shadow-lg flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.22 8.22 0 0 0 4.81 1.54V6.82a4.85 4.85 0 0 1-1.04-.13z"></path></svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-white">{tk.handle}</p>
                    <p className="text-xs text-slate-400">{tk.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 flex-shrink-0 transition-colors text-slate-600 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* YouTube Section */}
          <div>
            <h2 className="text-base font-semibold mb-3 flex items-center gap-2 text-white">
              <YoutubeIcon className="w-5 h-5 text-red-500" /> YouTube
            </h2>
            <a href="https://youtube.com/@AkariProjectID" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl border hover:scale-[1.02] transition-transform group max-w-sm bg-red-500/10 border-red-500/20 hover:border-red-400/40">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-lg flex-shrink-0">
                <YoutubeIcon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-white">AkariProjectID</p>
                <p className="text-xs text-slate-400">Channel YouTube resmi Akari Project</p>
              </div>
              <ExternalLink className="w-4 h-4 flex-shrink-0 transition-colors text-slate-600 group-hover:text-red-400" />
            </a>
          </div>

          {/* Email Section */}
          <div>
            <h2 className="text-base font-semibold mb-3 flex items-center gap-2 text-white">
              <Mail className="w-5 h-5 text-violet-400" /> Email Bisnis
            </h2>
            <a href="mailto:akari.project.id@gmail.com" className="inline-flex items-center gap-3 p-4 rounded-xl border hover:scale-[1.02] transition-transform group bg-violet-500/10 border-violet-500/20 hover:border-violet-400/40">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center shadow-lg flex-shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-sm text-white">akari.project.id@gmail.com</p>
                <p className="text-xs text-slate-400">Untuk keperluan bisnis &amp; partnership</p>
              </div>
            </a>
          </div>

          <div className="border-t border-slate-800"></div>

          {/* Contact Form */}
          <div>
            <h2 className="text-lg font-semibold mb-2 text-white">Kotak Saran &amp; Feedback</h2>
            <p className="text-sm mb-5 text-slate-400">Punya saran, kritik, atau laporan bug? Sampaikan di sini, kami akan membacanya!</p>
            <form className="rounded-2xl p-6 border space-y-4 bg-slate-900/50 border-slate-700/50" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm mb-1.5 block text-slate-400">Nama</label>
                  <input type="text" className="flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500" placeholder="Nama lengkap kamu" />
                </div>
                <div>
                  <label className="text-sm mb-1.5 block text-slate-400">Email</label>
                  <input type="email" className="flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500" placeholder="email@contoh.com" />
                </div>
              </div>
              <div>
                <label className="text-sm mb-1.5 block text-slate-400">Pesan / Saran</label>
                <textarea className="flex w-full rounded-md border px-3 py-2 text-base shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[120px] bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500" placeholder="Tulis saran, kritik, atau pertanyaan kamu di sini..."></textarea>
              </div>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-500 disabled:pointer-events-none disabled:opacity-50 shadow h-9 px-4 py-2 w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium border-0" type="submit">
                <Send className="w-4 h-4 mr-2" />
                Kirim Pesan
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
