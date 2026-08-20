'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  LayoutDashboard,
  Home,
  Building2,
  Truck,
  PaintBucket,
  ExternalLink,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Zap,
  Globe,
  ChevronRight,
  Sparkles,
  Crown,
  Target,
  Activity,
  Shield,
  Award,
  Clock,
  CheckCircle2,
  BarChart3,
  PieChart,
  MoreHorizontal,
  Filter,
  Search,
  Bell,
  Settings,
  Menu,
  X,
} from 'lucide-react';

// Mouse follower glow effect
const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-50 opacity-30 blur-[120px] transition-transform duration-100"
      style={{
        background: 'radial-gradient(circle, rgba(212,175,55,0.4) 0%, transparent 70%)',
        left: mousePos.x - 250,
        top: mousePos.y - 250,
      }}
    />
  );
};

// Animated card component with 3D tilt
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className={`transition-transform duration-200 ease-out ${className}`}
    >
      {children}
    </div>
  );
};

// Progress bar animation
const AnimatedProgress = ({ value, color = 'from-[#D4AF37] to-[#F4E09C]' }: { value: number; color?: string }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => setWidth(value), 100);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <div 
        className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

const projects = [
  {
    id: 'dashboard',
    name: 'ZeniTech Dashboard',
    description: 'Centre de commande centralisé',
    fullDesc: 'Analytics avancés, CRM intelligent, gestion des leads et suivi de projets en temps réel.',
    url: '/dashboard',
    external: false,
    icon: LayoutDashboard,
    gradient: 'from-blue-400 via-cyan-400 to-teal-400',
    bgGradient: 'from-blue-500/20 via-cyan-500/20 to-teal-500/20',
    borderColor: 'border-blue-400/30',
    stats: { visits: '2,847', conversion: '12.5%', leads: '48' },
    status: 'En ligne',
    statusColor: 'bg-emerald-500',
    features: ['Analytics IA', 'CRM', 'Leads', 'Rapports'],
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=800',
    progress: 92,
  },
  {
    id: 'isolation',
    name: 'ZeniCorp Isolation',
    description: 'Isolation éco-responsable',
    fullDesc: 'Services d\'isolation premium avec ouate de cellulose et gestion complète des subventions.',
    url: 'https://zenicorp-isolation.vercel.app',
    external: true,
    icon: Home,
    gradient: 'from-emerald-400 via-teal-400 to-cyan-400',
    bgGradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-500/20',
    borderColor: 'border-emerald-400/30',
    stats: { visits: '1,923', conversion: '8.3%', leads: '32' },
    status: 'En ligne',
    statusColor: 'bg-emerald-500',
    features: ['Éco+', 'Subventions', 'Audit IA', 'R-60'],
    image: 'https://images.pexels.com/photos/6124239/pexels-photo-6124239.jpeg?auto=compress&w=800',
    progress: 88,
  },
  {
    id: 'toiture',
    name: 'ZeniCorp Toiture',
    description: 'Toiture résidentielle & commerciale',
    fullDesc: 'Réparation, remplacement et inspection de toitures avec garantie 25 ans.',
    url: 'https://zenicorp-toiture.vercel.app',
    external: true,
    icon: Building2,
    gradient: 'from-amber-400 via-orange-400 to-red-400',
    bgGradient: 'from-amber-500/20 via-orange-500/20 to-red-500/20',
    borderColor: 'border-amber-400/30',
    stats: { visits: '1,456', conversion: '6.7%', leads: '24' },
    status: 'En ligne',
    statusColor: 'bg-emerald-500',
    features: ['Garantie 25 ans', 'Urgence 24/7', 'Membrane', 'Bardeaux'],
    image: 'https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&w=800',
    progress: 76,
  },
  {
    id: 'asphalte',
    name: 'ZeniCorp Asphalte',
    description: 'Pavage et asphalte professionnel',
    fullDesc: 'Scellant, réparation de fissures et pavage neuf pour résidences et commerces.',
    url: 'https://zenicorp-asphalte.vercel.app',
    external: true,
    icon: Truck,
    gradient: 'from-slate-400 via-gray-400 to-zinc-400',
    bgGradient: 'from-slate-500/20 via-gray-500/20 to-zinc-500/20',
    borderColor: 'border-slate-400/30',
    stats: { visits: '987', conversion: '5.2%', leads: '18' },
    status: 'En ligne',
    statusColor: 'bg-emerald-500',
    features: ['Scellant', 'Réparation', 'Pavage', 'Commercial'],
    image: 'https://images.pexels.com/photos/12274274/pexels-photo-12274274.jpeg?auto=compress&w=800',
    progress: 64,
  },
  {
    id: 'epoxy',
    name: 'ZeniCorp Époxy',
    description: 'Revêtements de sol haute gamme',
    fullDesc: 'Époxy 100% solide pour garages, commerces et industries avec fini miroir.',
    url: 'https://zenicorp-epoxy.vercel.app',
    external: true,
    icon: PaintBucket,
    gradient: 'from-indigo-400 via-purple-400 to-pink-400',
    bgGradient: 'from-indigo-500/20 via-purple-500/20 to-pink-500/20',
    borderColor: 'border-indigo-400/30',
    stats: { visits: '742', conversion: '7.1%', leads: '15' },
    status: 'En ligne',
    statusColor: 'bg-emerald-500',
    features: ['Fini Miroir', 'Antidérapant', 'Industriel', 'Garantie 10 ans'],
    image: 'https://images.pexels.com/photos/2306171/pexels-photo-2306171.jpeg?auto=compress&w=800',
    progress: 71,
  },
];

