import React from "react";

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
  <div className="bg-[#151619] border border-[#1A1B1E] rounded-xl p-6 transition-colors hover:border-[#2A2B2E]">
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
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex items-center h-6 rounded-full w-11 shrink-0 cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-[#151619] border-2 border-transparent ${enabled ? "bg-emerald-500 hover:bg-emerald-400" : "bg-zinc-700 hover:bg-zinc-600"}`}
    >
      <span
        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${enabled ? "translate-x-5" : "translate-x-0.5"}`}
      />
    </button>
  </div>
);

interface StyledInputProps {
  label: string;
  placeholder: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightElement?: React.ReactNode;
}

export const StyledInput = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  rightElement,
}: StyledInputProps) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-medium text-white">{label}</label>
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-[#1A1B1E] border border-[#2A2B2E] rounded-lg px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all hover:border-zinc-700"
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
    primary:
      "bg-emerald-500 text-black hover:bg-emerald-400 font-semibold focus:ring-2 focus:ring-emerald-500/50 focus:outline-none",
    secondary:
      "bg-[#1A1B1E] text-zinc-300 hover:bg-[#2A2B2E] border border-[#2A2B2E] hover:text-white focus:ring-2 focus:ring-zinc-500/50 focus:outline-none",
    danger:
      "bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20 hover:text-red-300 focus:ring-2 focus:ring-red-500/50 focus:outline-none",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-lg text-sm transition-all focus:ring-offset-2 focus:ring-offset-[#151619] ${styles[variant]} ${className}`}
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
  <div className="flex bg-[#1A1B1E] p-1 rounded-lg border border-[#2A2B2E] relative z-10 w-full overflow-hidden">
    {options.map((opt) => (
      <button
        key={opt}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onChange(opt);
        }}
        className={`relative flex-1 px-3 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
          selected === opt
            ? "bg-[#2A2B2E] text-white shadow-sm z-20"
            : "text-zinc-500 hover:text-white hover:bg-[#2A2B2E]/50 z-10"
        }`}
      >
        {opt}
      </button>
    ))}
  </div>
);
export default function SettingsView() {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "dark",
  );

  const [network, setNetwork] = React.useState(
    localStorage.getItem("network") || "Mainnet",
  );

  const [slippage, setSlippage] = React.useState(
    localStorage.getItem("slippage") || "0.5%",
  );

  const [gas, setGas] = React.useState(localStorage.getItem("gas") || "Fast");

  const [twoFactor, setTwoFactor] = React.useState(
    localStorage.getItem("twoFactor") === "true",
  );

  const [notifications, setNotifications] = React.useState(
    localStorage.getItem("notifications") === "true",
  );

  // APPLY THEME
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  // SAVE
  const handleSave = () => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("network", network);
    localStorage.setItem("slippage", slippage);
    localStorage.setItem("gas", gas);
    localStorage.setItem("twoFactor", String(twoFactor));
    localStorage.setItem("notifications", String(notifications));

    alert("Settings saved");
  };

  // RESTORE
  const handleRestore = () => {
    setTheme("dark");
    setNetwork("Mainnet");
    setSlippage("0.5%");
    setGas("Fast");
    setTwoFactor(false);
    setNotifications(true);
  };

  return (
    <div className="p-8 max-w-5xl mx-auto flex flex-col gap-6">
      {/* Wallet */}
      <SettingsSection title="Wallet & Network" description="Manage wallet">
        <StyledInput label="Wallet address" placeholder="0x..." />

        <PillSelector
          options={["Mainnet", "Testnet"]}
          selected={network}
          onChange={setNetwork}
        />
      </SettingsSection>

      {/* Trading */}
      <SettingsSection
        title="Trading Preferences"
        description="Trading settings"
      >
        <PillSelector
          options={["0.1%", "0.5%", "1%"]}
          selected={slippage}
          onChange={setSlippage}
        />

        <PillSelector
          options={["Slow", "Fast", "Turbo"]}
          selected={gas}
          onChange={setGas}
        />
      </SettingsSection>

      {/* Security */}
      <SettingsSection title="Security" description="Security settings">
        <ToggleSwitch
          label="Two Factor"
          description="Enable protection"
          enabled={twoFactor}
          onChange={setTwoFactor}
        />
      </SettingsSection>

      {/* Appearance */}
      <SettingsSection title="Appearance & Notifications" description="Theme">
        <PillSelector
          options={["dark", "light"]}
          selected={theme}
          onChange={setTheme}
        />

        <ToggleSwitch
          label="Notifications"
          description="Enable alerts"
          enabled={notifications}
          onChange={setNotifications}
        />
      </SettingsSection>

      {/* Buttons */}
      <div className="flex gap-4 justify-end">
        <ActionBtn variant="secondary" onClick={handleRestore}>
          Restore Default
        </ActionBtn>

        <ActionBtn variant="primary" onClick={handleSave}>
          Save
        </ActionBtn>
      </div>
    </div>
  );
}
