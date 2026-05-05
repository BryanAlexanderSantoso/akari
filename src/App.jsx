import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardNav from './components/CardNav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact';
import EventDetail from './pages/EventDetail';
import JNews from './pages/JNews';
import NewsDetail from './pages/NewsDetail';
import StaffLogin from './pages/StaffLogin';

function App() {
  const navItems = [
    {
      label: "Explore",
      bgColor: "#1e1b4b",
      textColor: "#fff",
      links: [
        { label: "Home", href: "/", ariaLabel: "Home Page" },
        { label: "JNews", href: "/JNews", ariaLabel: "J-News" },
      ]
    },
    {
      label: "About", 
      bgColor: "#4c1d95",
      textColor: "#fff",
      links: [
        { label: "Contact Us", href: "/Contact", ariaLabel: "Contact" },
        { label: "Staff Login", href: "/StaffLogin", ariaLabel: "Staff Login" }
      ]
    },
    {
      label: "Socials",
      bgColor: "#be185d", 
      textColor: "#fff",
      links: [
        { label: "Instagram", href: "https://instagram.com/akari_community", ariaLabel: "Instagram" },
        { label: "TikTok", href: "https://tiktok.com/@akarii_comunity", ariaLabel: "TikTok" }
      ]
    }
  ];

  return (
    <Router>
      <div className="app-container relative">
        <CardNav
          logo="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6993106ab76e254a518058d9/3e07bf9e0_JPeventInfo.png"
          logoAlt="Akari Project Logo"
          items={navItems}
          baseColor="rgba(15, 23, 42, 0.85)"
          menuColor="#fff"
          buttonBgColor="#e11d48"
          buttonTextColor="#fff"
          className="backdrop-blur-md"
        />
        <main className="main-content" style={{ minHeight: 'calc(100vh - 160px)', paddingTop: '100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/EventDetail" element={<EventDetail />} />
            <Route path="/JNews" element={<JNews />} />
            <Route path="/NewsDetail" element={<NewsDetail />} />
            <Route path="/StaffLogin" element={<StaffLogin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
