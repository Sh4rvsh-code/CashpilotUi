import { useState } from "react";
import {
  ArrowLeft,
  User,
  Globe,
  Calendar as CalendarIcon,
  Moon,
  Lock,
  Fingerprint,
  Clock,
  Bell,
  Database,
  Download,
  Trash2,
  MessageSquare,
  HelpCircle,
  Shield,
  FileText,
  Share2,
  Star,
  Tag,
  Wallet,
  BarChart3,
  ChevronRight,
  Settings as SettingsIcon,
} from "lucide-react";
import { BottomNavigation } from "../components/BottomNavigation";

interface SettingsProps {
  navigate: (screen: string) => void;
}

export function Settings({ navigate }: SettingsProps) {
  const [activeTab, setActiveTab] = useState("settings");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [biometricEnabled, setBiometricEnabled] = useState(true);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    navigate(tab);
  };

  const settingSections = [
    {
      title: "Profile",
      items: [
        { icon: User, label: "View Profile", action: () => {} },
      ],
    },
    {
      title: "General",
      items: [
        { icon: Globe, label: "Currency", value: "USD", action: () => {} },
        { icon: Globe, label: "Language", value: "English", action: () => {} },
        { icon: CalendarIcon, label: "Date Format", value: "MM/DD/YYYY", action: () => {} },
        { icon: Moon, label: "Theme", value: "Dark", action: () => {} },
      ],
    },
    {
      title: "Security",
      items: [
        { icon: Lock, label: "Change PIN", action: () => {} },
        {
          icon: Fingerprint,
          label: "Biometric Authentication",
          toggle: true,
          value: biometricEnabled,
          action: () => setBiometricEnabled(!biometricEnabled),
        },
        { icon: Clock, label: "Auto-lock Timer", value: "5 min", action: () => {} },
        { icon: Lock, label: "Require PIN for Exports", toggle: true, value: true, action: () => {} },
      ],
    },
    {
      title: "Notifications",
      items: [
        {
          icon: Bell,
          label: "Transaction Alerts",
          toggle: true,
          value: notificationsEnabled,
          action: () => setNotificationsEnabled(!notificationsEnabled),
        },
        { icon: Bell, label: "Budget Warnings", toggle: true, value: true, action: () => {} },
        { icon: Bell, label: "Bill Reminders", toggle: true, value: true, action: () => {} },
        { icon: Bell, label: "Daily Summary", toggle: true, value: false, action: () => {} },
      ],
    },
    {
      title: "Data & Privacy",
      items: [
        { icon: Database, label: "Backup & Restore", action: () => {} },
        { icon: Download, label: "Export All Data", action: () => navigate("export") },
        { icon: Trash2, label: "Clear Cache", action: () => {} },
        { icon: Trash2, label: "Delete All Data", danger: true, action: () => {} },
      ],
    },
    {
      title: "SMS & Automation",
      items: [
        { icon: MessageSquare, label: "SMS Permissions", toggle: true, value: true, action: () => {} },
        { icon: SettingsIcon, label: "Auto-categorization", toggle: true, value: true, action: () => {} },
        { icon: MessageSquare, label: "SMS Filters", action: () => {} },
      ],
    },
    {
      title: "App Management",
      items: [
        { icon: Tag, label: "Categories", action: () => navigate("categories") },
        { icon: Wallet, label: "Accounts", action: () => navigate("accounts") },
        { icon: FileText, label: "Bills & Reminders", action: () => navigate("bills") },
        { icon: BarChart3, label: "Savings Goals", action: () => navigate("goals") },
        { icon: BarChart3, label: "Subscriptions", action: () => navigate("subscriptions") },
      ],
    },
    {
      title: "App Info",
      items: [
        { icon: HelpCircle, label: "Help & Support", action: () => {} },
        { icon: Shield, label: "Privacy Policy", action: () => {} },
        { icon: FileText, label: "Terms of Service", action: () => {} },
        { icon: Star, label: "Rate App", action: () => {} },
        { icon: Share2, label: "Share App", action: () => {} },
        { icon: HelpCircle, label: "Version", value: "1.0.0", action: () => {} },
      ],
    },
  ];

  return (
    <div className="h-full w-full bg-[#0A0E27] overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate("home")}
            className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
          <h1 className="text-2xl text-white flex-1">Settings</h1>
        </div>

        {/* Profile Section */}
        <div className="bg-gradient-to-br from-[#151B3D] to-[#1a2048] rounded-[24px] p-5 border border-[#1a2048]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-[#4C6FFF] to-[#7B61FF] rounded-2xl flex items-center justify-center text-2xl">
              👤
            </div>
            <div className="flex-1">
              <p className="text-white text-lg">CashPilot User</p>
              <p className="text-[#A0A3BD] text-sm">user@cashpilot.app</p>
            </div>
            <button className="text-[#4C6FFF] text-sm">Edit</button>
          </div>
        </div>
      </div>

      {/* Settings List */}
      <div className="flex-1 overflow-y-auto px-6 pb-32">
        {settingSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            <h3 className="text-[#A0A3BD] text-sm mb-3">{section.title}</h3>
            <div className="bg-[#151B3D] rounded-[20px] border border-[#1a2048] overflow-hidden">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <button
                    key={itemIndex}
                    onClick={item.action}
                    className={`w-full p-4 flex items-center gap-3 hover:bg-[#1a2048] transition-colors ${
                      itemIndex < section.items.length - 1 ? "border-b border-[#1a2048]" : ""
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 ${
                        item.danger ? "text-[#FF5757]" : "text-[#4C6FFF]"
                      }`}
                      strokeWidth={2}
                    />
                    <span
                      className={`flex-1 text-left ${
                        item.danger ? "text-[#FF5757]" : "text-white"
                      }`}
                    >
                      {item.label}
                    </span>

                    {item.toggle !== undefined ? (
                      <div
                        className={`w-12 h-6 rounded-full transition-colors ${
                          item.value ? "bg-[#4C6FFF]" : "bg-[#0A0E27]"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full mt-0.5 transition-transform ${
                            item.value ? "translate-x-6" : "translate-x-0.5"
                          }`}
                        />
                      </div>
                    ) : item.value ? (
                      <div className="flex items-center gap-2">
                        <span className="text-[#A0A3BD] text-sm">{item.value}</span>
                        <ChevronRight className="w-4 h-4 text-[#A0A3BD]" strokeWidth={2} />
                      </div>
                    ) : (
                      <ChevronRight className="w-4 h-4 text-[#A0A3BD]" strokeWidth={2} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Danger Zone */}
        <div className="mb-6">
          <h3 className="text-[#FF5757] text-sm mb-3">Danger Zone</h3>
          <div className="space-y-3">
            <button className="w-full bg-[#151B3D] border border-[#1a2048] rounded-[16px] p-4 text-[#FF5757] hover:bg-[#FF5757]/10 transition-colors">
              Reset App
            </button>
            <button className="w-full bg-[#FF5757]/20 border border-[#FF5757]/30 rounded-[16px] p-4 text-[#FF5757] hover:bg-[#FF5757]/30 transition-colors">
              Delete Account
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
    </div>
  );
}
