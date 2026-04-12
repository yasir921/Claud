"use client";

import { useState } from "react";
import { X, Sparkles, ArrowLeft, Eye, Lightbulb } from "lucide-react";

interface StepSkillsProps {
  skills: string[];
  summary: string;
  jobTitle: string;
  onSkillsChange: (skills: string[]) => void;
  onSummaryChange: (summary: string) => void;
  onNext: () => void;
  onBack: () => void;
}

const suggestedSkillsByCategory: Record<string, string[]> = {
  Management: ["Leadership", "Team Management", "Strategic Planning", "Project Management", "Stakeholder Management"],
  Technical: ["Microsoft Office", "Data Analysis", "CRM Systems", "SAP", "Python", "SQL"],
  "Soft Skills": ["Communication", "Problem Solving", "Time Management", "Negotiation", "Critical Thinking"],
  Marketing: ["Digital Marketing", "SEO/SEM", "Social Media", "Content Strategy", "Google Analytics"],
  Finance: ["Financial Analysis", "Budgeting", "Forecasting", "Risk Management", "Compliance"],
};

export default function StepSkills({
  skills, summary, jobTitle, onSkillsChange, onSummaryChange, onNext, onBack,
}: StepSkillsProps) {
  const [inputValue, setInputValue] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const addSkill = (skill: string) => {
    const trimmed = skill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      onSkillsChange([...skills, trimmed]);
    }
    setInputValue("");
  };

  const removeSkill = (skill: string) => {
    onSkillsChange(skills.filter((s) => s !== skill));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      addSkill(inputValue);
    }
  };

  const generateSummary = () => {
    const skillsList = skills.slice(0, 5).join(", ");
    onSummaryChange(
      `Results-driven ${jobTitle || "professional"} with a proven track record of delivering impactful outcomes in the UAE market. Skilled in ${skillsList || "multiple disciplines"}, with a strong ability to lead cross-functional teams and drive strategic initiatives. Seeking to leverage extensive experience to contribute to organizational growth and excellence.`
    );
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-white text-heading placeholder:text-muted/60 transition-all duration-200 text-sm";

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center mx-auto mb-4">
          <Lightbulb className="text-primary" size={24} />
        </div>
        <h2 className="text-2xl font-extrabold text-heading">Skills &amp; Summary</h2>
        <p className="text-muted mt-1.5 text-sm">Highlight what makes you stand out</p>
      </div>

      {/* Skills */}
      <div>
        <label className="block text-sm font-semibold text-heading mb-2">Skills</label>
        {skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {skills.map((skill) => (
              <span key={skill} className="flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full text-xs font-semibold shadow-sm animate-scale-in">
                {skill}
                <button onClick={() => removeSkill(skill)} className="hover:text-red-200 transition-colors">
                  <X size={13} />
                </button>
              </span>
            ))}
          </div>
        )}
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder="Type a skill and press Enter" className={inputClass} />
        <button onClick={() => setShowSuggestions(!showSuggestions)} className="mt-2 text-sm text-primary font-semibold hover:underline inline-flex items-center gap-1">
          <Sparkles size={14} />
          {showSuggestions ? "Hide suggestions" : "Show skill suggestions"}
        </button>

        {showSuggestions && (
          <div className="mt-3 space-y-3 p-4 bg-surface rounded-xl border border-border/50 animate-scale-in">
            {Object.entries(suggestedSkillsByCategory).map(([category, categorySkills]) => (
              <div key={category}>
                <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-1.5">{category}</p>
                <div className="flex flex-wrap gap-1.5">
                  {categorySkills.filter((s) => !skills.includes(s)).map((skill) => (
                    <button key={skill} onClick={() => addSkill(skill)} className="px-3 py-1 rounded-full text-xs border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-200">
                      + {skill}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-semibold text-heading">Professional Summary</label>
          <button onClick={generateSummary} className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline">
            <Sparkles size={14} /> Auto-Generate
          </button>
        </div>
        <textarea value={summary} onChange={(e) => onSummaryChange(e.target.value)}
          placeholder="Write a brief professional summary or click 'Auto-Generate' to create one automatically."
          rows={5} className={`${inputClass} resize-none`} />
        <p className="text-xs text-muted mt-1">{summary.length}/500 characters</p>
      </div>

      <div className="flex gap-3 pt-3">
        <button onClick={onBack} className="flex-1 py-4 rounded-2xl font-bold text-body bg-surface-2 hover:bg-border transition-all flex items-center justify-center gap-2">
          <ArrowLeft size={16} /> Back
        </button>
        <button onClick={onNext} className="flex-[2] py-4 rounded-2xl font-bold text-base btn-primary text-white flex items-center justify-center gap-2 shadow-lg">
          Preview My CV <Eye size={18} />
        </button>
      </div>
    </div>
  );
}
