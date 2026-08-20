import Link from 'next/link';
import Image from 'next/image';
import {
  LayoutDashboard,
  Home,
  Building,
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
} from 'lucide-react';
import ZeniCorpLogo from '@/components/ui/ZeniCorpLogo';

// Projects data with their info
const projects = [
  {
    id: 'zenitech-dashboard',
    name: 'ZeniTech Dashboard',
    description: 'Tableau de bord centralisé avec analytics, CRM et gestion des leads',
    url: '/dashboard',
    external: false,
    icon: LayoutDashboard,
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    stats: { visits: '2.4k', conversion: '12.5%' },
    status: 'Live',
    features: ['Analytics', 'CRM', 'Leads'],
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&w=800',
  },
  {
    id: 'zenicorp-isolation',
    name: 'ZeniCorp Isolation',
    description: 'Services d\'isolation éco-responsable avec gestion des subventions',
    url: 'https://zenicorp-isolation.vercel.app',
    external: true,
    icon: Home,
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
    stats: { visits: '1.8k', conversion: '8.3%' },
    status: 'Live',
    features: ['Éco-responsable', 'Subventions', 'Audit IA'],
    image: 'https://images.pexels.com/photos/6124239/pexels-photo-6124239.jpeg?auto=compress&w=800',
  },
  {
    id: 'zenicorp-toiture',
    name: 'ZeniCorp Toiture',
    description: 'Réparation et remplacement de toitures résidentielles et commerciales',
    url: 'https://zenicorp-toiture.vercel.app',
    external: true,
    icon: Building,
    color: 'from-amber-500 to-orange-400',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    stats: { visits: '1.2k', conversion: '6.7%' },
    status: 'Live',
    features: ['Résidentiel', 'Commercial', 'Urgence 24/7'],
    image: 'https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&w=800',
  },
  {
    id: 'zenicorp-asphalte',
    name: 'ZeniCorp Asphalte',
    description: 'Scellant, réparation de fissures et pavage professionnel',
    url: 'https://zenicorp-asphalte.vercel.app',
    external: true,
    icon: Truck,
    color: 'from-slate-500 to-gray-400',
    bgColor: 'bg-slate-50',
    borderColor: 'border-slate-200',
    stats: { visits: '950', conversion: '5.2%' },
    status: 'Live',
    features: ['Scellant', 'Réparation', 'Pavage'],
    image: 'https://images.pexels.com/photos/12274274/pexels-photo-12274274.jpeg?auto=compress&w=800',
  },
  {
    id: 'zenicorp-epoxy',
    name: 'ZeniCorp Époxy',
    description: 'Revêtements de sol époxy pour garages, commerces et industries',
    url: 'https://zenicorp-epoxy.vercel.app',
    external: true,
    icon: PaintBucket,
    color: 'from-indigo-500 to-purple-400',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    stats: { visits: '780', conversion: '7.1%' },
    status: 'Live',
    features: ['Résidentiel', 'Commercial', 'Industriel'],
    image: 'https://images.pexels.com/photos/2306171/pexels-photo-2306171.jpeg?auto=compress&w=800',
  },
];

const globalStats = [
  { label: 'Visites Totales', value: '7.1k+', change: '+23%', icon: Globe, color: 'from-blue-500 to-cyan-400' },
  { label: 'Taux Conversion', value: '8.4%', change: '+1.2%', icon: Target, color: 'from-emerald-500 to-teal-400' },
  { label: 'Projets Actifs', value: '5', change: '100%', icon: Activity, color: 'from-purple-500 to-pink-400' },
  { label: 'Satisfaction', value: '4.9/5', change: '+0.3', icon: Star, color: 'from-amber-500 to-orange-400' },
];

const recentActivity = [
  { project: 'ZeniCorp Isolation', action: 'Nouveau lead qualifié', time: '2 min', type: 'success' },
  { project: 'ZeniCorp Toiture', action: 'Soumission approuvée', time: '15 min', type: 'success' },
  { project: 'ZeniCorp Asphalte', action: 'Nouveau visiteur', time: '32 min', type: 'info' },
  { project: 'ZeniCorp Époxy', action: 'Demande de rappel', time: '1 h', type: 'warning' },
  { project: 'ZeniTech Dashboard', action: 'Rapport généré', time: '2 h', type: 'info' },
];

