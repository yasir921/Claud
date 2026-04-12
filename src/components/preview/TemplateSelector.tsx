"use client";

import { CVData } from "@/types/cv";
import { Layout, Crown, FileText } from "lucide-react";

interface TemplateSelectorProps {
  selected: CVData["selectedTemplate"];
  onChange: (template: CVData["selectedTemplate"]) => void;
}

const templates = [
  {
    id: "modern" as const,
    name: "Modern",
    description: "Clean & contemporary",
    icon: Layout,
    color: "bg-[#0A1628]",
  },
  {
    id: "executive" as const,
    name: "Executive",
    description: "Premium & elegant",
    icon: Crown,
    color: "bg-[#C8A45C]",
  },
  {
    id: "classic" as const,
    name: "Classic",
    description: "Traditional & clean",
    icon: FileText,
    color: "bg-gray-800",
  },
];

export default function TemplateSelector({ selected, onChange }: TemplateSelectorProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
      {templates.map((template) => {
        const Icon = template.icon;
        return (
          <button
            key={template.id}
            onClick={() => onChange(template.id)}
            className={`flex-shrink-0 flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
              selected === template.id
                ? "border-dubai-gold bg-dubai-gold/5 shadow-md"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <div className={`w-8 h-8 ${template.color} rounded-lg flex items-center justify-center`}>
              <Icon size={16} className="text-white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm text-dubai-navy">{template.name}</p>
              <p className="text-xs text-gray-400">{template.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
