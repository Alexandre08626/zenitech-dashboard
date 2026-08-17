import { Plus, Filter, Star, MapPin } from 'lucide-react';

const contractors = [
  { company: 'Construction Dubois', contact: 'Éric Dubois', trades: ['Génie civil', 'Excavation'], rating: 4.8, projects: 12, status: 'Disponible' },
  { company: 'Électrique Lamarche', contact: 'Julie Lamarche', trades: ['Électricité'], rating: 4.9, projects: 8, status: 'Disponible' },
  { company: 'Plomberie Girard', contact: 'Martin Girard', trades: ['Plomberie', 'Chauffage'], rating: 4.6, projects: 15, status: 'Occupé' },
  { company: 'Charpente Bélanger', contact: 'Simon Bélanger', trades: ['Charpente', 'Menuiserie'], rating: 4.7, projects: 9, status: 'Disponible' },
  { company: 'Couvreur St-Laurent', contact: 'Patrick St-Laurent', trades: ['Toiture'], rating: 4.5, projects: 6, status: 'Disponible' },
  { company: 'Maçonnerie Fortin', contact: 'Denis Fortin', trades: ['Maçonnerie', 'Béton'], rating: 4.4, projects: 11, status: 'Inactif' },
];

const statusClasses: Record<string, string> = {
  'Disponible': 'badge-won',
  'Occupé': 'badge-progress',
  'Inactif': 'badge-lost',
};

export default function ContractorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="heading-2">Réseau d'entrepreneurs</h2>
          <p className="text-sm text-zenicorp-mediumGray mt-1">
            {contractors.length} contractors — matching IA avec vos projets
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary">
            <Filter className="w-4 h-4 mr-2" />
            Filtres
          </button>
          <button className="btn-primary">
            <Plus className="w-4 h-4 mr-2" />
            Ajouter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {contractors.map((contractor) => (
          <div key={contractor.company} className="card p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-heading font-semibold text-zenicorp-black">{contractor.company}</h3>
                <p className="text-sm text-zenicorp-mediumGray mt-0.5">{contractor.contact}</p>
              </div>
              <span className={`badge ${statusClasses[contractor.status] ?? 'badge-new'}`}>
                {contractor.status}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {contractor.trades.map((trade) => (
                <span key={trade} className="badge bg-zenicorp-black text-zenicorp-gold">
                  {trade}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4 pt-4 border-t border-zenicorp-border">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-zenicorp-gold fill-zenicorp-gold" />
                <span className="font-semibold text-zenicorp-black">{contractor.rating}</span>
              </div>
              <span className="text-sm text-zenicorp-mediumGray">{contractor.projects} projets</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
