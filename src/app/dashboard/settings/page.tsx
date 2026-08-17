'use client';

import { useState } from 'react';
import { Save, User, Bell, Shield, Palette } from 'lucide-react';

type SettingsTab = 'profile' | 'notifications' | 'security' | 'apparence';

const tabs: { id: SettingsTab; label: string; icon: typeof User }[] = [
  { id: 'profile', label: 'Profil', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Sécurité', icon: Shield },
  { id: 'apparence', label: 'Apparence', icon: Palette },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');

  return (
    <div className="space-y-6">
      <div>
        <h2 className="heading-2">Paramètres</h2>
        <p className="text-sm text-zenicorp-mediumGray mt-1">
          Gérez votre profil, vos notifications et la sécurité de votre compte.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tabs */}
        <nav className="lg:w-56 flex-shrink-0 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-zenicorp-black text-white'
                  : 'text-zenicorp-mediumGray hover:bg-zenicorp-lightGray hover:text-zenicorp-black'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Contenu */}
        <div className="flex-1 card p-6">
          {activeTab === 'profile' && (
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-zenicorp-black">Informations du profil</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label">Prénom</label>
                  <input type="text" className="input-field" defaultValue="Alexandre" />
                </div>
                <div>
                  <label className="label">Nom</label>
                  <input type="text" className="input-field" defaultValue="Dubois" />
                </div>
                <div>
                  <label className="label">Courriel</label>
                  <input type="email" className="input-field" defaultValue="alexandre@zenicorp.ca" />
                </div>
                <div>
                  <label className="label">Téléphone</label>
                  <input type="tel" className="input-field" defaultValue="(514) 555-0134" />
                </div>
              </div>
              <button className="btn-primary mt-2">
                <Save className="w-4 h-4 mr-2" />
                Enregistrer
              </button>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-zenicorp-black">Notifications</h3>
              {['Nouveau lead qualifié', 'Matching contractor', 'Échéance de projet', 'Rapport hebdomadaire'].map((item) => (
                <div key={item} className="flex items-center justify-between py-3 border-b border-zenicorp-border last:border-0">
                  <span className="text-sm text-zenicorp-black">{item}</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-zenicorp-black" />
                </div>
              ))}
              <button className="btn-primary">
                <Save className="w-4 h-4 mr-2" />
                Enregistrer
              </button>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-zenicorp-black">Sécurité</h3>
              <div>
                <label className="label">Mot de passe actuel</label>
                <input type="password" className="input-field" placeholder="••••••••" />
              </div>
              <div>
                <label className="label">Nouveau mot de passe</label>
                <input type="password" className="input-field" placeholder="••••••••" />
              </div>
              <div>
                <label className="label">Confirmer le mot de passe</label>
                <input type="password" className="input-field" placeholder="••••••••" />
              </div>
              <button className="btn-primary">
                <Shield className="w-4 h-4 mr-2" />
                Mettre à jour
              </button>
            </div>
          )}

          {activeTab === 'apparence' && (
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-zenicorp-black">Apparence</h3>
              <div className="flex items-center justify-between py-3 border-b border-zenicorp-border">
                <span className="text-sm text-zenicorp-black">Thème sombre</span>
                <input type="checkbox" className="w-4 h-4 accent-zenicorp-black" />
              </div>
              <div className="flex items-center justify-between py-3 border-b border-zenicorp-border">
                <span className="text-sm text-zenicorp-black">Langue</span>
                <select className="input-field !w-48">
                  <option>Français (Canada)</option>
                  <option>English (Canada)</option>
                </select>
              </div>
              <button className="btn-primary">
                <Save className="w-4 h-4 mr-2" />
                Enregistrer
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
