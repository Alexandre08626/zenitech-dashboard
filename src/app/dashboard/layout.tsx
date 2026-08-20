'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Target,
  Truck,
  Building2,
  BarChart3,
  Settings,
  Bell,
  Menu,
  X,
  User,
  LogOut,
  ChevronDown,
  Search,
  MessageCircle,
  Crown,
  Zap,
  Shield,
} from 'lucide-react';
import ZeniCorpLogo from '@/components/ui/ZeniCorpLogo';

const navigation = [
  { 
    name: 'Vue d\'ensemble', 
    href: '/dashboard', 
    icon: LayoutDashboard, 
    color: 'from-blue-500 to-cyan-400',
    description: 'Tableaux de bord et métriques' 
  },
  { 
    name: 'Pipeline CRM', 
    href: '/dashboard/crm', 
    icon: Users, 
    color: 'from-purple-500 to-pink-400',
    description: 'Gestion des relations clients' 
  },
  { 
    name: 'Leads & Prospects', 
    href: '/dashboard/leads', 
    icon: Target, 
    color: 'from-emerald-500 to-teal-400',
    description: 'Génération et qualification' 
  },
  { 
    name: 'Réseau Partenaires', 
    href: '/dashboard/contractors', 
    icon: Truck, 
    color: 'from-orange-500 to-amber-400',
    description: 'Entrepreneurs certifiés' 
  },
  { 
    name: 'Projets Actifs', 
    href: '/dashboard/projects', 
    icon: Building2, 
    color: 'from-indigo-500 to-blue-400',
    description: 'Suivi et coordination' 
  },
  { 
    name: 'Analytics IA', 
    href: '/dashboard/analytics', 
    icon: BarChart3, 
    color: 'from-rose-500 to-pink-400',
    description: 'Intelligence artificielle' 
  },
  { 
    name: 'Administration', 
    href: '/dashboard/settings', 
    icon: Settings, 
    color: 'from-gray-500 to-slate-400',
    description: 'Configuration système' 
  },
];

