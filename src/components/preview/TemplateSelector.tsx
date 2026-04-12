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
    gradient: "from-primary to-primary-dark",
  },
  {
    id: "executive" as const,
    name: "Executive",
    description: "Premium & elegant",
    icon: Crown,
    gradient: "from-accent to-primary",
  },
  {
    id: "classic" as const,
    name: "Classic",
    description: "Traditional & clean",
    icon: FileText,
    gradient: "from-gray-700 to-gray-900",
  },
];

export default function TemplateSelector({ selected, onChange }: TemplateSelectorProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {templates.map((template) => {
        const Icon = template.icon;
        const isSelected = selected === template.id;
        return (
          <button
            key={template.id}
            onClick={() => onChange(template.id)}
            className={`flex-shrink-0 flex items-center gap-3 px-4 py-3.5 rounded-xl border-2 transition-all duration-300 ${
              isSelected
                ? "border-primary bg-primary/3 shadow-lg shadow-primary/10 scale-[1.02]"
                : "border-border bg-white hover:border-primary/30 hover:shadow-md"
            }`}
          >
            <div className={`w-9 h-9 bg-gradient-to-br ${template.gradient} rounded-xl flex items-center justify-center shadow-sm`}>
              <Icon size={16} className="text-white" />
            </div>
            <div className="text-left">
              <p className={`font-bold text-sm ${isSelected ? "text-primary" : "text-heading"}`}>{template.name}</p>
              <p className="text-xs text-muted">{template.description}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
