import React from "react";
import { motion } from "framer-motion";

interface SettingsSectionProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const SettingsSection = ({
  title,
  description,
  children,
}: SettingsSectionProps) => (
  <div className="bg-[#151619] border border-[#1A1B1E] rounded-xl p-6">
    <div className="mb-6">
      <h3 className="text-lg font-bold text-white">{title}</h3>
      <p className="text-sm text-zinc-500 mt-1">{description}</p>
    </div>
    {children}
  </div>
);

interface ToggleSwitchProps {
  label: string;
  description: string;
  enabled: boolean;
  onChange: (val: boolean) => void;
}

export const ToggleSwitch = ({
  label,
  description,
  enabled,
  onChange,
}: ToggleSwitchProps) => (
  <div className="flex items-center justify-between">
    <div>
      <div className="text-sm font-medium text-white">{label}</div>

      <div className="text-xs text-zinc-500 mt-0.5">{description}</div>
    </div>

    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
        enabled ? "bg-emerald-500" : "bg-zinc-700"
      }`}
    >
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
        animate={{
          x: enabled ? 24 : 0,
        }}
      />
    </button>
  </div>
);

interface StyledInputProps {
  label: string;
  placeholder: string;
  type?: string;
  rightElement?: React.ReactNode;
}

export const StyledInput = ({
  label,
  placeholder,
  type = "text",
  rightElement,
}: StyledInputProps) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-white">{label}</label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#1A1B1E] border border-[#2A2B2E] rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all"
      />
      {rightElement && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {rightElement}
        </div>
      )}
    </div>
  </div>
);

interface ActionBtnProps {
  variant: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ActionBtn = ({
  variant,
  children,
  className = "",
  onClick,
}: ActionBtnProps) => {
  const styles = {
    primary: "bg-emerald-500 text-black hover:bg-emerald-400 font-semibold",
    secondary:
      "bg-[#1A1B1E] text-zinc-300 hover:bg-[#2A2B2E] border border-[#2A2B2E]",
    danger:
      "bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20",
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm transition-all ${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

interface PillSelectorProps {
  options: string[];
  selected: string;
  onChange: (val: string) => void;
}

export const PillSelector = ({
  options,
  selected,
  onChange,
}: PillSelectorProps) => (
  <div className="flex bg-[#1A1B1E] p-1 rounded-lg border border-[#2A2B2E]">
    {options.map((opt) => (
      <button
        key={opt}
        onClick={() => onChange(opt)}
        className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
          selected === opt
            ? "bg-[#2A2B2E] text-white shadow-sm"
            : "text-zinc-500 hover:text-white"
        }`}
      >
        {opt}
      </button>
    ))}
  </div>
);