const userMenuItems = [
  { name: 'Profil', href: '/dashboard/settings/profile', icon: User },
  { name: 'Paramètres', href: '/dashboard/settings', icon: Settings },
  { name: 'Déconnexion', href: '#', icon: LogOut },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zenicorp-gray-50 via-white to-zenicorp-gray-100">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* PREMIUM SIDEBAR */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-zenicorp-gray-900 via-zenicorp-gray-800 to-zenicorp-gray-900 border-r border-zenicorp-gold-500/20 transform transition-all duration-500 lg:translate-x-0 shadow-2xl ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-zenicorp-gold-500/5 to-transparent opacity-50" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-zenicorp-gold-500/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
          
          {/* LOGO SECTION - ULTRA PREMIUM */}
          <div className="relative flex items-center justify-between h-20 px-6 border-b border-zenicorp-gold-500/20 bg-gradient-to-r from-zenicorp-gray-800/50 to-zenicorp-gray-900/50 backdrop-blur-sm">
            <Link href="/dashboard" className="flex items-center gap-3 group">
              <ZeniCorpLogo 
                size="lg" 
                variant="gold" 
                showText={true} 
                className="transition-all duration-300 group-hover:scale-105"
              />
            </Link>
            <button
              className="lg:hidden p-2 text-zenicorp-gray-300 hover:text-zenicorp-gold-400 hover:bg-zenicorp-gray-700/50 rounded-xl transition-all duration-200"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* QUICK ACTIONS */}
          <div className="relative px-6 py-4">
            <div className="flex gap-2">
              <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-zenicorp-gold-500/90 text-zenicorp-gray-900 rounded-xl text-sm font-semibold hover:bg-zenicorp-gold-400 transition-all duration-200 shadow-lg hover:shadow-glow">
                <Zap className="w-4 h-4" />
                Nouveau Lead
              </button>
              <button className="p-2 bg-zenicorp-gray-700/50 text-zenicorp-gray-300 rounded-xl hover:bg-zenicorp-gray-600 transition-all duration-200">
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* NAVIGATION - ULTRA MODERNE */}
          <nav className="flex-1 px-4 py-2 space-y-2 overflow-y-auto scrollbar-hide">
            {navigation.map((item, index) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <div key={item.name} className="relative">
                  <Link
                    href={item.href}
                    className={`group relative flex items-center gap-4 px-4 py-4 rounded-2xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                      isActive
                        ? 'bg-gradient-to-r from-zenicorp-gold-500/90 to-zenicorp-gold-400/90 text-zenicorp-gray-900 shadow-2xl'
                        : 'text-zenicorp-gray-300 hover:bg-zenicorp-gray-700/30 hover:text-white'
                    }`}
                  >
                    {/* Background Gradient Effect */}
                    {!isActive && (
                      <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                    )}
                    
                    {/* Icon avec effet de glow */}
                    <div className={`relative z-10 ${isActive ? 'text-zenicorp-gray-900' : 'text-zenicorp-gray-400 group-hover:text-white'}`}>
                      <item.icon className="w-5 h-5 transition-all duration-300 group-hover:scale-110" />
                    </div>
                    
                    {/* Contenu */}
                    <div className="flex-1 relative z-10">
                      <div className={`font-semibold ${isActive ? 'text-zenicorp-gray-900' : 'text-zenicorp-gray-200'}`}>
                        {item.name}
                      </div>
                      <div className={`text-xs opacity-75 ${isActive ? 'text-zenicorp-gray-700' : 'text-zenicorp-gray-400'}`}>
                        {item.description}
                      </div>
                    </div>

                    {/* Active indicator */}
                    {isActive && (
                      <div className="absolute right-2 w-2 h-8 bg-zenicorp-gray-900 rounded-full" />
                    )}
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* STATUS & USER SECTION */}
          <div className="relative p-6 border-t border-zenicorp-gold-500/20 bg-gradient-to-r from-zenicorp-gray-800/50 to-zenicorp-gray-900/50">
            {/* Status System */}
            <div className="mb-4 p-3 bg-zenicorp-gray-700/30 rounded-xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-zenicorp-gray-300 font-medium">Système Opérationnel</span>
                </div>
                <Crown className="w-4 h-4 text-zenicorp-gold-400" />
              </div>
              <div className="text-xs text-zenicorp-gray-400">
                Dernière sync: il y a 2 min
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zenicorp-gold-400 to-zenicorp-gold-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-zenicorp-gray-900 font-bold text-lg">AD</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 border-2 border-zenicorp-gray-900 rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-white truncate">Alexandre Dubois</p>
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3 text-zenicorp-gold-400" />
                  <span className="text-xs text-zenicorp-gold-400 font-medium">Super Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <div className="lg:pl-80 flex flex-col min-h-screen">
        {/* PREMIUM TOP HEADER */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-xl border-b border-zenicorp-gray-200/50 shadow-sm">
          <div className="flex items-center justify-between h-20 px-6 lg:px-8">
            {/* Left Section */}
            <div className="flex items-center gap-6">
              <button
                className="lg:hidden p-3 text-zenicorp-gray-600 hover:text-zenicorp-gray-900 hover:bg-zenicorp-gray-100 rounded-xl transition-all duration-200"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
              
              {/* Page Title with Breadcrumb */}
              <div className="hidden sm:block">
                <div className="flex items-center gap-3">
                  <h1 className="heading-3 text-gradient-premium">{getPageTitle(pathname)}</h1>
                  <div className="px-3 py-1 bg-zenicorp-gold-100 text-zenicorp-gold-700 rounded-full text-xs font-bold">
                    PREMIUM
                  </div>
                </div>
                <p className="text-sm text-zenicorp-gray-500 mt-1">
                  {getPageDescription(pathname)}
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              {/* Search Bar */}
              <div className="hidden md:flex relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zenicorp-gray-400" />
                <input
                  type="text"
                  placeholder="Recherche rapide..."
                  className="pl-10 pr-4 py-2 w-64 bg-zenicorp-gray-50 border border-zenicorp-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-zenicorp-gold-500/20 focus:border-zenicorp-gold-500 transition-all duration-200"
                />
              </div>

              {/* Notifications */}
              <button className="relative p-3 text-zenicorp-gray-600 hover:text-zenicorp-gray-900 hover:bg-zenicorp-gray-100 rounded-xl transition-all duration-200 group">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  3
                </span>
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  className="flex items-center gap-3 p-2 pr-4 text-zenicorp-gray-600 hover:text-zenicorp-gray-900 hover:bg-zenicorp-gray-100 rounded-xl transition-all duration-200 group"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-zenicorp-gold-400 to-zenicorp-gold-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300">
                    <span className="text-zenicorp-gray-900 font-bold text-sm">AD</span>
                  </div>
                  <div className="hidden lg:block text-left">
                    <div className="text-sm font-semibold text-zenicorp-gray-900">Alexandre</div>
                    <div className="text-xs text-zenicorp-gray-500">En ligne</div>
                  </div>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-white border border-zenicorp-gray-200 shadow-premium rounded-2xl py-2 z-50 backdrop-blur-xl">
                    <div className="px-4 py-3 border-b border-zenicorp-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-zenicorp-gold-400 to-zenicorp-gold-600 rounded-xl flex items-center justify-center">
                          <span className="text-zenicorp-gray-900 font-bold">AD</span>
                        </div>
                        <div>
                          <div className="font-semibold text-zenicorp-gray-900">Alexandre Dubois</div>
                          <div className="text-sm text-zenicorp-gray-500">alexandre@zenicorp.ca</div>
                        </div>
                      </div>
                    </div>
                    {userMenuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-sm text-zenicorp-gray-700 hover:bg-zenicorp-gray-50 hover:text-zenicorp-gray-900 transition-all duration-200"
                        onClick={() => setUserMenuOpen(false)}
                      >
                        <item.icon className="w-4 h-4" />
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="flex-1 p-6 lg:p-8 relative">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-zenicorp-gold-50/30 to-transparent pointer-events-none" />
          <div className="relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

function getPageTitle(pathname: string): string {
  const titles: Record<string, string> = {
    '/dashboard': 'Vue d\'ensemble',
    '/dashboard/crm': 'Pipeline CRM',
    '/dashboard/leads': 'Leads & Prospects',
    '/dashboard/contractors': 'Réseau Partenaires',
    '/dashboard/projects': 'Projets Actifs',
    '/dashboard/analytics': 'Analytics IA',
    '/dashboard/settings': 'Administration',
  };
  for (const [path, title] of Object.entries(titles)) {
    if (pathname === path || pathname.startsWith(path + '/')) return title;
  }
  return 'Zenitech Dashboard';
}

function getPageDescription(pathname: string): string {
  const descriptions: Record<string, string> = {
    '/dashboard': 'Tableaux de bord et métriques en temps réel',
    '/dashboard/crm': 'Gestion avancée des relations clients',
    '/dashboard/leads': 'Génération et qualification automatisée',
    '/dashboard/contractors': 'Réseau d\'entrepreneurs certifiés ZeniCorp',
    '/dashboard/projects': 'Suivi et coordination multi-projets',
    '/dashboard/analytics': 'Intelligence artificielle et prédictions',
    '/dashboard/settings': 'Configuration et paramètres système',
  };
  for (const [path, description] of Object.entries(descriptions)) {
    if (pathname === path || pathname.startsWith(path + '/')) return description;
  }
  return 'Plateforme technologique ZeniCorp';
}