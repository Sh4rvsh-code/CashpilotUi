import { ArrowLeft, FileText, FileSpreadsheet, Download, Calendar, CheckSquare } from "lucide-react";
import { useState } from "react";

interface ExportReportsProps {
  navigate: (screen: string) => void;
}

export function ExportReports({ navigate }: ExportReportsProps) {
  const [selectedType, setSelectedType] = useState("pdf");
  const [dateRange, setDateRange] = useState("this-month");

  const templates = [
    { name: "Monthly Summary", description: "Complete overview of the month", icon: "📊" },
    { name: "Tax Report", description: "Tax-ready expense breakdown", icon: "📑" },
    { name: "Year-End Report", description: "Annual financial summary", icon: "📈" },
    { name: "Custom Report", description: "Build your own report", icon: "⚙️" },
  ];

  const exportHistory = [
    { name: "November 2025 Summary.pdf", date: "Nov 28, 2025", size: "2.4 MB" },
    { name: "Q4 2025 Report.xlsx", date: "Nov 15, 2025", size: "1.8 MB" },
  ];

  return (
    <div className="h-full w-full bg-[#0A0E27] overflow-y-auto pb-8">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={() => navigate("settings")}
            className="w-10 h-10 bg-[#151B3D] rounded-2xl flex items-center justify-center hover:bg-[#1a2048] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-[#A0A3BD]" strokeWidth={2} />
          </button>
          <h1 className="text-2xl text-white flex-1">Export & Reports</h1>
        </div>
      </div>

      {/* Export Type */}
      <div className="px-6 mb-6">
        <p className="text-[#A0A3BD] text-sm mb-3">Export Type</p>
        <div className="grid grid-cols-3 gap-3">
          <button
            onClick={() => setSelectedType("pdf")}
            className={`p-4 rounded-[16px] flex flex-col items-center gap-2 transition-all ${
              selectedType === "pdf"
                ? "bg-gradient-to-br from-[#4C6FFF]/20 to-[#7B61FF]/20 border-2 border-[#4C6FFF]"
                : "bg-[#151B3D] border-2 border-transparent hover:border-[#1a2048]"
            }`}
          >
            <FileText className={`w-6 h-6 ${selectedType === "pdf" ? "text-[#4C6FFF]" : "text-[#A0A3BD]"}`} strokeWidth={2} />
            <span className={`text-sm ${selectedType === "pdf" ? "text-white" : "text-[#A0A3BD]"}`}>PDF</span>
          </button>

          <button
            onClick={() => setSelectedType("excel")}
            className={`p-4 rounded-[16px] flex flex-col items-center gap-2 transition-all ${
              selectedType === "excel"
                ? "bg-gradient-to-br from-[#4C6FFF]/20 to-[#7B61FF]/20 border-2 border-[#4C6FFF]"
                : "bg-[#151B3D] border-2 border-transparent hover:border-[#1a2048]"
            }`}
          >
            <FileSpreadsheet className={`w-6 h-6 ${selectedType === "excel" ? "text-[#4C6FFF]" : "text-[#A0A3BD]"}`} strokeWidth={2} />
            <span className={`text-sm ${selectedType === "excel" ? "text-white" : "text-[#A0A3BD]"}`}>Excel</span>
          </button>

          <button
            onClick={() => setSelectedType("csv")}
            className={`p-4 rounded-[16px] flex flex-col items-center gap-2 transition-all ${
              selectedType === "csv"
                ? "bg-gradient-to-br from-[#4C6FFF]/20 to-[#7B61FF]/20 border-2 border-[#4C6FFF]"
                : "bg-[#151B3D] border-2 border-transparent hover:border-[#1a2048]"
            }`}
          >
            <FileText className={`w-6 h-6 ${selectedType === "csv" ? "text-[#4C6FFF]" : "text-[#A0A3BD]"}`} strokeWidth={2} />
            <span className={`text-sm ${selectedType === "csv" ? "text-white" : "text-[#A0A3BD]"}`}>CSV</span>
          </button>
        </div>
      </div>

      {/* Date Range */}
      <div className="px-6 mb-6">
        <p className="text-[#A0A3BD] text-sm mb-3">Date Range</p>
        <button className="w-full bg-[#151B3D] rounded-[16px] p-4 flex items-center justify-between hover:bg-[#1a2048] transition-colors">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#4C6FFF]" strokeWidth={2} />
            <span className="text-white">This Month</span>
          </div>
          <span className="text-[#A0A3BD]">▼</span>
        </button>
      </div>

      {/* Include Options */}
      <div className="px-6 mb-6">
        <p className="text-[#A0A3BD] text-sm mb-3">Include</p>
        <div className="space-y-2">
          {["Transactions", "Charts & Analytics", "Budget Summary", "Category Breakdown"].map((option, index) => (
            <label
              key={index}
              className="flex items-center gap-3 bg-[#151B3D] rounded-[16px] p-4 hover:bg-[#1a2048] transition-colors cursor-pointer"
            >
              <CheckSquare className="w-5 h-5 text-[#4C6FFF]" strokeWidth={2} />
              <span className="text-white flex-1">{option}</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </label>
          ))}
        </div>
      </div>

      {/* Templates */}
      <div className="px-6 mb-6">
        <p className="text-[#A0A3BD] text-sm mb-3">Report Templates</p>
        <div className="grid grid-cols-2 gap-3">
          {templates.map((template, index) => (
            <button
              key={index}
              className="bg-[#151B3D] rounded-[20px] p-4 border border-[#1a2048] hover:border-[#4C6FFF]/50 transition-all text-left"
            >
              <div className="text-3xl mb-2">{template.icon}</div>
              <p className="text-white text-sm mb-1">{template.name}</p>
              <p className="text-[#A0A3BD] text-xs">{template.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Export History */}
      <div className="px-6 mb-6">
        <p className="text-[#A0A3BD] text-sm mb-3">Export History</p>
        <div className="space-y-2">
          {exportHistory.map((item, index) => (
            <div
              key={index}
              className="bg-[#151B3D] rounded-[16px] p-4 border border-[#1a2048] flex items-center gap-3"
            >
              <Download className="w-5 h-5 text-[#4C6FFF]" strokeWidth={2} />
              <div className="flex-1">
                <p className="text-white text-sm">{item.name}</p>
                <p className="text-[#A0A3BD] text-xs">{item.date} · {item.size}</p>
              </div>
              <button className="text-[#4C6FFF] text-sm hover:underline">Share</button>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 space-y-3">
        <button className="w-full h-12 bg-[#151B3D] rounded-[16px] text-white hover:bg-[#1a2048] transition-colors">
          Preview Report
        </button>
        <button className="w-full h-14 bg-gradient-to-r from-[#4C6FFF] to-[#7B61FF] rounded-[20px] text-white hover:shadow-lg hover:shadow-[#4C6FFF]/50 transition-all active:scale-95 flex items-center justify-center gap-2">
          <Download className="w-5 h-5" strokeWidth={2} />
          Generate & Export
        </button>
      </div>
    </div>
  );
}
