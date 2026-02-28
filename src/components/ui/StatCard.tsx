import React from "react";
import { LucideIcon } from "lucide-react";
import { Card } from "./Card";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: LucideIcon;
}

export const StatCard = ({ title, value, change, icon: Icon }: StatCardProps) => (
  <Card className="p-6">
    <div className="flex items-center justify-between mb-4">
      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
        <Icon size={20} className="text-emerald-500" />
      </div>
      <span
        className={`text-xs font-mono px-2 py-1 rounded ${
          change >= 0
            ? "bg-emerald-500/10 text-emerald-400"
            : "bg-red-500/10 text-red-400"
        }`}
      >
        {change > 0 ? "+" : ""}
        {change}%
      </span>
    </div>
    <div>
      <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
        {title}
      </p>
      <h3 className="text-2xl font-bold text-white tracking-tight">
        {value}
      </h3>
    </div>
  </Card>
);
