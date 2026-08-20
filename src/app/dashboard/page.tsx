import { formatCurrency } from '@/lib/format';
import {
  Building2,
  Target,
  Users,
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Star,
  Calendar,
  Clock,
  Award,
  Activity,
  BarChart3,
  Briefcase,
  MapPin,
  Phone,
  Mail,
  Crown,
  Sparkles,
} from 'lucide-react';
import ZeniCorpLogo from '@/components/ui/ZeniCorpLogo';

const stats = [
  { 
    label: 'Projets Actifs', 
    value: 12, 
    change: 8.3, 
    icon: Building2,
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-50',
    description: 'En cours de réalisation'
  },
  { 
    label: 'Leads Qualifiés', 
    value: 48, 
    change: 12.5, 
    icon: Target,
    color: 'from-emerald-500 to-teal-400',
    bgColor: 'bg-emerald-50',
    description: 'Prêts pour conversion'
  },
  { 
    label: 'Partenaires Actifs', 
    value: 26, 
    change: 4.1, 
    icon: Users,
    color: 'from-purple-500 to-pink-400',
    bgColor: 'bg-purple-50',
    description: 'Réseau ZeniCorp'
  },
  { 
    label: 'Pipeline Total', 
    value: formatCurrency(1850000), 
    change: -2.4, 
    icon: Wallet,
    color: 'from-amber-500 to-orange-400',
    bgColor: 'bg-amber-50',
    description: 'Valeur potentielle'
  },
];

const recentLeads = [
  { 
    name: 'Marc Tremblay', 
    company: 'Immobilier Tremblay', 
    value: 250000, 
    status: 'Qualifié',
    avatar: 'MT',
    location: 'Montréal, QC',
    priority: 'high'
  },
  { 
    name: 'Sophie Gauthier', 
    company: 'Gauthier Rénos', 
    value: 85000, 
    status: 'Nouveau',
    avatar: 'SG',
    location: 'Laval, QC',
    priority: 'medium'
  },
  { 
    name: 'Jean-Pierre Roy', 
    company: 'JPR Développement', 
    value: 450000, 
    status: 'Proposal',
    avatar: 'JR',
    location: 'Québec, QC',
    priority: 'high'
  },
  { 
    name: 'Isabelle Fortin', 
    company: 'Fortin & Associés', 
    value: 120000, 
    status: 'Contacté',
    avatar: 'IF',
    location: 'Sherbrooke, QC',
    priority: 'medium'
  },
  { 
    name: 'Louis Bouchard', 
    company: 'LB Construction', 
    value: 310000, 
    status: 'Qualifié',
    avatar: 'LB',
    location: 'Trois-Rivières, QC',
    priority: 'high'
  },
];

