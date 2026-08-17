import { formatCurrency } from '@/lib/format';
import {
  Building2,
  Target,
  Users,
  Wallet,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react';

const stats = [
  { label: 'Projets actifs', value: 12, change: 8.3, icon: Building2 },
  { label: 'Leads ouverts', value: 48, change: 12.5, icon: Target },
  { label: 'Contractors actifs', value: 26, change: 4.1, icon: Users },
  { label: 'Valeur du pipeline', value: formatCurrency(1850000), change: -2.4, icon: Wallet },
];

const recentLeads = [
  { name: 'Marc Tremblay', company: 'Immobilier Tremblay', value: 250000, status: 'Qualifié' },
  { name: 'Sophie Gauthier', company: 'Gauthier Rénos', value: 85000, status: 'Nouveau' },
  { name: 'Jean-Pierre Roy', company: 'JPR Développement', value: 450000, status: 'Proposal' },
  { name: 'Isabelle Fortin', company: 'Fortin & Associés', value: 120000, status: 'Contacté' },
  { name: 'Louis Bouchard', company: 'LB Construction', value: 310000, status: 'Qualifié' },
];

const activeProjects = [
  { name: 'Résidence Rive-Sud', client: 'Marc Tremblay', progress: 65, budget: 250000 },
  { name: 'Tour de bureaux Drummond', client: 'JPR Développement', progress: 30, budget: 450000 },
  { name: 'Rénovation condo NDG', client: 'Sophie Gauthier', progress: 85, budget: 85000 },
  { name: 'Entrepôt Saint-Laurent', client: 'LB Construction', progress: 15, budget: 310000 },
];

const statusColors: Record<string, string> = {
  'Nouveau': 'badge-new',
  'Contacté': 'badge-new',
  'Qualifié': 'badge-qualified',
  'Proposal': 'badge-qualified',
  'Gagné': 'badge-won',
};

export default function DashboardHomePage() {
  return (
    <div className="space-y-6">
      {/* Bienvenue */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="heading-2">Tableau de bord</h2>
          <p className="text-sm text-zenicorp-mediumGray mt-1">
            Vue d'ensemble de votre activité ZeniCorp — mis à jour à l'instant.
          </p>
        </div>
        <button className="btn-primary">
          <Target className="w-4 h-4 mr-2" />
          Nouveau lead
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zenicorp-mediumGray">{stat.label}</span>
              <span className="w-9 h-9 bg-zenicorp-black text-zenicorp-gold rounded-none flex items-center justify-center">
                <stat.icon className="w-5 h-5" />
              </span>
            </div>
            <p className="text-2xl font-bold text-zenicorp-black mt-3 font-heading">{stat.value}</p>
            <div className="flex items-center gap-1 mt-2 text-sm">
              {stat.change >= 0 ? (
                <ArrowUpRight className="w-4 h-4 text-green-600" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-600" />
              )}
              <span className={stat.change >= 0 ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>
                {Math.abs(stat.change)}%
              </span>
              <span className="text-zenicorp-silver text-xs">vs mois dernier</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Leads récents */}
        <div className="card">
          <div className="flex items-center justify-between px-5 py-4 border-b border-zenicorp-border">
            <h3 className="font-heading font-semibold text-zenicorp-black">Leads récents</h3>
            <a href="/dashboard/leads" className="text-sm text-zenicorp-gold hover:underline">
              Tout voir
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.name} className="table-row">
                    <td className="px-5 py-3">
                      <p className="font-medium text-zenicorp-black">{lead.name}</p>
                      <p className="text-xs text-zenicorp-mediumGray">{lead.company}</p>
                    </td>
                    <td className="px-5 py-3 text-zenicorp-mediumGray whitespace-nowrap">
                      {formatCurrency(lead.value)}
                    </td>
                    <td className="px-5 py-3 text-right">
                      <span className={`badge ${statusColors[lead.status] ?? 'badge-new'}`}>{lead.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Projets actifs */}
        <div className="card">
          <div className="flex items-center justify-between px-5 py-4 border-b border-zenicorp-border">
            <h3 className="font-heading font-semibold text-zenicorp-black">Projets en cours</h3>
            <a href="/dashboard/projects" className="text-sm text-zenicorp-gold hover:underline">
              Tout voir
            </a>
          </div>
          <div className="p-5 space-y-4">
            {activeProjects.map((project) => (
              <div key={project.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="font-medium text-zenicorp-black">{project.name}</p>
                  <p className="text-xs text-zenicorp-mediumGray">{project.progress}%</p>
                </div>
                <div className="w-full h-2 bg-zenicorp-lightGray">
                  <div
                    className="h-2 bg-zenicorp-gold"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between mt-1.5 text-xs text-zenicorp-mediumGray">
                  <span>{project.client}</span>
                  <span>{formatCurrency(project.budget)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bandeau bas */}
      <div className="bg-zenicorp-black text-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="font-heading font-semibold text-xl">Assistant IA ZeniCorp</p>
          <p className="text-sm text-zenicorp-silver mt-1">
            Laissez l'IA qualifier vos leads, matcher vos contractors et prédire vos revenus.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <TrendingUp className="w-5 h-5 text-zenicorp-gold" />
          <span className="text-sm text-zenicorp-gold font-medium">Analytics en direct</span>
        </div>
      </div>
    </div>
  );
}
