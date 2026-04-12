"use client";

import { Experience } from "@/types/cv";
import { Plus, Trash2, Briefcase } from "lucide-react";

interface StepExperienceProps {
  data: Experience[];
  onAdd: (exp: Experience) => void;
  onUpdate: (id: string, exp: Partial<Experience>) => void;
  onRemove: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepExperience({
  data,
  onAdd,
  onUpdate,
  onRemove,
  onNext,
  onBack,
}: StepExperienceProps) {
  const addNewExperience = () => {
    onAdd({
      id: crypto.randomUUID(),
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    });
  };

  return (
    <div className="space-y-5 animate-in fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-dubai-navy">Work Experience</h2>
        <p className="text-gray-500 mt-1">Add your professional experience</p>
      </div>

      {data.length === 0 && (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-2xl">
          <Briefcase className="mx-auto text-gray-300 mb-3" size={48} />
          <p className="text-gray-400 mb-4">No experience added yet</p>
          <button
            onClick={addNewExperience}
            className="px-6 py-3 bg-dubai-gold text-white rounded-xl font-semibold hover:brightness-110 transition-all"
          >
            <Plus className="inline mr-1" size={18} />
            Add Experience
          </button>
        </div>
      )}

      {data.map((exp, index) => (
        <div
          key={exp.id}
          className="p-5 border border-gray-200 rounded-2xl space-y-4 bg-white shadow-sm"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-dubai-navy">Experience #{index + 1}</h3>
            <button
              onClick={() => onRemove(exp.id)}
              className="text-red-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-all"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-dubai-navy mb-1">
                Job Title
              </label>
              <input
                type="text"
                value={exp.position}
                onChange={(e) => onUpdate(exp.id, { position: e.target.value })}
                placeholder="e.g. Marketing Manager"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dubai-navy mb-1">
                Company
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) => onUpdate(exp.id, { company: e.target.value })}
                placeholder="e.g. Emirates Group"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-dubai-navy mb-1">
                Start Date
              </label>
              <input
                type="month"
                value={exp.startDate}
                onChange={(e) => onUpdate(exp.id, { startDate: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dubai-navy mb-1">
                End Date
              </label>
              {exp.current ? (
                <div className="px-4 py-3 rounded-xl border border-dubai-gold/30 bg-dubai-gold/5 text-dubai-gold font-medium">
                  Present
                </div>
              ) : (
                <input
                  type="month"
                  value={exp.endDate}
                  onChange={(e) =>
                    onUpdate(exp.id, { endDate: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy transition-all"
                />
              )}
              <label className="flex items-center gap-2 mt-2 text-sm text-gray-500 cursor-pointer">
                <input
                  type="checkbox"
                  checked={exp.current}
                  onChange={(e) =>
                    onUpdate(exp.id, {
                      current: e.target.checked,
                      endDate: e.target.checked ? "" : exp.endDate,
                    })
                  }
                  className="accent-dubai-gold"
                />
                Currently working here
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-dubai-navy mb-1">
              Description
            </label>
            <textarea
              value={exp.description}
              onChange={(e) =>
                onUpdate(exp.id, { description: e.target.value })
              }
              placeholder="Describe your key responsibilities and achievements. Use bullet points for best results:&#10;• Led a team of 10 marketing professionals&#10;• Increased brand awareness by 40%&#10;• Managed $500K annual budget"
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all resize-none"
            />
          </div>
        </div>
      ))}

      {data.length > 0 && (
        <button
          onClick={addNewExperience}
          className="w-full py-3 rounded-xl border-2 border-dashed border-dubai-gold/40 text-dubai-gold font-semibold hover:bg-dubai-gold/5 transition-all"
        >
          <Plus className="inline mr-1" size={18} />
          Add Another Experience
        </button>
      )}

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
          Continue to Education →
        </button>
      </div>
    </div>
  );
}
