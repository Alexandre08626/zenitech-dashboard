import { formatCurrency } from '@/lib/format';
import { Plus, Filter, Download } from 'lucide-react';

const projects = [
  { name: 'Résidence Rive-Sud', client: 'Marc Tremblay', contractor: 'Construction Dubois', progress: 65, budget: 250000, status: 'En cours' },
  { name: 'Tour de bureaux Drummond', client: 'JPR Développement', contractor: 'Maçonnerie Fortin', progress: 30, budget: 450000, status: 'En cours' },
  { name: 'Rénovation condo NDG', client: 'Sophie Gauthier', contractor: 'Plomberie Girard', progress: 85, budget: 85000, status: 'En cours' },
  { name: 'Entrepôt Saint-Laurent', client: 'LB Construction', contractor: 'Construction Dubois', progress: 15, budget: 310000, status: 'En cours' },
  { name: 'Boutique Laurier Ouest', client: 'Émilie Rousseau', contractor: 'Charpente Bélanger', progress: 100, budget: 95000, status: 'Terminé' },
  { name: 'Condo Le Plateau', client: 'Karl Nadeau', contractor: 'Électrique Lamarche', progress: 45, budget: 180000, status: 'En cours' },
];

const statusClasses: Record<string, string> = {
  'En cours': 'badge-progress',
  'Terminé': 'badge-won',
  'En pause': 'badge-qualified',
  'Annulé': 'badge-lost',
};

export default function ProjectsPage() {
  const totalBudget = projects.reduce((sum, p) => sum + p.budget, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="heading-2">Gestion de projets</h2>
          <p className="text-sm text-zenicorp-mediumGray mt-1">
            {projects.length} projets — budget total {formatCurrency(totalBudget)}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary">
            <Download className="w-4 h-4 mr-2" />
            Exporter
          </button>
          <button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Nouveau projet
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="w-full text-sm">
          <thead className="table-header">
            <tr>
              <th className="px-5 py-3 text-left">Projet</th>
              <th className="px-5 py-3 text-left">Client</th>
              <th className="px-5 py-3 text-left">Contractor</th>
              <th className="px-5 py-3 text-left">Avancement</th>
              <th className="px-5 py-3 text-left">Budget</th>
              <th className="px-5 py-3 text-left">Statut</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {projects.map((project) => (
              <tr key={project.name} className="table-row">
                <td className="px-5 py-3 font-medium text-zenicorp-black">{project.name}</td>
                <td className="px-5 py-3 text-zenicorp-mediumGray">{project.client}</td>
                <td className="px-5 py-3 text-zenicorp-mediumGray">{project.contractor}</td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1.5 bg-zenicorp-lightGray">
                      <div className="h-1.5 bg-zenicorp-gold" style={{ width: `${project.progress}%` }} />
                    </div>
                    <span className="text-xs text-zenicorp-mediumGray">{project.progress}%</span>
                  </div>
                </td>
                <td className="px-5 py-3 font-semibold text-zenicorp-black">{formatCurrency(project.budget)}</td>
                <td className="px-5 py-3">
                  <span className={`badge ${statusClasses[project.status] ?? 'badge-new'}`}>{project.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
