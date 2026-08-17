import { formatCurrency } from '@/lib/format';
import { Plus, Filter, Download, Search } from 'lucide-react';

const leads = [
  { name: 'Marc Tremblay', company: 'Immobilier Tremblay', source: 'Référence', value: 250000, score: 92, status: 'Qualifié' },
  { name: 'Sophie Gauthier', company: 'Gauthier Rénos', source: 'Site web', value: 85000, score: 78, status: 'Nouveau' },
  { name: 'Jean-Pierre Roy', company: 'JPR Développement', source: 'Outreach', value: 450000, score: 88, status: 'Proposal' },
  { name: 'Isabelle Fortin', company: 'Fortin & Associés', source: 'Partenariat', value: 120000, score: 64, status: 'Contacté' },
  { name: 'Louis Bouchard', company: 'LB Construction', source: 'Site web', value: 310000, score: 85, status: 'Qualifié' },
  { name: 'Émilie Rousseau', company: 'Rousseau Design', source: 'Social', value: 95000, score: 55, status: 'Nouveau' },
  { name: 'Karl Nadeau', company: 'Nadeau Immo', source: 'Référence', value: 180000, score: 71, status: 'Contacté' },
  { name: 'Hugo Lavoie', company: 'Lavoie & Fils', source: 'Outreach', value: 52000, score: 42, status: 'Perdu' },
];

const statusColors: Record<string, string> = {
  'Nouveau': 'badge-new',
  'Contacté': 'badge-new',
  'Qualifié': 'badge-qualified',
  'Proposal': 'badge-qualified',
  'Gagné': 'badge-won',
  'Perdu': 'badge-lost',
};

function scoreColor(score: number): string {
  if (score >= 80) return 'text-green-600';
  if (score >= 60) return 'text-yellow-600';
  return 'text-red-500';
}

export default function LeadsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="heading-2">Gestion des leads</h2>
          <p className="text-sm text-zenicorp-mediumGray mt-1">
            {leads.length} leads — scoring IA automatisé
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </button>
          <button className="btn-secondary">
            <Download className="w-4 h-4 mr-2" />
            Exporter
          </button>
          <button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Nouveau lead
          </button>
        </div>
      </div>

      <div className="relative">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-zenicorp-silver" />
        <input
          type="text"
          placeholder="Rechercher un lead (nom, entreprise, source)..."
          className="input-field pl-11"
        />
      </div>

      <div className="table-container">
        <table className="w-full text-sm">
          <thead className="table-header">
            <tr>
              <th className="px-5 py-3 text-left">Lead</th>
              <th className="px-5 py-3 text-left">Source</th>
              <th className="px-5 py-3 text-left">Valeur</th>
              <th className="px-5 py-3 text-left">Score IA</th>
              <th className="px-5 py-3 text-left">Statut</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {leads.map((lead) => (
              <tr key={lead.name} className="table-row">
                <td className="px-5 py-3">
                  <p className="font-medium text-zenicorp-black">{lead.name}</p>
                  <p className="text-xs text-zenicorp-mediumGray">{lead.company}</p>
                </td>
                <td className="px-5 py-3 text-zenicorp-mediumGray">{lead.source}</td>
                <td className="px-5 py-3 font-semibold text-zenicorp-black">{formatCurrency(lead.value)}</td>
                <td className="px-5 py-3">
                  <span className={`font-bold ${scoreColor(lead.score)}`}>{lead.score}</span>
                  <div className="w-16 h-1.5 bg-zenicorp-lightGray mt-1">
                    <div
                      className={`h-1.5 ${lead.score >= 80 ? 'bg-green-500' : lead.score >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
                      style={{ width: `${lead.score}%` }}
                    />
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span className={`badge ${statusColors[lead.status] ?? 'badge-new'}`}>{lead.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
