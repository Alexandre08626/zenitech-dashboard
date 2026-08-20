'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Sparkles,
  Crown,
  Shield,
  TrendingUp,
  Users,
  Building2,
  Zap,
  Globe,
  ChevronRight,
  Star,
  Activity,
  Play,
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  CheckCircle2,
} from 'lucide-react';

// Animated counter component
const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const projects = [
  { 
    id: 1,
    name: 'Isolation Éco+', 
    desc: 'Réduction 35% sur vos factures',
    icon: Shield, 
    gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    stat: '2,500+',
    statLabel: 'Projets',
    image: 'https://images.pexels.com/photos/6124239/pexels-photo-6124239.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://zenicorp-isolation.vercel.app'
  },
  { 
    id: 2,
    name: 'Toiture Premium', 
    desc: 'Garantie 25 ans incluse',
    icon: Building2, 
    gradient: 'from-amber-400 via-orange-400 to-red-400',
    bg: 'bg-amber-500/10',
    border: 'border-amber-500/20',
    stat: '15+',
    statLabel: 'Ans expertise',
    image: 'https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://zenicorp-toiture.vercel.app'
  },
  { 
    id: 3,
    name: 'Asphalte Pro', 
    desc: 'Pavage résidentiel & commercial',
    icon: TrendingUp, 
    gradient: 'from-slate-400 via-gray-400 to-zinc-400',
    bg: 'bg-slate-500/10',
    border: 'border-slate-500/20',
    stat: '50km+',
    statLabel: 'Surfaces',
    image: 'https://images.pexels.com/photos/12274274/pexels-photo-12274274.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://zenicorp-asphalte.vercel.app'
  },
  { 
    id: 4,
    name: 'Époxy Luxe', 
    desc: 'Fini miroir garanti 10 ans',
    icon: Star, 
    gradient: 'from-indigo-400 via-purple-400 to-pink-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    stat: '4.9/5',
    statLabel: 'Satisfaction',
    image: 'https://images.pexels.com/photos/2306171/pexels-photo-2306171.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://zenicorp-epoxy.vercel.app'
  },
];

const features = [
  {
    title: 'Devis Instantané',
    desc: 'Obtenez votre prix en 60 secondes avec notre calculateur IA',
    icon: Zap,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
  },
  {
    title: 'Garantie Premium',
    desc: 'Jusqu\'à 25 ans de garantie sur tous nos travaux',
    icon: Shield,
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
  },
  {
    title: 'Équipe Certifiée',
    desc: '+50 experts certifiés RBQ à votre service',
    icon: Users,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
  },
  {
    title: 'Service 24/7',
    desc: 'Urgence ? Nous sommes là jour et nuit',
    icon: Activity,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
  },
];

