import { formatCurrency } from '@/lib/format';
import { Plus } from 'lucide-react';

type CrmStage = 'nouveau' | 'contacte' | 'qualifie' | 'proposition' | 'gagne' | 'perdu';

interface CrmLead {
  name: string;
  company: string;
  value: number;
  stage: CrmStage;
  initials: string;
}

const pipeline: Record<string, CrmLead[]> = {
  'Nouveau': [
    { name: 'Émilie Rousseau', company: 'Rousseau Design', value: 95000, stage: 'nouveau', initials: 'ER' },
    { name: 'Karl Nadeau', company: 'Nadeau Immo', value: 180000, stage: 'nouveau', initials: 'KN' },
  ],
  'Contacté': [
    { name: 'Isabelle Fortin', company: 'Fortin & Associés', value: 120000, stage: 'contacte', initials: 'IF' },
  ],
  'Qualifié': [
    { name: 'Marc Tremblay', company: 'Immobilier Tremblay', value: 250000, stage: 'qualifie', initials: 'MT' },
    { name: 'Louis Bouchard', company: 'LB Construction', value: 310000, stage: 'qualifie', initials: 'LB' },
  ],
  'Proposition': [
    { name: 'Jean-Pierre Roy', company: 'JPR Développement', value: 450000, stage: 'proposition', initials: 'JR' },
  ],
  'Gagné': [
    { name: 'Sophie Gauthier', company: 'Gauthier Rénos', value: 85000, stage: 'gagne', initials: 'SG' },
  ],
  'Perdu': [],
};

const stageClasses: Record<string, string> = {
  'Nouveau': 'badge-new',
  'Contacté': 'badge-new',
  'Qualifié': 'badge-qualified',
  'Proposition': 'badge-qualified',
  'Gagné': 'badge-won',
  'Perdu': 'badge-lost',
};

export default function CrmPage() {
  const totalPipeline = Object.values(pipeline)
    .flat()
    .filter((l) => l.stage !== 'gagne' && l.stage !== 'perdu')
    .reduce((sum, l) => sum + l.value, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="heading-2">CRM — Pipeline</h2>
          <p className="text-sm text-zenicorp-mediumGray mt-1">
            Valeur totale du pipeline : <span className="font-semibold text-zenicorp-black">{formatCurrency(totalPipeline)}</span>
          </p>
        </div>
        <button className="btn-primary">
          <Plus className="w-4 h-4 mr-2" />
          Ajouter au pipeline
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {Object.entries(pipeline).map(([stage, leads]) => (
          <div key={stage} className="bg-zenicorp-lightGray p-4 min-h-[200px]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-heading font-semibold text-zenicorp-black text-lg">{stage}</h3>
              <span className={`badge ${stageClasses[stage] ?? 'badge-new'}`}>{leads.length}</span>
            </div>
            <div className="space-y-3">
              {leads.map((lead) => (
                <div key={lead.name} className="card p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-zenicorp-black text-zenicorp-gold rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0">
                      {lead.initials}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-zenicorp-black text-sm truncate">{lead.name}</p>
                      <p className="text-xs text-zenicorp-mediumGray truncate">{lead.company}</p>
                      <p className="text-sm font-semibold text-zenicorp-gold mt-1.5">{formatCurrency(lead.value)}</p>
                    </div>
                  </div>
                </div>
              ))}
              {leads.length === 0 && (
                <p className="text-xs text-zenicorp-silver text-center py-4">Aucun lead dans cette étape</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
