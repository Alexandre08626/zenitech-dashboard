'use client';

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
} from 'lucide-react';
import { useEffect, useState } from 'react';
import ZeniCorpLogo from '@/components/ui/ZeniCorpLogo';

const projects = [
  { name: 'Dashboard', icon: Activity, color: 'bg-blue-500', delay: '0s' },
  { name: 'Isolation', icon: Shield, color: 'bg-emerald-500', delay: '0.1s' },
  { name: 'Toiture', icon: Building2, color: 'bg-amber-500', delay: '0.2s' },
  { name: 'Asphalte', icon: TrendingUp, color: 'bg-slate-500', delay: '0.3s' },
  { name: 'Époxy', icon: Star, color: 'bg-indigo-500', delay: '0.4s' },
];

const stats = [
  { value: '7.1k+', label: 'Visites', icon: Globe },
  { value: '8.4%', label: 'Conversion', icon: TrendingUp },
  { value: '4.9/5', label: 'Satisfaction', icon: Star },
  { value: '5', label: 'Projets', icon: Building2 },
];

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zenicorp-gray-950 via-zenicorp-gray-900 to-zenicorp-gray-950 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zenicorp-gold-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-zenicorp-gray-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="container-zenicorp py-4">
          <div className="flex items-center justify-between">
            <ZeniCorpLogo size="md" variant="gold" showText={true} />
            
            <div className="flex items-center gap-4">
              <Link 
                href="/hub"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-zenicorp-gray-300 hover:text-white transition-colors"
              >
                Hub Central
              </Link>
              <Link 
                href="/dashboard"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zenicorp-gold-500 to-zenicorp-gold-400 text-white text-sm font-bold rounded-full hover:shadow-glow transition-all"
              >
                Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <main className="relative pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="container-zenicorp">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-zenicorp-gold-500/10 border border-zenicorp-gold-500/20 rounded-full mb-8 animate-fade-in">
                <Crown className="w-4 h-4 text-zenicorp-gold-400" />
                <span className="text-sm font-bold text-zenicorp-gold-300">Écosystème Premium</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-white mb-6 leading-tight animate-slide-up">
                ZeniCorp
                <span className="block text-transparent bg-gradient-to-r from-zenicorp-gold-400 via-zenicorp-gold-500 to-zenicorp-gold-400 bg-clip-text">
                  Universe
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-zenicorp-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                Cinq projets. Une vision. Une plateforme unifiée pour gérer 
                l'excellence de votre entreprise de construction.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.2s' }}>
                <Link 
                  href="/hub"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-zenicorp-gold-500 to-zenicorp-gold-400 text-white font-bold text-lg rounded-2xl shadow-gold hover:shadow-glow transition-all hover:scale-105"
                >
                  <Sparkles className="w-5 h-5" />
                  Explorer l'Écosystème
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link 
                  href="/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-2xl hover:bg-white/10 transition-all"
                >
                  <Zap className="w-5 h-5" />
                  Dashboard
                </Link>
              </div>

              {/* Mini Stats */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                {stats.slice(0, 3).map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-black text-white">{stat.value}</p>
                    <p className="text-xs text-zenicorp-gray-500 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Visual Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <div 
                    key={project.name}
                    className={`group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 ${
                      index === 0 ? 'col-span-2' : ''
                    }`}
                    style={{ animationDelay: project.delay }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 ${project.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{project.name}</h3>
                        <p className="text-sm text-zenicorp-gray-400">Division ZeniCorp</p>
                      </div>
                    </div>
                    
                    {index === 0 && (
                      <div className="mt-4 flex items-center gap-2 text-sm text-zenicorp-gold-400">
                        <Shield className="w-4 h-4" />
                        <span>Centre de commande principal</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-zenicorp-gold-500/20 rounded-full blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </main>

      {/* PROJECTS GRID SECTION */}
      <section className="py-20 border-t border-white/5">
        <div className="container-zenicorp">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
              Nos <span className="text-gradient-gold">Divisions</span>
            </h2>
            <p className="text-zenicorp-gray-400 max-w-2xl mx-auto">
              Cinq projets spécialisés, chacun dédié à un aspect de votre entreprise de construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'ZeniTech Dashboard',
                desc: 'Tableau de bord centralisé avec analytics, CRM et gestion des leads en temps réel.',
                icon: Activity,
                color: 'from-blue-500 to-cyan-400',
                link: '/hub',
              },
              {
                name: 'ZeniCorp Isolation',
                desc: 'Services d\'isolation éco-responsable avec gestion intégrale des subventions.',
                icon: Shield,
                color: 'from-emerald-500 to-teal-400',
                link: 'https://zenicorp-isolation.vercel.app',
                external: true,
              },
              {
                name: 'ZeniCorp Toiture',
                desc: 'Réparation et remplacement de toitures résidentielles et commerciales.',
                icon: Building2,
                color: 'from-amber-500 to-orange-400',
                link: 'https://zenicorp-toiture.vercel.app',
                external: true,
              },
              {
                name: 'ZeniCorp Asphalte',
                desc: 'Scellant, réparation de fissures et pavage professionnel pour toutes surfaces.',
                icon: TrendingUp,
                color: 'from-slate-500 to-gray-400',
                link: 'https://zenicorp-asphalte.vercel.app',
                external: true,
              },
              {
                name: 'ZeniCorp Époxy',
                desc: 'Revêtements de sol époxy pour garages, commerces et espaces industriels.',
                icon: Star,
                color: 'from-indigo-500 to-purple-400',
                link: 'https://zenicorp-epoxy.vercel.app',
                external: true,
              },
            ].map((project, index) => {
              const Component = project.external ? 'a' : Link;
              const props = project.external 
                ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                : { href: project.link };
              
              return (
                <Component
                  key={project.name}
                  {...props}
                  className="group block"
                >
                  <div className="relative p-8 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 h-full">
                    <div className={`inline-flex p-3 bg-gradient-to-r ${project.color} rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zenicorp-gold-300 transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-zenicorp-gray-400 text-sm leading-relaxed mb-6">
                      {project.desc}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm font-medium text-zenicorp-gold-400 group-hover:gap-3 transition-all">
                      <span>Explorer</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>

                    {/* Hover Glow */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`} />
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-20 border-t border-white/5">
        <div className="container-zenicorp">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex p-4 bg-zenicorp-gold-500/10 rounded-2xl mb-4 group-hover:bg-zenicorp-gold-500/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-zenicorp-gold-400" />
                </div>
                <p className="text-4xl lg:text-5xl font-black text-white mb-2">{stat.value}</p>
                <p className="text-sm text-zenicorp-gray-400 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-white/5">
        <div className="container-zenicorp">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <ZeniCorpLogo size="sm" variant="gold" showText={true} />
            
            <div className="flex items-center gap-6 text-sm text-zenicorp-gray-500">
              <span>© 2024 ZeniCorp. Tous droits réservés.</span>
              <a href="https://github.com/Alexandre08626" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
