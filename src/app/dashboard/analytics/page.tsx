'use client';

import { formatCurrency } from '@/lib/format';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { TrendingUp, Users, Wallet, Award } from 'lucide-react';

const revenueData = [
  { month: 'Jan', revenu: 120000, cible: 100000 },
  { month: 'Fév', revenu: 145000, cible: 110000 },
  { month: 'Mar', revenu: 130000, cible: 120000 },
  { month: 'Avr', revenu: 170000, cible: 130000 },
  { month: 'Mai', revenu: 190000, cible: 140000 },
  { month: 'Juin', revenu: 165000, cible: 150000 },
  { month: 'Juil', revenu: 210000, cible: 160000 },
  { month: 'Août', revenu: 235000, cible: 170000 },
];

const leadSources = [
  { name: 'Site web', value: 34 },
  { name: 'Références', value: 26 },
  { name: 'Outreach', value: 18 },
  { name: 'Partenariats', value: 14 },
  { name: 'Social', value: 8 },
];

const conversionData = [
  { month: 'Jan', taux: 18 },
  { month: 'Fév', taux: 22 },
  { month: 'Mar', taux: 20 },
  { month: 'Avr', taux: 27 },
  { month: 'Mai', taux: 31 },
  { month: 'Juin', taux: 29 },
  { month: 'Juil', taux: 35 },
  { month: 'Août', taux: 38 },
];

const SOURCE_COLORS = ['#000000', '#D4AF37', '#C0C0C0', '#333333', '#1A1A1A'];

const kpis = [
  { label: 'Revenus YTD', value: formatCurrency(1365000), change: 18.2, icon: Wallet },
  { label: 'Taux de conversion', value: '38%', change: 9.5, icon: TrendingUp },
  { label: 'Leads qualifiés', value: '312', change: 14.7, icon: Users },
  { label: 'Score moyen leads', value: '76', change: 4.3, icon: Award },
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="heading-2">Analytics & Rapports</h2>
        <p className="text-sm text-zenicorp-mediumGray mt-1">
          Performance ZeniCorp — données consolidées en temps réel.
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zenicorp-mediumGray">{kpi.label}</span>
              <span className="w-9 h-9 bg-zenicorp-black text-zenicorp-gold rounded-none flex items-center justify-center">
                <kpi.icon className="w-5 h-5" />
              </span>
            </div>
            <p className="text-2xl font-bold text-zenicorp-black mt-3 font-heading">{kpi.value}</p>
            <p className="text-xs text-green-600 font-medium mt-2">+{kpi.change}% vs période précédente</p>
          </div>
        ))}
      </div>

      {/* Revenus */}
      <div className="card p-5">
        <h3 className="font-heading font-semibold text-zenicorp-black mb-4">Revenus vs objectifs</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#D4AF37" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
              <XAxis dataKey="month" stroke="#333333" fontSize={12} />
              <YAxis stroke="#333333" fontSize={12} tickFormatter={(v: number) => `${Math.round(v / 1000)}k`} />
              <Tooltip formatter={(v: number) => formatCurrency(v)} />
              <Legend />
              <Area type="monotone" dataKey="revenu" name="Revenus" stroke="#D4AF37" fill="url(#rev)" strokeWidth={2} />
              <Area type="monotone" dataKey="cible" name="Objectif" stroke="#000000" fill="none" strokeDasharray="5 5" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sources leads */}
        <div className="card p-5">
          <h3 className="font-heading font-semibold text-zenicorp-black mb-4">Sources des leads</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={leadSources} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} label>
                  {leadSources.map((entry, index) => (
                    <Cell key={entry.name} fill={SOURCE_COLORS[index % SOURCE_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v: number) => `${v}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Conversion */}
        <div className="card p-5">
          <h3 className="font-heading font-semibold text-zenicorp-black mb-4">Taux de conversion</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                <XAxis dataKey="month" stroke="#333333" fontSize={12} />
                <YAxis stroke="#333333" fontSize={12} tickFormatter={(v: number) => `${v}%`} />
                <Tooltip formatter={(v: number) => `${v}%`} />
                <Bar dataKey="taux" name="Conversion" fill="#D4AF37" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
