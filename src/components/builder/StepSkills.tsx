"use client";

import { useState } from "react";
import { X, Sparkles } from "lucide-react";

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
  "Management": ["Leadership", "Team Management", "Strategic Planning", "Project Management", "Stakeholder Management"],
  "Technical": ["Microsoft Office", "Data Analysis", "CRM Systems", "SAP", "Python", "SQL"],
  "Soft Skills": ["Communication", "Problem Solving", "Time Management", "Negotiation", "Critical Thinking"],
  "Marketing": ["Digital Marketing", "SEO/SEM", "Social Media", "Content Strategy", "Google Analytics"],
  "Finance": ["Financial Analysis", "Budgeting", "Forecasting", "Risk Management", "Compliance"],
};

export default function StepSkills({
  skills,
  summary,
  jobTitle,
  onSkillsChange,
  onSummaryChange,
  onNext,
  onBack,
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
    const generated = `Results-driven ${jobTitle || "professional"} with a proven track record of delivering impactful outcomes in the UAE market. Skilled in ${skillsList || "multiple disciplines"}, with a strong ability to lead cross-functional teams and drive strategic initiatives. Seeking to leverage extensive experience to contribute to organizational growth and excellence.`;
    onSummaryChange(generated);
  };

  return (
    <div className="space-y-6 animate-in fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-dubai-navy">Skills & Summary</h2>
        <p className="text-gray-500 mt-1">Highlight what makes you stand out</p>
      </div>

      {/* Skills Input */}
      <div>
        <label className="block text-sm font-semibold text-dubai-navy mb-1.5">
          Skills
        </label>
        <div className="flex flex-wrap gap-2 mb-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="flex items-center gap-1 px-3 py-1.5 bg-dubai-navy text-white rounded-full text-sm font-medium"
            >
              {skill}
              <button
                onClick={() => removeSkill(skill)}
                className="ml-0.5 hover:text-red-300 transition-colors"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a skill and press Enter"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
        />
        <button
          onClick={() => setShowSuggestions(!showSuggestions)}
          className="mt-2 text-sm text-dubai-gold font-semibold hover:underline"
        >
          {showSuggestions ? "Hide suggestions" : "Show skill suggestions"}
        </button>

        {showSuggestions && (
          <div className="mt-3 space-y-3">
            {Object.entries(suggestedSkillsByCategory).map(([category, categorySkills]) => (
              <div key={category}>
                <p className="text-xs font-bold text-gray-400 uppercase mb-1.5">
                  {category}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {categorySkills
                    .filter((s) => !skills.includes(s))
                    .map((skill) => (
                      <button
                        key={skill}
                        onClick={() => addSkill(skill)}
                        className="px-3 py-1 rounded-full text-sm border border-dubai-gold/30 text-dubai-gold hover:bg-dubai-gold hover:text-white transition-all"
                      >
                        + {skill}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Professional Summary */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className="block text-sm font-semibold text-dubai-navy">
            Professional Summary
          </label>
          <button
            onClick={generateSummary}
            className="flex items-center gap-1 text-sm font-semibold text-dubai-gold hover:underline"
          >
            <Sparkles size={14} />
            Auto-Generate
          </button>
        </div>
        <textarea
          value={summary}
          onChange={(e) => onSummaryChange(e.target.value)}
          placeholder="Write a brief professional summary highlighting your experience, skills, and career goals. Or click 'Auto-Generate' to create one automatically."
          rows={5}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all resize-none"
        />
        <p className="text-xs text-gray-400 mt-1">
          {summary.length}/500 characters
        </p>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={onBack}
          className="flex-1 py-4 rounded-xl font-bold text-dubai-navy bg-gray-100 hover:bg-gray-200 transition-all"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="flex-[2] py-4 rounded-xl font-bold text-lg bg-dubai-gold text-white hover:brightness-110 active:scale-[0.98] shadow-lg shadow-dubai-gold/25 transition-all"
        >
          Preview My CV →
        </button>
      </div>
    </div>
  );
}
