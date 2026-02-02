
import React, { useState, useEffect, useRef } from 'react';
import { 
  Bell,
  TrendingUp,
  Users,
  Award,
  BookOpen,
  Headphones,
  Target,
  ChevronDown,
  History,
  X,
  User,
  Star,
  Target as TargetIcon,
  CircleCheck,
  ShieldCheck,
  TrendingUp as ProfitIcon,
  Gem,
  Ticket,
  UserPlus,
  ArrowRight,
  Building2,
  Globe,
  PieChart,
  Zap,
  Menu as MenuIcon,
  Wallet,
  Briefcase,
  Compass,
  Layers,
  BarChart3
} from 'lucide-react';

// --- Komponen Navigasi ---

const NavItem = ({ label, onClick }: { label: string, onClick?: () => void }) => (
  <button 
    onClick={onClick}
    className="px-4 py-3 md:py-2 transition-colors text-[0.65rem] tracking-[0.2em] uppercase font-bold text-black hover:text-[#A68948] text-left w-full md:w-auto"
  >
    {label}
  </button>
);

// --- Komponen Statistik (Social Proof) ---

const StatItem = ({ label, value, sub }: { label: string, value: string, sub: string }) => (
  <div className="text-center space-y-2 group p-4">
    <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#A68948] group-hover:text-black transition-colors">{label}</p>
    <h4 className="text-3xl md:text-5xl font-light brand-font">{value}</h4>
    <p className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-widest font-bold">{sub}</p>
  </div>
);

// --- Komponen Segmentasi Elit (Fitur Utama yang Diaktifkan) ---