const globalStats = [
  { 
    label: 'Visites Totales', 
    value: '7,955', 
    change: '+23%', 
    trend: 'up',
    icon: Globe, 
    gradient: 'from-blue-400 to-cyan-400',
    chart: [40, 60, 45, 80, 65, 90, 75]
  },
  { 
    label: 'Taux Conversion', 
    value: '8.4%', 
    change: '+1.2%', 
    trend: 'up',
    icon: Target, 
    gradient: 'from-emerald-400 to-teal-400',
    chart: [30, 45, 55, 50, 65, 70, 84]
  },
  { 
    label: 'Leads Qualifiés', 
    value: '137', 
    change: '+18', 
    trend: 'up',
    icon: Users, 
    gradient: 'from-purple-400 to-pink-400',
    chart: [20, 35, 40, 55, 45, 60, 65]
  },
  { 
    label: 'Revenus Potentiels', 
    value: '1.85M$', 
    change: '+12%', 
    trend: 'up',
    icon: TrendingUp, 
    gradient: 'from-amber-400 to-orange-400',
    chart: [50, 65, 70, 85, 90, 95, 100]
  },
];

const recentActivity = [
  { project: 'ZeniCorp Isolation', action: 'Nouveau lead qualifié', time: '2 min', value: '12,500$', type: 'success' },
  { project: 'ZeniCorp Toiture', action: 'Devis approuvé', time: '15 min', value: '24,800$', type: 'success' },
  { project: 'ZeniCorp Asphalte', action: 'Visite guidée', time: '32 min', value: '-', type: 'info' },
  { project: 'ZeniCorp Époxy', action: 'Rappel demandé', time: '1 h', value: '4,800$', type: 'warning' },
  { project: 'ZeniTech Dashboard', action: 'Rapport généré', time: '2 h', value: '-', type: 'info' },
  { project: 'ZeniCorp Isolation', action: 'Subvention validée', time: '3 h', value: '5,000$', type: 'success' },
];