const activeProjects = [
  { 
    name: 'Résidence Rive-Sud Premium', 
    client: 'Marc Tremblay', 
    progress: 65, 
    budget: 250000,
    type: 'Isolation & Toiture',
    deadline: '2024-03-15',
    status: 'En cours'
  },
  { 
    name: 'Tour de Bureaux Drummond', 
    client: 'JPR Développement', 
    progress: 30, 
    budget: 450000,
    type: 'Commercial Complet',
    deadline: '2024-05-20',
    status: 'Planification'
  },
  { 
    name: 'Rénovation Condo NDG', 
    client: 'Sophie Gauthier', 
    progress: 85, 
    budget: 85000,
    type: 'Époxy & Asphalte',
    deadline: '2024-02-28',
    status: 'Finition'
  },
  { 
    name: 'Entrepôt Saint-Laurent', 
    client: 'LB Construction', 
    progress: 15, 
    budget: 310000,
    type: 'Industriel',
    deadline: '2024-06-10',
    status: 'Démarrage'
  },
];

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  'Nouveau': { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
  'Contacté': { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' },
  'Qualifié': { bg: 'bg-emerald-100', text: 'text-emerald-800', border: 'border-emerald-200' },
  'Proposal': { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200' },
  'Gagné': { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
};

const priorityColors: Record<string, string> = {
  'high': 'bg-red-100 text-red-800 border-red-200',
  'medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
  'low': 'bg-gray-100 text-gray-800 border-gray-200',
};

export default function DashboardHomePage() {
  const currentTime = new Date().toLocaleString('fr-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="space-y-8">
      {/* HERO SECTION AVEC LOGO */}
      <div className="relative overflow-hidden bg-gradient-to-br from-zenicorp-gray-900 via-zenicorp-gray-800 to-zenicorp-gray-900 rounded-3xl p-8 text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-zenicorp-gold-500/10 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-zenicorp-gold-500/5 rounded-full blur-3xl -translate-y-48 translate-x-48" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <ZeniCorpLogo size="xl" variant="gold" showText={true} />
              <div className="px-4 py-2 bg-zenicorp-gold-500/20 border border-zenicorp-gold-500/30 rounded-full">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-zenicorp-gold-400" />
                  <span className="text-sm font-bold text-zenicorp-gold-300">DASHBOARD PREMIUM</span>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-heading font-black mb-4">
              Bienvenue, <span className="text-gradient-gold">Alexandre</span>
            </h1>
            
            <p className="text-xl text-zenicorp-gray-300 mb-6 max-w-2xl">
              Votre centre de commande ZeniCorp — Pilotez l'excellence à travers chaque projet, 
              de la prospection à la livraison.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <button className="btn-primary">
                <Zap className="w-5 h-5" />
                Nouveau Lead Premium
              </button>
              <button className="btn-secondary">
                <BarChart3 className="w-5 h-5" />
                Analytics IA
              </button>
              <div className="flex items-center gap-2 text-sm text-zenicorp-gray-400">
                <Clock className="w-4 h-4" />
                {currentTime}
              </div>
            </div>
          </div>
          
          {/* Status Panel */}
          <div className="lg:w-80">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-white">Statut Système</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-xs text-zenicorp-gray-300">Opérationnel</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-zenicorp-gray-400">Performance IA</span>
                  <span className="text-emerald-400 font-medium">98.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zenicorp-gray-400">Sync Données</span>
                  <span className="text-zenicorp-gold-400 font-medium">Temps réel</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-zenicorp-gray-400">Sécurité</span>
                  <span className="text-emerald-400 font-medium">Sécurisé</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MÉTRIQUES PREMIUM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={stat.label} className="group">
            <div className="card-premium p-6 h-full">
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-2xl ${stat.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className={`w-6 h-6 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-bold ${
                    stat.change >= 0 ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {stat.change >= 0 ? (
                      <ArrowUpRight className="w-3 h-3" />
                    ) : (
                      <ArrowDownRight className="w-3 h-3" />
                    )}
                    {Math.abs(stat.change)}%
                  </div>
                </div>
              </div>
              
              <div>
                <p className="text-3xl font-black text-zenicorp-gray-900 mb-2">{stat.value}</p>
                <p className="text-sm font-semibold text-zenicorp-gray-700 mb-1">{stat.label}</p>
                <p className="text-xs text-zenicorp-gray-500">{stat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* LEADS PREMIUM */}
        <div className="xl:col-span-2">
          <div className="card-premium overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-zenicorp-gray-200 bg-gradient-to-r from-zenicorp-gray-50 to-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-xl">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-zenicorp-gray-900">Leads Prioritaires</h3>
                  <p className="text-sm text-zenicorp-gray-600">Pipeline haute valeur</p>
                </div>
              </div>
              <button className="text-sm font-medium text-zenicorp-gold-600 hover:text-zenicorp-gold-700">
                Gérer tout →
              </button>
            </div>
            
            <div className="divide-y divide-zenicorp-gray-100">
              {recentLeads.map((lead, index) => (
                <div key={lead.name} className="p-6 hover:bg-zenicorp-gray-50/50 transition-colors group">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-zenicorp-gold-400 to-zenicorp-gold-600 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-zenicorp-gray-900 font-bold text-sm">{lead.avatar}</span>
                      </div>
                      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                        lead.priority === 'high' ? 'bg-red-400' : 'bg-yellow-400'
                      }`} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-bold text-zenicorp-gray-900 truncate">{lead.name}</h4>
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border ${
                          statusColors[lead.status]?.bg || 'bg-gray-100'
                        } ${statusColors[lead.status]?.text || 'text-gray-800'} ${
                          statusColors[lead.status]?.border || 'border-gray-200'
                        }`}>
                          <Sparkles className="w-3 h-3" />
                          {lead.status}
                        </span>
                      </div>
                      
                      <p className="text-sm text-zenicorp-gray-600 mb-2">{lead.company}</p>
                      
                      <div className="flex items-center gap-4 text-xs text-zenicorp-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {lead.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Wallet className="w-3 h-3" />
                          {formatCurrency(lead.value)}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-zenicorp-gray-400 hover:text-zenicorp-gray-600 hover:bg-zenicorp-gray-100 rounded-lg">
                        <Phone className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-zenicorp-gray-400 hover:text-zenicorp-gray-600 hover:bg-zenicorp-gray-100 rounded-lg">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* PROJETS ACTIFS */}
        <div>
          <div className="card-premium overflow-hidden">
            <div className="flex items-center justify-between px-6 py-5 border-b border-zenicorp-gray-200 bg-gradient-to-r from-zenicorp-gray-50 to-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-zenicorp-gray-900">Projets Actifs</h3>
                  <p className="text-sm text-zenicorp-gray-600">En cours d'exécution</p>
                </div>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {activeProjects.map((project, index) => (
                <div key={project.name} className="group">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h4 className="font-bold text-zenicorp-gray-900 text-sm mb-1">{project.name}</h4>
                      <p className="text-xs text-zenicorp-gray-600">{project.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-zenicorp-gray-900">{project.progress}%</div>
                      <div className="text-xs text-zenicorp-gray-500">{project.status}</div>
                    </div>
                  </div>
                  
                  <div className="w-full h-3 bg-zenicorp-gray-200 rounded-full overflow-hidden mb-3">
                    <div
                      className="h-full bg-gradient-to-r from-zenicorp-gold-500 to-zenicorp-gold-400 rounded-full transition-all duration-1000"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-zenicorp-gray-600">
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {project.client}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(project.deadline).toLocaleDateString('fr-CA')}
                    </div>
                  </div>
                  
                  <div className="mt-2 text-right">
                    <span className="text-sm font-bold text-zenicorp-gray-900">{formatCurrency(project.budget)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BANDEAU INTELLIGENCE ARTIFICIELLE */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zenicorp-gray-900 via-zenicorp-gray-800 to-zenicorp-gray-900 rounded-3xl p-8">
        {/* Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-zenicorp-gold-500/10 to-transparent" />
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-zenicorp-gold-500/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-zenicorp-gold-500 to-zenicorp-gold-400 rounded-2xl">
                <Activity className="w-6 h-6 text-zenicorp-gray-900" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Assistant IA ZeniCorp</h3>
                <p className="text-zenicorp-gray-400">Intelligence artificielle avancée</p>
              </div>
            </div>
            
            <p className="text-zenicorp-gray-300 mb-6 max-w-2xl">
              Notre IA analyse en temps réel vos leads, optimise le matching avec vos partenaires, 
              et prédit avec précision vos revenus futurs. L'excellence ZeniCorp, amplifiée par l'intelligence artificielle.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-emerald-300">IA Active</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-zenicorp-gold-500/20 border border-zenicorp-gold-500/30 rounded-xl">
              <TrendingUp className="w-4 h-4 text-zenicorp-gold-400" />
              <span className="text-sm font-medium text-zenicorp-gold-300">Analytics Temps Réel</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-purple-500/20 border border-purple-500/30 rounded-xl">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Prédictions Avancées</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
