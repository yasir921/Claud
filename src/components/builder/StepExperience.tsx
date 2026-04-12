"use client";

import { Experience } from "@/types/cv";
import { Plus, Trash2, Briefcase, ArrowRight, ArrowLeft } from "lucide-react";

interface StepExperienceProps {
  data: Experience[];
  onAdd: (exp: Experience) => void;
  onUpdate: (id: string, exp: Partial<Experience>) => void;
  onRemove: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepExperience({
  data, onAdd, onUpdate, onRemove, onNext, onBack,
}: StepExperienceProps) {
  const addNewExperience = () => {
    onAdd({
      id: crypto.randomUUID(), company: "", position: "",
      startDate: "", endDate: "", current: false, description: "",
    });
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-white text-heading placeholder:text-muted/60 transition-all duration-200 text-sm";

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center mx-auto mb-4">
          <Briefcase className="text-primary" size={24} />
        </div>
        <h2 className="text-2xl font-extrabold text-heading">Work Experience</h2>
        <p className="text-muted mt-1.5 text-sm">Add your professional experience</p>
      </div>

      {data.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-border rounded-2xl bg-surface/50">
          <Briefcase className="mx-auto text-muted/30 mb-3" size={48} />
          <p className="text-muted mb-5">No experience added yet</p>
          <button onClick={addNewExperience} className="btn-primary px-6 py-3 text-white rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg">
            <Plus size={18} /> Add Experience
          </button>
        </div>
      )}

      <div className="space-y-4 stagger">
        {data.map((exp, index) => (
          <div key={exp.id} className="p-5 border border-border/60 rounded-2xl space-y-4 bg-white shadow-sm card-hover">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-heading flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/8 text-primary text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                Experience
              </h3>
              <button onClick={() => onRemove(exp.id)} className="text-muted hover:text-red-500 p-2 rounded-xl hover:bg-red-50 transition-all">
                <Trash2 size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-heading mb-1">Job Title</label>
                <input type="text" value={exp.position} onChange={(e) => onUpdate(exp.id, { position: e.target.value })} placeholder="e.g. Marketing Manager" className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-heading mb-1">Company</label>
                <input type="text" value={exp.company} onChange={(e) => onUpdate(exp.id, { company: e.target.value })} placeholder="e.g. Emirates Group" className={inputClass} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-heading mb-1">Start Date</label>
                <input type="month" value={exp.startDate} onChange={(e) => onUpdate(exp.id, { startDate: e.target.value })} className={inputClass} />
              </div>
              <div>
                <label className="block text-xs font-semibold text-heading mb-1">End Date</label>
                {exp.current ? (
                  <div className="px-4 py-3.5 rounded-xl border border-primary/20 bg-primary/3 text-primary font-medium text-sm">Present</div>
                ) : (
                  <input type="month" value={exp.endDate} onChange={(e) => onUpdate(exp.id, { endDate: e.target.value })} className={inputClass} />
                )}
                <label className="flex items-center gap-2 mt-2 text-xs text-muted cursor-pointer">
                  <input type="checkbox" checked={exp.current} onChange={(e) => onUpdate(exp.id, { current: e.target.checked, endDate: e.target.checked ? "" : exp.endDate })} className="accent-primary rounded" />
                  Currently working here
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-heading mb-1">Description</label>
              <textarea value={exp.description} onChange={(e) => onUpdate(exp.id, { description: e.target.value })}
                placeholder={"Describe your key achievements:\n• Led a team of 10 marketing professionals\n• Increased brand awareness by 40%\n• Managed $500K annual budget"}
                rows={5} className={`${inputClass} resize-none`} />
            </div>
          </div>
        ))}
      </div>

      {data.length > 0 && (
        <button onClick={addNewExperience} className="w-full py-3.5 rounded-xl border-2 border-dashed border-primary/20 text-primary font-semibold hover:bg-primary/3 transition-all flex items-center justify-center gap-2">
          <Plus size={18} /> Add Another Experience
        </button>
      )}

      <div className="flex gap-3 pt-3">
        <button onClick={onBack} className="flex-1 py-4 rounded-2xl font-bold text-body bg-surface-2 hover:bg-border transition-all flex items-center justify-center gap-2">
          <ArrowLeft size={16} /> Back
        </button>
        <button onClick={onNext} className="flex-[2] py-4 rounded-2xl font-bold text-base btn-primary text-white flex items-center justify-center gap-2 shadow-lg">
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