export default function MegaHub() {
  const [mounted, setMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
      <MouseGlow />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#030303]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
              
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4E09C] flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-[#D4AF37]/30">
                    <Crown className="w-6 h-6 text-black" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F4E09C] blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-lg font-bold tracking-tight">
                    ZENI<span className="text-[#D4AF37]">CORP</span>
                  </span>
                  <span className="block text-[10px] text-white/40 tracking-[0.3em] uppercase">Hub Central</span>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-white/70">Systèmes opérationnels</span>
              </div>
              
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5 text-white/70" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </button>
              
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-white/70" />
              </button>
              
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E09C] flex items-center justify-center text-black font-bold">
                AZ
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-[73px] left-0 h-[calc(100vh-73px)] w-64 bg-[#030303]/95 border-r border-white/5 z-30 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
          <div className="p-6 space-y-6">
            <div>
              <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">Menu</p>
              <nav className="space-y-2">
                {[
                  { icon: LayoutDashboard, label: 'Dashboard', active: true },
                  { icon: BarChart3, label: 'Analytics', active: false },
                  { icon: Users, label: 'Leads', active: false },
                  { icon: PieChart, label: 'Rapports', active: false },
                ].map((item) => (
                  <button
                    key={item.label}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      item.active 
                        ? 'bg-white/10 text-white border border-white/10' 
                        : 'text-white/60 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-medium text-white/40 uppercase tracking-wider mb-4">Projets</p>
              <nav className="space-y-2">
                {projects.map((project) => (
                  <a
                    key={project.id}
                    href={project.url}
                    target={project.external ? '_blank' : undefined}
                    rel={project.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all group"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`} />
                    <span className="font-medium text-sm flex-1">{project.name}</span>
                    {project.external && (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 relative z-10">
          <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
            {/* Welcome Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">
                  Bonjour, <span className="text-[#D4AF37]">Alexandre</span>
                </h1>
                <p className="text-white/50 mt-1">
                  Voici ce qui se passe dans votre écosystème aujourd'hui
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-white/40">
                  {new Date().toLocaleDateString('fr-CA', { weekday: 'long', day: 'numeric', month: 'long' })}
                </span>
              </div>
            </div>

            {/* Global Stats */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-to-r from-[#D4AF37] to-[#F4E09C] rounded-xl">
                  <Activity className="w-5 h-5 text-black" />
                </div>
                <h2 className="text-xl font-bold">Performance Globale</h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {globalStats.map((stat, index) => (
                  <TiltCard key={stat.label}>
                    <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all group">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.gradient} bg-opacity-20`}>
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex items-center gap-1 text-emerald-400 text-sm font-medium">
                          <TrendingUp className="w-4 h-4" />
                          {stat.change}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-3xl font-bold">{stat.value}</p>
                        <p className="text-sm text-white/50">{stat.label}</p>
                      </div>
                      
                      {/* Mini Chart */}
                      <div className="flex items-end gap-1 h-8">
                        {stat.chart.map((val, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-white/10 rounded-sm transition-all duration-500 group-hover:bg-white/20"
                            style={{ height: `${val}%`, transitionDelay: `${i * 50}ms` }}
                          />
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </section>

            {/* Projects Grid */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl">
                    <LayoutDashboard className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold">Vos Projets</h2>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <Filter className="w-5 h-5 text-white/50" />
                  </button>
                  <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <Search className="w-5 h-5 text-white/50" />
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <TiltCard key={project.id}>
                    <div 
                      className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden hover:border-white/10 transition-all duration-500 cursor-pointer"
                      onClick={() => window.open(project.url, project.external ? '_blank' : '_self')}
                    >
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-2xl bg-gradient-to-r ${project.gradient} shadow-lg`}>
                              <project.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-bold text-lg">{project.name}</h3>
                                <div className={`w-2 h-2 rounded-full ${project.statusColor}`} />
                              </div>
                              <p className="text-sm text-white/50">{project.description}</p>
                            </div>
                          </div>
                          <button className="p-2 hover:bg-white/5 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                            <MoreHorizontal className="w-5 h-5 text-white/50" />
                          </button>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="text-center p-3 rounded-xl bg-white/5">
                            <p className="text-lg font-bold">{project.stats.visits}</p>
                            <p className="text-xs text-white/40">Visites</p>
                          </div>
                          <div className="text-center p-3 rounded-xl bg-white/5">
                            <p className="text-lg font-bold">{project.stats.conversion}</p>
                            <p className="text-xs text-white/40">Conv.</p>
                          </div>
                          <div className="text-center p-3 rounded-xl bg-white/5">
                            <p className="text-lg font-bold">{project.stats.leads}</p>
                            <p className="text-xs text-white/40">Leads</p>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4">
                          <div className="flex justify-between text-xs text-white/40 mb-2">
                            <span>Performance</span>
                            <span>{project.progress}%</span>
                          </div>
                          <AnimatedProgress value={project.progress} color={project.gradient} />
                        </div>

                        {/* Features Tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.features.slice(0, 3).map((feature) => (
                            <span 
                              key={feature}
                              className="px-2 py-1 text-xs font-medium rounded-lg bg-white/5 text-white/60 border border-white/5"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                          <span className="text-sm text-white/40">
                            {project.external ? 'Site externe' : 'Dashboard'}
                          </span>
                          <div className="flex items-center gap-2 text-sm font-medium text-white/60 group-hover:text-white transition-colors">
                            <span>Explorer</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </section>

            {/* Bottom Section: Activity + Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Recent Activity */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold">Activité Récente</h2>
                </div>
                
                <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                  <div className="space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                      >
                        <div className={`w-3 h-3 rounded-full ${
                          activity.type === 'success' ? 'bg-emerald-400' :
                          activity.type === 'warning' ? 'bg-amber-400' :
                          'bg-blue-400'
                        }`} />
                        
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-white group-hover:text-white transition-colors">
                            {activity.project}
                          </p>
                          <p className="text-sm text-white/50">{activity.action}</p>
                        </div>
                        
                        <div className="text-right">
                          {activity.value !== '-' && (
                            <p className="font-medium text-emerald-400">{activity.value}</p>
                          )}
                          <p className="text-xs text-white/40 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Quick Actions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold">Actions Rapides</h2>
                </div>
                
                <div className="space-y-3">
                  {[
                    { label: 'Nouveau Lead', icon: Users, desc: 'Ajouter manuellement', color: 'from-blue-400 to-cyan-400' },
                    { label: 'Rapport Analytics', icon: BarChart3, desc: 'Générer PDF', color: 'from-emerald-400 to-teal-400' },
                    { label: 'Paramètres', icon: Settings, desc: 'Configuration', color: 'from-purple-400 to-pink-400' },
                  ].map((action) => (
                    <button 
                      key={action.label}
                      className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all group"
                    >
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${action.color} shadow-lg group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="font-medium">{action.label}</p>
                        <p className="text-xs text-white/50">{action.desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-white/30 group-hover:text-white/60 group-hover:translate-x-1 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