export default function ProjectsHubPage() {
  const currentTime = new Date().toLocaleString('fr-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-zenicorp-gray-50 via-white to-zenicorp-gray-50">
      {/* HEADER PREMIUM */}
      <header className="relative overflow-hidden bg-gradient-to-br from-zenicorp-gray-900 via-zenicorp-gray-800 to-zenicorp-gray-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-zenicorp-gold-500/5 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-zenicorp-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="container-zenicorp relative py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <ZeniCorpLogo size="xl" variant="gold" showText={true} />
                <div className="h-8 w-px bg-zenicorp-gold-500/30" />
                <div className="px-4 py-2 bg-zenicorp-gold-500/20 border border-zenicorp-gold-500/30 rounded-full backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4 text-zenicorp-gold-400" />
                    <span className="text-sm font-bold text-zenicorp-gold-300">HUB CENTRAL</span>
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-heading font-black text-white mb-4">
                Ecosystème <span className="text-gradient-gold">ZeniCorp</span>
              </h1>
              
              <p className="text-xl text-zenicorp-gray-300 max-w-2xl">
                Gérez et surveillez tous vos projets depuis un seul endroit. 
                Performance, analytics et conversions en temps réel.
              </p>
            </div>
            
            <div className="flex flex-col items-end gap-4">
              <div className="text-right">
                <p className="text-zenicorp-gray-400 text-sm">{currentTime}</p>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-emerald-300">Tous les systèmes opérationnels</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container-zenicorp py-12 space-y-12">
        {/* STATS GLOBALES */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-gradient-to-r from-zenicorp-gold-500 to-zenicorp-gold-400 rounded-xl">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-heading font-bold text-zenicorp-gray-900">Performance Globale</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {globalStats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="card-premium p-6 h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-2xl ${stat.bgColor || 'bg-zenicorp-gray-100'} group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                        <TrendingUp className="w-3 h-3" />
                        {stat.change}
                      </span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-3xl font-black text-zenicorp-gray-900 mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-zenicorp-gray-600">{stat.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GRILLE DE PROJETS */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl">
                <LayoutDashboard className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-zenicorp-gray-900">Vos Projets</h2>
            </div>
            <div className="flex items-center gap-2 text-sm text-zenicorp-gray-500">
              <Sparkles className="w-4 h-4 text-zenicorp-gold-500" />
              <span>{projects.length} actifs</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const LinkComponent = project.external ? 'a' : Link;
              const linkProps = project.external 
                ? { href: project.url, target: '_blank', rel: 'noopener noreferrer' }
                : { href: project.url };
              
              return (
                <LinkComponent
                  key={project.id}
                  {...linkProps}
                  className="group block"
                >
                  <div className="card-premium overflow-hidden h-full">
                    {/* Image Header */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-emerald-500/90 text-white text-xs font-bold rounded-full backdrop-blur-sm">
                        {project.status}
                      </div>
                      
                      {/* Icon & Title Overlay */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-3">
                        <div className={`p-2.5 bg-gradient-to-r ${project.color} rounded-xl shadow-lg`}>
                          <project.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg drop-shadow-lg">{project.name}</h3>
                          <div className="flex items-center gap-2 text-white/70 text-xs">
                            <ExternalLink className="w-3 h-3" />
                            <span>{project.external ? 'Site externe' : 'Dashboard'}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <p className="text-zenicorp-gray-600 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Features Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.features.map((feature) => (
                          <span 
                            key={feature}
                            className={`px-2 py-1 text-xs font-medium rounded-lg ${project.bgColor} text-zenicorp-gray-700`}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-zenicorp-gray-100">
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-lg font-bold text-zenicorp-gray-900">{project.stats.visits}</p>
                            <p className="text-xs text-zenicorp-gray-500">Visites</p>
                          </div>
                          <div className="w-px h-8 bg-zenicorp-gray-200" />
                          <div className="text-center">
                            <p className="text-lg font-bold text-zenicorp-gray-900">{project.stats.conversion}</p>
                            <p className="text-xs text-zenicorp-gray-500">Conversion</p>
                          </div>
                        </div>
                        
                        <div className={`p-2 rounded-full ${project.bgColor} group-hover:translate-x-1 transition-transform`}>
                          <ArrowRight className={`w-5 h-5 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </LinkComponent>
              );
            })}
          </div>
        </section>

        {/* DEUX COLONNES: ACTIVITÉ + QUICK LINKS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ACTIVITÉ RÉCENTE */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-400 rounded-xl">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-heading font-bold text-zenicorp-gray-900">Activité Récente</h2>
            </div>
            
            <div className="card-premium overflow-hidden">
              <div className="divide-y divide-zenicorp-gray-100">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 hover:bg-zenicorp-gray-50/50 transition-colors">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-emerald-500' :
                      activity.type === 'warning' ? 'bg-amber-500' :
                      'bg-blue-500'
                    }`} />
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-zenicorp-gray-900 truncate">
                        {activity.project}
                      </p>
                      <p className="text-xs text-zenicorp-gray-500">{activity.action}</p>
                    </div>
                    
                    <div className="flex items-center gap-1 text-xs text-zenicorp-gray-400">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-zenicorp-gray-100">
                <button className="w-full py-2 text-sm font-medium text-zenicorp-gold-600 hover:text-zenicorp-gold-700 transition-colors">
                  Voir toute l'activité →
                </button>
              </div>
            </div>
          </div>
          
          {/* QUICK LINKS */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-amber-500 to-orange-400 rounded-xl">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-heading font-bold text-zenicorp-gray-900">Accès Rapide</h2>
            </div>
            
            <div className="space-y-3">
              {[
                { label: 'Analytics Avancés', icon: Activity, desc: 'Rapports détaillés' },
                { label: 'Gestion des Leads', icon: Users, desc: 'CRM intégré' },
                { label: 'Paramètres', icon: Shield, desc: 'Configuration' },
                { label: 'Support', icon: Award, desc: 'Aide & documentation' },
              ].map((link) => (
                <button 
                  key={link.label}
                  className="w-full flex items-center gap-4 p-4 bg-white border border-zenicorp-gray-200 rounded-2xl hover:border-zenicorp-gold-300 hover:shadow-md transition-all group"
                >
                  <div className="p-2 bg-zenicorp-gold-50 rounded-xl group-hover:bg-zenicorp-gold-100 transition-colors">
                    <link.icon className="w-5 h-5 text-zenicorp-gold-600" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-medium text-zenicorp-gray-900">{link.label}</p>
                    <p className="text-xs text-zenicorp-gray-500">{link.desc}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-zenicorp-gray-400 group-hover:text-zenicorp-gold-500 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zenicorp-gray-900 via-zenicorp-gray-800 to-zenicorp-gray-900 p-8 lg:p-12">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-zenicorp-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>
          
          <div className="relative text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <ZeniCorpLogo size="lg" variant="gold" showText={false} />
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-heading font-black text-white mb-4">
              Prêt à <span className="text-gradient-gold">développer</span> votre présence ?
            </h2>
            
            <p className="text-zenicorp-gray-300 mb-8 text-lg">
              L'écosystème ZeniCorp vous offre tous les outils pour gérer et développer 
              votre entreprise de construction.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/dashboard"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-zenicorp-gold-500 to-zenicorp-gold-400 text-white font-bold rounded-2xl shadow-gold hover:shadow-glow transition-all hover:scale-105"
              >
                <LayoutDashboard className="w-5 h-5" />
                Accéder au Dashboard
              </Link>
              
              <a 
                href="https://github.com/Alexandre08626"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-2xl hover:bg-white/20 transition-all"
              >
                <ExternalLink className="w-5 h-5" />
                Voir sur GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