export default function MegaLanding() {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-30 blur-[120px] transition-all duration-1000"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
            left: mousePos.x * 0.05,
            top: mousePos.y * 0.05,
          }}
        />
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
            right: mousePos.x * -0.03,
            bottom: mousePos.y * -0.03,
          }}
        />
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrollY > 50 
            ? 'bg-[#030303]/80 backdrop-blur-xl border-b border-white/5' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4E09C] flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-[#D4AF37]/30">
                  <Crown className="w-6 h-6 text-black" />
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4E09C] blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">
                  ZENI<span className="text-[#D4AF37]">CORP</span>
                </span>
                <span className="block text-[10px] text-white/40 tracking-[0.3em] uppercase">Groupe Construction</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['Services', 'Réalisations', 'À propos', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm text-white/60 hover:text-white transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#F4E09C] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <Link 
                href="/hub"
                className="px-5 py-2.5 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Dashboard
              </Link>
              <Link 
                href="/hub"
                className="group relative px-6 py-2.5 bg-white text-black text-sm font-semibold rounded-full overflow-hidden transition-all hover:shadow-lg hover:shadow-white/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Démarrer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F4E09C] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#030303]/95 backdrop-blur-xl border-b border-white/10 p-6 space-y-4">
            {['Services', 'Réalisations', 'À propos', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-lg text-white/80 hover:text-white py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Link 
              href="/hub"
              className="block w-full text-center py-3 bg-white text-black font-semibold rounded-full mt-4"
            >
              Démarrer
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                style={{
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-white/70">Disponible 24/7 au Québec</span>
              </div>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                L'excellence
                <span className="block mt-2 bg-gradient-to-r from-[#D4AF37] via-[#F4E09C] to-[#D4AF37] bg-clip-text text-transparent">
                  à votre service
                </span>
              </h1>

              {/* Description */}
              <p className="text-lg text-white/60 max-w-xl leading-relaxed">
                4 divisions spécialisées, 50+ experts certifiés, 2500+ projets réussis. 
                Votre partenaire construction de confiance au Québec.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/hub"
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:shadow-xl hover:shadow-white/10 hover:scale-105"
                >
                  <span className="relative z-10">Explorer les services</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F4E09C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                
                <a 
                  href="tel:18009364267"
                  className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                  <span className="font-medium">1-800-ZENICORP</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1,2,3,4].map((i) => (
                    <div 
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-[#030303] bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center"
                    >
                      <Star className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-sm text-white/50 mt-1">4.9/5 basé sur 250+ avis</p>
                </div>
              </div>
            </div>

            {/* Right Content - Project Cards Stack */}
            <div className="relative h-[500px] lg:h-[600px]">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="absolute w-full transition-all duration-700 ease-out cursor-pointer group"
                  style={{
                    top: `${index * 25}px`,
                    left: `${index * 20}px`,
                    zIndex: projects.length - index,
                    transform: `translateY(${scrollY * (0.05 * (index + 1))}px) rotate(${(index - 1.5) * 2}deg)`,
                  }}
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-500">
                      {/* Gradient Border on Hover */}
                      <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                      
                      <div className="flex items-start justify-between relative z-10">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-2xl ${project.bg} border ${project.border}`}>
                            <project.icon className={`w-6 h-6 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`} />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{project.name}</h3>
                            <p className="text-sm text-white/50">{project.desc}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold">{project.stat}</p>
                          <p className="text-xs text-white/40">{project.statLabel}</p>
                        </div>
                      </div>

                      {/* Mini Preview Image */}
                      <div className="mt-4 h-32 rounded-xl overflow-hidden opacity-50 group-hover:opacity-100 transition-opacity">
                        <img 
                          src={project.image} 
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      <div className="mt-4 flex items-center gap-2 text-sm text-white/40 group-hover:text-white/60 transition-colors">
                        <span>Voir le site</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: 2500, suffix: '+', label: 'Projets réalisés', icon: Building2 },
              { value: 50, suffix: '+', label: 'Experts certifiés', icon: Users },
              { value: 15, suffix: '', label: 'Ans d\'expérience', icon: Crown },
              { value: 99, suffix: '%', label: 'Clients satisfaits', icon: Star },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 mb-4 group-hover:bg-white/10 transition-colors">
                  <stat.icon className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/60 mb-6">
              Pourquoi nous choisir
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              L'excellence dans
              <span className="text-[#D4AF37]"> chaque détail</span>
            </h2>
            <p className="text-lg text-white/50">
              Des services premium conçus pour dépasser vos attentes
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.bg} mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/10 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Prêt à transformer
            <span className="block text-[#D4AF37]">votre espace ?</span>
          </h2>
          <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">
            Obtenez un devis gratuit sous 24h. Sans engagement.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/hub"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-semibold rounded-full hover:shadow-xl hover:shadow-white/20 transition-all hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Voir tous les services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="tel:18009364267"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full hover:bg-white/5 transition-all"
            >
              <Phone className="w-5 h-5" />
              1-800-ZENICORP
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#F4E09C] flex items-center justify-center">
                <Crown className="w-5 h-5 text-black" />
              </div>
              <span className="font-bold">
                ZENI<span className="text-[#D4AF37]">CORP</span>
              </span>
            </div>
            <p className="text-sm text-white/40">
              © 2024 ZeniCorp Groupe Construction. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              {['GitHub', 'LinkedIn', 'Contact'].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="text-sm text-white/40 hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Phone icon component
function Phone({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
