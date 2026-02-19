
import React from 'react';

interface StatsCardProps {
  label: string;
  subLabel?: string;
  value: number;
  color: 'indigo' | 'blue' | 'emerald';
}

export const StatsCard: React.FC<StatsCardProps> = ({ label, subLabel, value, color }) => {
  const colorClasses = {
    indigo: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    blue: 'bg-blue-50 text-blue-700 border-blue-100',
    emerald: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  };

  const valueClasses = {
    indigo: 'text-indigo-600',
    blue: 'text-blue-600',
    emerald: 'text-emerald-600',
  };

  return (
    <div className={`p-5 rounded-xl border-2 ${colorClasses[color]} text-center transition-all hover:scale-105 duration-200`}>
      <p className="text-xs uppercase tracking-wider font-bold opacity-80 mb-1">
        {label}
      </p>
      {subLabel && (
        <p className="text-[10px] font-medium opacity-60 mb-2 leading-none uppercase">
          {subLabel}
        </p>
      )}
      <p className={`text-4xl font-extrabold ${valueClasses[color]}`}>
        {value.toLocaleString()}
      </p>
    </div>
  );
};
