'use client';

import { useState } from 'react';
import { Save, Camera, User, Mail, Phone, MapPin } from 'lucide-react';

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="heading-2">Profil</h2>
        <p className="text-sm text-zenicorp-mediumGray mt-1">
          Vos informations personnelles et coordonnées.
        </p>
      </div>

      <div className="card p-6">
        {/* Avatar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="relative">
            <div className="w-20 h-20 bg-zenicorp-gold rounded-full flex items-center justify-center">
              <span className="text-zenicorp-black font-heading font-bold text-2xl">AD</span>
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-zenicorp-black text-zenicorp-gold rounded-full flex items-center justify-center">
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>
          <div>
            <p className="font-heading font-semibold text-zenicorp-black text-lg">Alexandre Dubois</p>
            <p className="text-sm text-zenicorp-mediumGray">Super Admin — ZeniCorp</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="label"><User className="w-3.5 h-3.5 inline mr-1" />Prénom</label>
            <input type="text" className="input-field" defaultValue="Alexandre" />
          </div>
          <div>
            <label className="label"><User className="w-3.5 h-3.5 inline mr-1" />Nom</label>
            <input type="text" className="input-field" defaultValue="Dubois" />
          </div>
          <div>
            <label className="label"><Mail className="w-3.5 h-3.5 inline mr-1" />Courriel</label>
            <input type="email" className="input-field" defaultValue="alexandre@zenicorp.ca" />
          </div>
          <div>
            <label className="label"><Phone className="w-3.5 h-3.5 inline mr-1" />Téléphone</label>
            <input type="tel" className="input-field" defaultValue="(514) 555-0134" />
          </div>
          <div className="sm:col-span-2">
            <label className="label"><MapPin className="w-3.5 h-3.5 inline mr-1" />Adresse</label>
            <input type="text" className="input-field" defaultValue="Montréal, Québec, Canada" />
          </div>
        </div>

        <div className="flex items-center gap-3 mt-6">
          <button
            className="btn-primary"
            onClick={() => {
              setSaved(true);
              setTimeout(() => setSaved(false), 2500);
            }}
          >
            <Save className="w-4 h-4 mr-2" />
            Enregistrer
          </button>
          {saved && <span className="text-sm text-green-600 font-medium">Profil enregistré ✓</span>}
        </div>
      </div>
    </div>
  );
}