const EliteSegmentCard = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) => (
  <div 
    onClick={onClick}
    className="group relative px-6 py-10 border border-gray-100 transition-all duration-700 hover:border-[#A68948] hover:bg-black overflow-hidden flex flex-col items-center justify-center space-y-6 cursor-pointer min-w-[200px] md:min-w-[240px] shadow-sm hover:shadow-2xl"
  >
    <div className="absolute top-0 left-0 w-full h-[1px] bg-[#A68948] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
    <div className="text-gray-300 group-hover:text-[#A68948] transition-all duration-700 transform group-hover:-translate-y-2">
      <Icon size={28} strokeWidth={1} />
    </div>
    <span className="text-[10px] md:text-[12px] font-light brand-font tracking-[0.35em] text-gray-500 group-hover:text-white transition-colors duration-700 uppercase text-center leading-relaxed">
      {label}
    </span>
    <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
      <ArrowRight size={14} className="text-[#A68948]" />
    </div>
    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[10px] border-r-[10px] border-transparent group-hover:border-r-[#A68948] group-hover:border-b-[#A68948] transition-all duration-700"></div>
  </div>
);

// --- Komponen Grid Menu ---

const MenuCard = ({ 
  icon: Icon, 
  title, 
  desc, 
  color, 
  onClick 
}: { 
  icon: any, 
  title: string, 
  desc: string, 
  color: string,
  onClick: () => void
}) => (
  <div 
    onClick={onClick}
    className="bg-white border-r border-b border-gray-100 p-6 md:p-10 transition-all group cursor-pointer flex flex-col items-center text-center space-y-4 md:space-y-6 hover:bg-gray-50/50"
  >
    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full text-white flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm" style={{ backgroundColor: color }}>
      <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
    </div>
    <div className="space-y-2 md:space-y-3">
      <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-black transition-colors">{title}</h4>
      <p className="text-[9px] md:text-[10px] text-gray-400 leading-relaxed font-light italic px-1 md:px-2">
        {desc}
      </p>
    </div>
  </div>
);

// --- Modal Detail Rinci ---

const FeatureDetail = ({ type, onClose }: { type: string, onClose: () => void }) => {
  const contentMap: Record<string, React.ReactNode> = {
    "Luxury Collectors": (
      <div className="space-y-8">
        <div className="bg-black text-white p-8 space-y-4 relative overflow-hidden">
          <Gem className="absolute -right-8 -bottom-8 opacity-10" size={160} />
          <h6 className="text-[10px] font-bold uppercase tracking-widest text-[#A68948]">Profil Kolektor</h6>
          <p className="text-[13px] font-light leading-relaxed relative z-10 italic">
            "Menghubungkan mitra dengan ekosistem individu ultra-high-net-worth yang menghargai kelangkaan dan sejarah di balik setiap produk Giorgio Armani."
          </p>
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold uppercase tracking-widest">Tujuan Strategis:</h4>
            <ul className="text-[12px] text-gray-500 space-y-3">
              <li className="flex gap-4"><div className="w-1.5 h-1.5 bg-[#A68948] mt-1.5 shrink-0"></div> Penetrasi ke pasar aset alternatif bernilai tinggi (rare collections).</li>
              <li className="flex gap-4"><div className="w-1.5 h-1.5 bg-[#A68948] mt-1.5 shrink-0"></div> Memfasilitasi akses eksklusif untuk 'Limited Edition Archive' bagi anggota VIP.</li>
              <li className="flex gap-4"><div className="w-1.5 h-1.5 bg-[#A68948] mt-1.5 shrink-0"></div> Pengembangan komunitas kurasi digital bagi kolektor regional.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    "Financial Advisors": (
      <div className="space-y-8">
        <div className="border-l-4 border-black pl-8 space-y-4">
          <p className="text-[14px] leading-relaxed text-gray-600 font-light">
            Sektor ini dirancang untuk profesional yang mengelola portofolio gaya hidup klien elit, di mana Giorgio Armani dipandang sebagai investasi estetika jangka panjang.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 space-y-2">
            <span className="text-[9px] font-bold text-[#A68948] uppercase tracking-widest">Alokasi Lifestyle</span>
            <p className="text-[11px] text-gray-500 leading-relaxed">Integrasi belanja mewah ke dalam perencanaan keuangan tahunan keluarga elit.</p>
          </div>
          <div className="bg-gray-50 p-6 space-y-2">
            <span className="text-[9px] font-bold text-[#A68948] uppercase tracking-widest">Advisory Benefits</span>
            <p className="text-[11px] text-gray-500 leading-relaxed">Insentif khusus bagi advisor yang berhasil menjaga retensi loyalitas brand pada klien mereka.</p>
          </div>
        </div>
      </div>
    ),
    "Digital Entrepreneurs": (
      <div className="space-y-8">
        <div className="bg-gray-50 p-10 flex flex-col items-center text-center space-y-4">
          <Zap className="text-[#A68948]" size={32} />
          <h6 className="text-[11px] font-bold uppercase tracking-widest">The Innovators</h6>
          <p className="text-[12px] text-gray-500 leading-relaxed italic">
            "Membangun jembatan antara teknologi digital masa depan dan warisan kemewahan tradisional."
          </p>
        </div>
        <div className="space-y-4">
          <h4 className="text-[11px] font-bold uppercase tracking-widest">Fokus Utama:</h4>
          <div className="space-y-2">
            {['Optimasi Kampanye Social-Commerce', 'Penggunaan AI untuk Personalisasi Belanja Mewah', 'Leading Digital Presence Global Partner'].map(item => (
              <div key={item} className="p-4 border border-gray-100 flex justify-between items-center group hover:border-[#A68948] transition-all">
                <span className="text-[11px] font-medium text-gray-600">{item}</span>
                <ChevronDown className="-rotate-90 text-gray-300 group-hover:text-[#A68948] transition-colors" size={14} />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    "Estate Managers": (
      <div className="space-y-8">
        <div className="flex gap-6 items-start">
          <Building2 className="text-gray-400 shrink-0" size={40} strokeWidth={1} />
          <div className="space-y-2">
            <h6 className="text-[12px] font-bold uppercase tracking-widest">Curated Living Spaces</h6>
            <p className="text-[12px] text-gray-500 leading-relaxed">
              Program ini ditujukan bagi manajer properti mewah untuk mengintegrasikan Armani/Casa ke dalam residensi elit melalui jaringan mitra.
            </p>
          </div>
        </div>
        <div className="p-8 border-y border-gray-100 grid grid-cols-2 gap-8">
           <div className="text-center space-y-1">
              <p className="text-2xl brand-font">40%</p>
              <p className="text-[8px] uppercase tracking-widest font-bold text-gray-400">Project Commission</p>
           </div>
           <div className="text-center space-y-1">
              <p className="text-2xl brand-font">15%</p>
              <p className="text-[8px] uppercase tracking-widest font-bold text-gray-400">Maintenance Rebate</p>
           </div>
        </div>
      </div>
    ),
    "Portfolio Holders": (
      <div className="space-y-8">
        <div className="relative h-48 bg-black">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 grayscale" alt="Portfolio" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-2">
             <BarChart3 size={32} className="text-[#A68948]" />
             <span className="text-[10px] font-bold uppercase tracking-[0.4em]">Equity & Growth</span>
          </div>
        </div>
        <div className="space-y-4">
           <p className="text-[13px] text-gray-600 leading-loose">
             Mitra yang memiliki orientasi pertumbuhan jangka panjang melalui akumulasi poin prestasi (Performance Points) yang dapat dikonversi menjadi kepemilikan unit bisnis strategis di regional tertentu.
           </p>
           <button className="w-full py-4 border border-black text-[10px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              Pelajari Struktur Dividen
           </button>
        </div>
      </div>
    ),
    "Pusat Tugas": (
      <div className="space-y-6 md:space-y-8">
        <div className="border-l-2 border-black pl-4 md:pl-6 space-y-4">
          <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-600">
            Pusat Tugas adalah inti dari operasional harian mitra. Giorgio Armani menerapkan filosofi <span className="text-black font-bold italic">"Quality over Quantity"</span>.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="bg-gray-50 p-5 md:p-6 space-y-3">
            <h6 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#A68948]">Mekanisme Alokasi</h6>
            <p className="text-[10px] md:text-[11px] text-gray-500 leading-loose">
              Tugas didistribusikan secara otomatis melalui algoritma cloud kami, mencakup optimasi SEO dan engagement kampanye visual.
            </p>
          </div>
          <div className="bg-gray-50 p-5 md:p-6 space-y-3">
            <h6 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#A68948]">Stabilitas Ekosistem</h6>
            <p className="text-[10px] md:text-[11px] text-gray-500 leading-loose">
              Pembatasan maksimal 5 aktivitas per hari memastikan integritas data promosi dan mencegah saturasi pasar.
            </p>
          </div>
        </div>
      </div>
    ),
    "Alokasi Profit": (
      <div className="space-y-6 md:space-y-8">
        <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-600">
          Sistem pembagian keuntungan yang transparan dan dinamis, mencerminkan kontribusi nyata mitra terhadap pertumbuhan brand digital.
        </p>
        <div className="space-y-2 md:space-y-4">
          {[
            { label: "Partner Level 1", val: "30% Alokasi" },
            { label: "Senior Partner", val: "40% Alokasi" },
            { label: "Executive Partner", val: "50% Alokasi" }
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 md:p-4 border-b">
              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{item.label}</span>
              <span className="text-[10px] md:text-[11px] font-bold text-green-600">{item.val}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    "Riwayat": (
      <div className="space-y-6">
        <div className="bg-black text-white p-6 md:p-8 space-y-4">
          <h6 className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#A68948]">Transparansi Ledger</h6>
          <p className="text-[11px] md:text-[12px] font-light leading-relaxed">
            Setiap transaksi dienkripsi dan dicatat secara real-time. Anda memiliki akses penuh ke audit log 24/7.
          </p>
        </div>
      </div>
    ),
    "Tim Saya": (
      <div className="space-y-6 md:space-y-8">
        <p className="text-[13px] md:text-[14px] leading-relaxed text-gray-600 italic">
          "Success is best when shared."
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="border p-4 md:p-6 text-center space-y-2">
            <span className="text-xl md:text-2xl font-light brand-font">Mentorship</span>
            <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-400">Bimbingan Langsung</p>
          </div>
          <div className="border p-4 md:p-6 text-center space-y-2">
            <span className="text-xl md:text-2xl font-light brand-font">Residual</span>
            <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-gray-400">Insentif Kolaborasi</p>
          </div>
        </div>
      </div>
    ),
    "Leaderboard": (
      <div className="space-y-8">
        <div className="flex items-center space-x-6">
          <Award className="w-10 h-10 md:w-12 md:h-12 text-[#F2994A]" strokeWidth={1} />
          <div>
            <h6 className="text-[11px] md:text-[12px] font-bold uppercase tracking-widest">Puncak Performa</h6>
            <p className="text-[10px] md:text-[11px] text-gray-500">Apresiasi bagi mitra dengan dedikasi luar biasa.</p>
          </div>
        </div>
      </div>
    ),
    "Armani Academy": (
      <div className="space-y-6 md:space-y-8">
        <div className="relative h-32 md:h-40 bg-gray-200">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale opacity-60" alt="Academy" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-white/90 px-4 md:px-6 py-2 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.5em]">Classroom 2026</span>
          </div>
        </div>
      </div>
    ),
    "Bantuan": (
      <div className="space-y-6 md:space-y-8">
        <div className="flex items-center space-x-4 md:space-x-6 text-[#EB5757]">
          <Headphones className="w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
          <h6 className="text-lg md:text-xl brand-font">Dukungan Prioritas</h6>
        </div>
        <p className="text-[11px] md:text-[12px] text-gray-500 leading-relaxed font-light">
          Kami menjamin waktu respon di bawah 15 menit untuk kendala operasional mendesak bagi semua mitra aktif.
        </p>
      </div>
    ),
    "Akses VIP": (
      <div className="space-y-6 md:space-y-8">
        <div className="flex items-center space-x-4 md:space-x-6">
           <Gem className="text-[#A68948] w-8 h-8 md:w-10 md:h-10" strokeWidth={1} />
           <h6 className="text-lg md:text-xl brand-font uppercase tracking-widest">Prestige Rewards</h6>
        </div>
      </div>
    )
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-none shadow-2xl overflow-hidden animate-slideUp">
        <div className="flex justify-between items-center p-6 md:p-10 border-b border-gray-100">
          <div className="space-y-1 md:space-y-2">
             <h4 className="text-[12px] md:text-[14px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-black">{type}</h4>
             <div className="h-[2px] w-6 md:w-8 bg-[#A68948]"></div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 transition-colors">
            <X className="w-5 h-5 md:w-6 md:h-6 text-black" />
          </button>
        </div>
        <div className="p-6 md:p-12 overflow-y-auto max-h-[60vh] md:max-h-[70vh]">
          {contentMap[type] || <p>Konten sedang dikembangkan.</p>}
        </div>
        <div className="bg-gray-50 p-6 md:p-8 flex justify-end items-center border-t border-gray-100">
           <p className="text-[8px] md:text-[9px] text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.4em] font-bold text-right">Elegance is the only beauty that never fades.</p>
        </div>
      </div>
    </div>
  );
};

// --- Komponen Utama App ---

const App: React.FC = () => {
  const [simValue, setSimValue] = useState(1000000); 
  const [profitRate, setProfitRate] = useState(35);
  const [notification, setNotification] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const prospectRef = useRef<HTMLElement>(null);
  const calculatorRef = useRef<HTMLElement>(null);
  const modulesRef = useRef<HTMLElement>(null);
  const registrationRef = useRef<HTMLElement>(null);
  const visionRef = useRef<HTMLElement>(null);
  const communityRef = useRef<HTMLElement>(null);

  const dailyProfit = simValue * (profitRate / 100);
  const monthlyProfit = dailyProfit * 30;

  // Tautan pendaftaran resmi
  const REGISTRATION_URL = 'https://giorgio-armani.replit.app/';
  // URL Gambar butik Armani dari user
  const NEW_BRAND_IMAGE = 'https://i.pinimg.com/736x/aa/81/58/aa8158dbf7f009e6bcf7fc6c2d379544.jpg';
  // URL Gambar VISI & MISI dari user
  const VISION_BG_IMAGE = 'https://wwd.com/wp-content/uploads/2025/11/01_d1af6f.jpg?w=1000&h=563&crop=1';

  // Memperbaiki tipe pada React.RefObject untuk mendukung HTMLElement | null
  const scrollToSection = (ref: React.RefObject<HTMLElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  // Fungsi baru untuk menangani pendaftaran eksternal
  const handleRegistration = () => {
    window.location.href = REGISTRATION_URL;
  };

  useEffect(() => {
    const names = ["Andi S.", "Budi W.", "Citra K.", "Dewi A.", "Eko P.", "Farah L."];
    const interval = setInterval(() => {
      const name = names[Math.floor(Math.random() * names.length)];
      setNotification(`Partner Baru: ${name} telah bergabung.`);
      setTimeout(() => setNotification(null), 5000);
    }, 25000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-[#A68948] selection:text-white font-sans text-black overflow-x-hidden">
      {/* Modal Active */}
      {activeModal && <FeatureDetail type={activeModal} onClose={() => setActiveModal(null)} />}

      {/* Notifikasi Floating */}
      {notification && (
        <div className="fixed bottom-6 right-6 left-6 md:left-auto md:w-auto z-[90] bg-white shadow-2xl border border-gray-100 p-4 md:p-6 flex items-center space-x-4 md:space-x-6 animate-fadeInUp">
          <div className="bg-[#A68948] rounded-full p-2 md:p-3 flex items-center justify-center text-white shrink-0">
            <Bell className="w-4 h-4 md:w-[18px] md:h-[18px]" />
          </div>
          <div className="text-[10px] md:text-[11px] font-bold text-black uppercase tracking-widest">{notification}</div>
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-50 h-20 flex items-center shadow-sm px-4 md:px-0">
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 w-full flex justify-between items-center">
          <div className="cursor-pointer flex flex-col items-start" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="text-lg md:text-xl font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase brand-font leading-none">GIORGIO ARMANI</div>
            <div className="text-[6px] md:text-[7px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-[#A68948] mt-0.5">Indonesia Partner Program</div>
          </div>
          
          <nav className="hidden lg:flex items-center space-x-1">
            <NavItem label="Tentang" onClick={() => scrollToSection(prospectRef)} />
            <NavItem label="Visi & Misi" onClick={() => scrollToSection(visionRef)} />
            <NavItem label="Komunitas" onClick={() => scrollToSection(communityRef)} />
            <NavItem label="Menu" onClick={() => scrollToSection(modulesRef)} />
            <NavItem label="Registrasi" onClick={handleRegistration} />
            <NavItem label="Simulasi" onClick={() => scrollToSection(calculatorRef)} />
            <div className="pl-4">
              <button 
                onClick={handleRegistration}
                className="px-6 py-2.5 bg-black text-white text-[0.6rem] font-bold uppercase tracking-[0.2em] hover:bg-[#A68948] transition-all"
              >
                Buat Akun
              </button>
            </div>
          </nav>

          <button 
            className="lg:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-fadeIn p-6 space-y-2 z-50">
            <NavItem label="Tentang" onClick={() => scrollToSection(prospectRef)} />
            <NavItem label="Visi & Misi" onClick={() => scrollToSection(visionRef)} />
            <NavItem label="Komunitas" onClick={() => scrollToSection(communityRef)} />
            <NavItem label="Menu" onClick={() => scrollToSection(modulesRef)} />
            <NavItem label="Registrasi" onClick={handleRegistration} />
            <NavItem label="Simulasi" onClick={() => scrollToSection(calculatorRef)} />
            <button 
              onClick={handleRegistration}
              className="w-full py-4 bg-black text-white text-[0.7rem] font-bold uppercase tracking-[0.3em]"
            >
              Buat Akun Sekarang
            </button>
          </div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-[85vh] md:h-[95vh] flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={NEW_BRAND_IMAGE} 
              className="w-full h-full object-cover opacity-60 transition-all duration-1000 scale-105" 
              alt="Giorgio Armani Background" 
            />
          </div>
          <div className="relative z-10 max-w-5xl px-6 md:px-10 text-center text-white animate-fadeInUp">
            {/* Area Teks Utama dengan Latar Belakang Logo Transparan */}
            <div className="relative py-16 md:py-24 lg:py-32 backdrop-blur-[2px] bg-black/20 border border-white/5">
                <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
                    <img 
                      src={NEW_BRAND_IMAGE} 
                      className="w-[150%] h-full object-contain brightness-0 invert" 
                      alt="Watermark Logo" 
                    />
                </div>
                
                <div className="relative z-10 space-y-6 md:space-y-12">
                    <div className="space-y-4 md:space-y-6">
                        <div className="text-[8px] md:text-[9px] font-bold uppercase tracking-[0.6em] md:tracking-[1.2em] text-[#A68948]">Official Business Prospectus 2026</div>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-[0.05em] md:tracking-[0.1em] brand-font leading-tight drop-shadow-2xl">
                        ELEGANCE <br/> <span className="italic font-light">REDEFINED</span>
                        </h1>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-8 md:space-y-10">
                        <div className="h-[1px] w-16 md:w-32 bg-[#A68948]"></div>
                        <p className="text-[10px] md:text-[12px] uppercase tracking-[0.4em] md:tracking-[0.8em] font-light max-w-3xl mx-auto opacity-95 leading-relaxed italic drop-shadow-lg">
                            Platform Kemitraan Digital Terverifikasi Eksklusif Indonesia.
                        </p>
                        <div className="flex space-x-10 md:space-x-16 opacity-90">
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl brand-font">12K+</p>
                                <p className="text-[6px] md:text-[7px] uppercase tracking-widest font-bold text-[#A68948]">Partners Joined</p>
                            </div>
                            <div className="text-center">
                                <p className="text-2xl md:text-3xl brand-font">98%</p>
                                <p className="text-[6px] md:text-[7px] uppercase tracking-widest font-bold text-[#A68948]">Growth Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pt-8 md:pt-14">
               <button 
                onClick={() => scrollToSection(prospectRef)}
                className="group flex flex-col items-center space-y-5 mx-auto"
               >
                 <span className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] md:tracking-[0.5em] font-bold text-gray-300 group-hover:text-white transition-colors">Discover the Prospectus</span>
                 <ChevronDown className="w-5 h-5 md:w-8 md:h-8 animate-bounce opacity-40 group-hover:opacity-100 transition-opacity" />
               </button>
            </div>
          </div>
        </section>

        {/* Section: VISI & MISI */}
        <section ref={visionRef} className="py-20 md:py-32 px-6 md:px-10 bg-black text-white overflow-hidden relative">
            <div className="absolute inset-0 z-0">
                <img 
                    src={VISION_BG_IMAGE} 
                    className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 scale-105" 
                    alt="Visi & Misi Background" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>
            
            <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-5 lg:opacity-10 pointer-events-none z-10">
                <Globe size={600} strokeWidth={0.2} className="text-[#A68948]" />
            </div>
            
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-20">
                <div className="space-y-8 md:space-y-12 relative z-10">
                    <div className="space-y-4">
                        <div className="inline-block bg-[#A68948]/20 backdrop-blur-md px-4 py-2 border-l-4 border-[#A68948]">
                            <span className="text-[10px] md:text-[11px] font-bold text-[#A68948] uppercase tracking-[0.4em] md:tracking-[0.5em]">OUR PHILOSOPHY</span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-light brand-font uppercase tracking-tight leading-none drop-shadow-xl">VISI <br/> & MISI</h2>
                    </div>
                    
                    <div className="space-y-8 md:space-y-10">
                        <div className="space-y-3">
                            <h4 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#A68948]">Visi</h4>
                            <p className="text-lg md:text-2xl font-light leading-relaxed italic opacity-90 drop-shadow-md">
                                "Menjadi platform kemitraan digital nomor satu di Indonesia yang menyatukan nilai kemewahan dengan inovasi ekonomi masa depan."
                            </p>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <h4 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#A68948]">Misi Kami</h4>
                            <ul className="space-y-4 md:space-y-6">
                                {[
                                  { icon: Target, text: "Memberdayakan mitra melalui sistem alokasi profit yang transparan." },
                                  { icon: ShieldCheck, text: "Menjaga standar integritas brand Giorgio Armani di setiap interaksi digital." },
                                  { icon: Users, text: "Membangun komunitas profesional dengan visi pertumbuhan finansial global." }
                                ].map((item, idx) => (
                                  <li key={idx} className="flex gap-4 md:gap-6 items-start group">
                                    <div className="mt-1 shrink-0 p-1 bg-[#A68948]/10 rounded-full group-hover:bg-[#A68948]/30 transition-colors">
                                      <item.icon className="w-[18px] h-[18px] md:w-5 md:h-5 text-[#A68948]" />
                                    </div>
                                    <p className="text-[11px] md:text-[13px] font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity uppercase tracking-widest">{item.text}</p>
                                  </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="relative mt-8 lg:mt-0">
                    <div className="aspect-[4/5] border border-white/10 p-2 md:p-4 bg-white/5 backdrop-blur-sm shadow-2xl">
                        <img 
                            src="https://assets-cf.armani.com/image/upload/f_auto,q_auto,ar_16:9,w_1125,c_lfill/GA-Cross-All-Gift-01-16-9" 
                            className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:grayscale-0 shadow-inner"
                            alt="Giorgio Armani Vision Content"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-[#A68948] text-black p-6 md:p-12 hidden sm:block shadow-2xl ring-4 ring-black/50">
                        <p className="text-3xl md:text-4xl brand-font">100%</p>
                        <p className="text-[7px] md:text-[8px] font-bold uppercase tracking-widest">Verified Integrity</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Section: KOMUNITAS MITRA (Social Proof & Elite Segments) */}
        <section ref={communityRef} className="py-20 md:py-32 px-6 md:px-10 bg-white">
            <div className="max-w-[1200px] mx-auto space-y-16 md:space-y-24">
                <div className="text-center space-y-4">
                    <h3 className="text-[10px] md:text-[12px] font-bold uppercase tracking-[0.6em] md:tracking-[0.8em] text-black">TRUSTED COMMUNITY</h3>
                    <div className="h-[2px] w-10 md:w-12 bg-[#A68948] mx-auto"></div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-20">
                    <StatItem label="Active Members" value="12,458+" sub="INDONESIA WIDE" />
                    <StatItem label="Profit Distributed" value="Rp 580M+" sub="TOTAL PAYOUTS" />
                    <StatItem label="Daily Activity" value="65K+" sub="PROMOTION TASKS" />
                    <StatItem label="Success Rate" value="99.2%" sub="VERIFIED PARTNERS" />
                </div>

                <div className="space-y-12 md:space-y-16">
                    <div className="text-center space-y-3">
                        <p className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400 font-bold">SEGMENTASI MITRA ELIT KAMI</p>
                        <p className="text-[11px] md:text-[13px] font-light text-gray-400 italic">Klik pada segmen untuk mempelajari strategi kemitraan khusus.</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                        <EliteSegmentCard icon={Gem} label="Luxury Collectors" onClick={() => setActiveModal("Luxury Collectors")} />
                        <EliteSegmentCard icon={PieChart} label="Financial Advisors" onClick={() => setActiveModal("Financial Advisors")} />
                        <EliteSegmentCard icon={Zap} label="Digital Entrepreneurs" onClick={() => setActiveModal("Digital Entrepreneurs")} />
                        <EliteSegmentCard icon={Building2} label="Estate Managers" onClick={() => setActiveModal("Estate Managers")} />
                        <EliteSegmentCard icon={Briefcase} label="Portfolio Holders" onClick={() => setActiveModal("Portfolio Holders")} />
                    </div>
                </div>
            </div>
        </section>

        {/* Section: Tujuan Akun Bermitra */}
        <section ref={prospectRef} className="py-16 md:py-24 px-6 md:px-10 bg-[#FAFAFA]">
           <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-8 md:space-y-10">
                 <div className="space-y-3">
                    <span className="text-[10px] md:text-[11px] font-bold text-[#A68948] uppercase tracking-[0.4em] md:tracking-[0.5em]">CORE PURPOSE</span>
                    <h2 className="text-3xl md:text-6xl font-light brand-font uppercase tracking-tight leading-[1.1] md:leading-[0.9]">TUJUAN <br/> KEMITRAAN</h2>
                 </div>
                 <p className="text-md md:text-lg text-gray-400 font-light leading-relaxed border-l-4 border-black pl-5 md:pl-6 italic">
                   "Membangun identitas digital profesional dalam ekosistem luxury brand yang paling prestisius."
                 </p>
                 <div className="space-y-6 text-gray-500 font-light text-[13px] md:text-[14px] leading-loose text-justify">
                    <p>
                       Pembuatan akun mitra adalah langkah pertama untuk mengonsolidasikan aktivitas promosi dan distribusi profit dalam satu dasbor aman yang terverifikasi.
                    </p>
                    <div className="p-5 md:p-6 bg-white shadow-sm border-r-4 border-black">
                       <p className="text-[11px] md:text-[12px] text-black font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                          <Building2 size={16} /> Operational Governance
                       </p>
                       <p className="text-[12px] md:text-[13px] text-gray-600 leading-relaxed">
                          Dikelola secara eksklusif di bawah <strong>PT Kurnia Ciptamoda Gemilang (KCG)</strong> sebagai mitra strategis Giorgio Armani di Indonesia.
                       </p>
                    </div>
                 </div>
              </div>
              <div className="relative group mt-8 lg:mt-0">
                 <img 
                    src="https://images.unsplash.com/photo-1549439602-43ebca2327af?auto=format&fit=crop&q=80&w=800" 
                    className="w-full grayscale transition-all duration-1000 group-hover:grayscale-0 shadow-xl" 
                    alt="Armani Suit" 
                 />
                 <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-black text-white p-6 md:p-8 text-center space-y-1 md:space-y-2 hidden sm:block">
                    <div className="text-xl md:text-2xl font-bold brand-font">VIP</div>
                    <div className="text-[7px] md:text-[8px] uppercase tracking-widest font-bold text-[#A68948]">Access Only</div>
                 </div>
              </div>
           </div>
        </section>

        {/* Section: Mekanisme Partisipasi */}
        <section ref={registrationRef} className="py-16 md:py-24 px-6 md:px-10 bg-white border-y border-gray-50">
           <div className="max-w-[1200px] mx-auto space-y-12 md:space-y-16">
              <div className="text-center space-y-4">
                 <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] md:tracking-[0.7em] text-black">LANGKAH MEMULAI</h3>
                 <div className="h-[1px] w-16 md:w-20 bg-gray-200 mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                 {[
                   { n: "01", t: "Registrasi Akun", d: "Daftarkan data diri resmi untuk mendapatkan ID Kemitraan eksklusif." },
                   { n: "02", t: "Aktivasi & Verifikasi", d: "Sistem verifikasi keamanan memastikan integritas dompet profit setiap mitra." },
                   { n: "03", t: "Mulai Operasional", d: "Akses penuh ke Pusat Tugas dan mulai kumpulkan alokasi profit secara instan." }
                 ].map((step, idx) => (
                   <div key={idx} className="space-y-4 md:space-y-5 text-center px-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-black text-white rounded-full flex items-center justify-center mx-auto text-lg md:text-xl font-light brand-font">{step.n}</div>
                      <h5 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{step.t}</h5>
                      <p className="text-[9px] md:text-[10px] text-gray-400 font-light leading-relaxed italic">{step.d}</p>
                   </div>
                 ))}
              </div>
              <div className="text-center pt-4 md:pt-6">
                 <button 
                  onClick={handleRegistration}
                  className="w-full md:w-auto px-10 md:px-16 py-4 bg-black text-white text-[9px] font-bold uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-[#A68948] transition-all shadow-lg"
                 >
                    Buat Akun Sekarang <ArrowRight className="inline-block ml-3" size={12} />
                 </button>
              </div>
           </div>
        </section>

        {/* Section: MENU UTAMA */}
        <section ref={modulesRef} className="py-16 md:py-24 px-4 md:px-10 bg-[#FAFAFA]">
          <div className="max-w-[1200px] mx-auto">
            <div className="mb-12 md:mb-16 text-center">
              <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.6em] md:tracking-[0.7em] text-gray-400 mb-4">
                EKOSISTEM LAYANAN MITRA
              </h3>
              <div className="h-[1px] w-16 md:w-20 bg-gray-100 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l border-t border-gray-100">
              <MenuCard icon={TargetIcon} title="Pusat Tugas" desc="Mekanisme alokasi tugas harian maksimal 5 aktivitas per hari." color="#8C7A5B" onClick={() => setActiveModal("Pusat Tugas")} />
              <MenuCard icon={ProfitIcon} title="Alokasi Profit" desc="Sistem bagi hasil dinamis dengan rentang 30% hingga 50%." color="#27AE60" onClick={() => setActiveModal("Alokasi Profit")} />
              <MenuCard icon={History} title="Riwayat" desc="Pencatatan aktivitas promosi yang transparan dalam dasbor personal." color="#2D9CDB" onClick={() => setActiveModal("Riwayat")} />
              <MenuCard icon={Users} title="Tim Saya" desc="Program kemitraan berjenjang dengan skema insentif kolaborasi." color="#9B51E0" onClick={() => setActiveModal("Tim Saya")} />
              <MenuCard icon={Award} title="Leaderboard" desc="Apresiasi bagi mitra dengan performa konsistensi tertinggi." color="#F2994A" onClick={() => setActiveModal("Leaderboard")} />
              <MenuCard icon={BookOpen} title="Armani Academy" desc="Modul pelatihan etika brand kemewahan dan strategi digital." color="#4F4F4F" onClick={() => setActiveModal("Armani Academy")} />
              <MenuCard icon={Headphones} title="Bantuan" desc="Dukungan teknis langsung oleh Regional Manager khusus Indonesia." color="#EB5757" onClick={() => setActiveModal("Bantuan")} />
              <MenuCard icon={Star} title="Akses VIP" desc="Undangan eksklusif ke peragaan busana global Armani." color="#333333" onClick={() => setActiveModal("Akses VIP")} />
            </div>
          </div>
        </section>

        {/* Section: Simulasi */}
        <section ref={calculatorRef} className="py-16 md:py-24 px-6 md:px-10 bg-white">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
             <div className="space-y-8 md:space-y-10">
                <div className="space-y-3">
                   <span className="text-[10px] md:text-[11px] font-bold text-[#A68948] uppercase tracking-[0.4em] md:tracking-[0.5em]">SIMULATION TOOLS</span>
                   <h2 className="text-3xl md:text-6xl font-light brand-font uppercase tracking-tight leading-[1.1] md:leading-[0.9]">HITUNG <br/> POTENSI</h2>
                </div>
                <p className="text-md md:text-lg text-gray-400 font-light leading-relaxed">
                   Visualisasikan pertumbuhan bisnis Anda secara transparan. Atur alokasi profit harian Anda.
                </p>
                <div className="bg-gray-50 p-6 md:p-8 shadow-sm border-l-4 border-black">
                   <p className="text-[10px] md:text-[11px] text-gray-500 font-light leading-relaxed italic">
                     "Investasi pada brand mewah bukan hanya tentang uang, tapi tentang kualitas dedikasi Anda."
                   </p>
                </div>
             </div>

             <div className="bg-white p-6 md:p-12 shadow-2xl space-y-8 md:space-y-10 border border-gray-100 relative">
                <div className="absolute top-4 right-4"><Zap size={20} className="text-[#A68948] opacity-20" /></div>
                <div className="space-y-6 md:space-y-8">
                   <div className="space-y-4 md:space-y-5">
                      <div className="flex justify-between items-end mb-1">
                         <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-gray-400">ALOKASI PROFIT (%)</span>
                         <span className="text-[12px] md:text-[13px] font-bold text-black">{profitRate}%</span>
                      </div>
                      <div className="flex gap-2">
                         {[30, 40, 50].map((rate) => (
                           <button 
                             key={rate} 
                             onClick={() => setProfitRate(rate)} 
                             className={`flex-1 py-2 md:py-2.5 text-[8px] md:text-[9px] font-bold transition-all border ${profitRate === rate ? 'bg-black border-black text-white' : 'bg-transparent border-gray-100 text-gray-400 hover:border-black'}`}
                           >
                             {rate}%
                           </button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-4 md:space-y-5">
                      <div className="flex justify-between items-end mb-1">
                         <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-gray-400">MODAL HARIAN</span>
                         <span className="text-[12px] md:text-[13px] font-bold text-black">Rp {simValue.toLocaleString('id-ID')}</span>
                      </div>
                      <input 
                        type="range" 
                        min="1000000" 
                        max="50000000" 
                        step="1000000" 
                        value={simValue} 
                        onChange={(e) => setSimValue(Number(e.target.value))} 
                        className="w-full accent-black h-1 bg-gray-100 appearance-none cursor-pointer" 
                      />
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-6 border-t pt-6 md:pt-8">
                   <div className="space-y-1">
                      <p className="text-[7px] md:text-[8px] text-gray-400 uppercase tracking-widest font-bold">HASIL HARIAN</p>
                      <p className="text-lg md:text-xl font-bold tracking-tight text-black">Rp {dailyProfit.toLocaleString('id-ID')}</p>
                   </div>
                   <div className="space-y-1 text-right">
                      <p className="text-[7px] md:text-[8px] text-gray-400 uppercase tracking-widest font-bold">HASIL BULANAN</p>
                      <p className="text-lg md:text-xl font-bold text-[#A68948] tracking-tight">Rp {monthlyProfit.toLocaleString('id-ID')}</p>
                   </div>
                </div>
                <button 
                  onClick={handleRegistration}
                  className="w-full bg-black text-white py-3 md:py-4 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] md:tracking-[0.35em] hover:bg-[#A68948] transition-all"
                >
                  Mulai Sekarang (Registrasi Akun)
                </button>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-16 md:py-24 px-6 md:px-10 border-t border-gray-50">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <div className="space-y-4 md:space-y-6">
            <div className="text-xl md:text-2xl font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase brand-font">GIORGIO ARMANI</div>
            <p className="text-[11px] md:text-[12px] text-gray-400 leading-relaxed font-light italic">
               "Elegance is the only beauty that never fades."
            </p>
            <div className="pt-2 md:pt-4">
               <p className="text-[9px] md:text-[10px] text-gray-300 uppercase tracking-widest font-bold">Operated by KCG Group Indonesia</p>
            </div>
          </div>
          <div className="space-y-4 md:space-y-6 text-left md:text-right">
            <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-black">Head Office</h4>
            <div className="space-y-1 md:space-y-2">
              <p className="text-[12px] md:text-[14px] text-gray-600 font-bold uppercase tracking-widest leading-normal">
                 PT Kurnia Ciptamoda Gemilang (KCG)
              </p>
              <p className="text-[11px] md:text-[13px] text-gray-500 font-medium tracking-wide leading-relaxed">
                 Jl. Buntu No. 40, Kebayoran Lama<br/>
                 Jakarta Selatan, 12220
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1400px] mx-auto mt-12 md:mt-20 pt-6 md:pt-8 border-t border-gray-50 text-center">
           <p className="text-[8px] md:text-[9px] text-gray-300 uppercase tracking-[0.4em] md:tracking-[0.6em] font-bold">© 2026 GIORGIO ARMANI S.P.A. & PT KCG - ALL RIGHTS RESERVED</p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        
        .animate-fadeInUp { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 0.4s ease forwards; }
        .animate-slideUp { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        
        .brand-font { font-family: 'Playfair Display', serif; }
        
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 12px; width: 12px; border-radius: 50%;
          background: #000; cursor: pointer; border: 2px solid #000;
        }

        @media (max-width: 640px) {
          h1 { font-size: 2.5rem !important; }
        }
      `}} />
    </div>
  );
};

export default App;
