"use client";

import { Education } from "@/types/cv";
import { Plus, Trash2, GraduationCap, ArrowRight, ArrowLeft } from "lucide-react";

interface StepEducationProps {
  data: Education[];
  onAdd: (edu: Education) => void;
  onUpdate: (id: string, edu: Partial<Education>) => void;
  onRemove: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepEducation({
  data, onAdd, onUpdate, onRemove, onNext, onBack,
}: StepEducationProps) {
  const addNewEducation = () => {
    onAdd({ id: `edu-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`, institution: "", degree: "", field: "", year: "" });
  };

  const inputClass =
    "w-full px-4 py-3.5 rounded-xl border border-border bg-white text-heading placeholder:text-muted/60 transition-all duration-200 text-sm";

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center mx-auto mb-4">
          <GraduationCap className="text-primary" size={24} />
        </div>
        <h2 className="text-2xl font-extrabold text-heading">Education</h2>
        <p className="text-muted mt-1.5 text-sm">Add your educational background</p>
      </div>

      {data.length === 0 && (
        <div className="text-center py-12 border-2 border-dashed border-border rounded-2xl bg-surface/50">
          <GraduationCap className="mx-auto text-muted/30 mb-3" size={48} />
          <p className="text-muted mb-5">No education added yet</p>
          <button onClick={addNewEducation} className="btn-primary px-6 py-3 text-white rounded-xl font-semibold inline-flex items-center gap-2 shadow-lg">
            <Plus size={18} /> Add Education
          </button>
        </div>
      )}

      <div className="space-y-4 stagger">
        {data.map((edu, index) => (
          <div key={edu.id} className="p-5 border border-border/60 rounded-2xl space-y-4 bg-white shadow-sm card-hover">
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-heading flex items-center gap-2">
                <span className="w-7 h-7 rounded-lg bg-primary/8 text-primary text-xs font-bold flex items-center justify-center">{index + 1}</span>
                Education
              </h3>
              <button onClick={() => onRemove(edu.id)} className="text-muted hover:text-red-500 p-2 rounded-xl hover:bg-red-50 transition-all">
                <Trash2 size={16} />
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-heading mb-1">Institution</label>
              <input type="text" value={edu.institution} onChange={(e) => onUpdate(edu.id, { institution: e.target.value })} placeholder="e.g. American University of Dubai" className={inputClass} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-heading mb-1">Degree</label>
                <select value={edu.degree} onChange={(e) => onUpdate(edu.id, { degree: e.target.value })} className={inputClass}>
                  <option value="">Select degree</option>
                  <option value="High School Diploma">High School Diploma</option>
                  <option value="Associate Degree">Associate Degree</option>
                  <option value="Bachelor's Degree">Bachelor&apos;s Degree</option>
                  <option value="Master's Degree">Master&apos;s Degree</option>
                  <option value="MBA">MBA</option>
                  <option value="PhD">PhD</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Certificate">Certificate</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-heading mb-1">Field of Study</label>
                <input type="text" value={edu.field} onChange={(e) => onUpdate(edu.id, { field: e.target.value })} placeholder="e.g. Business Administration" className={inputClass} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-heading mb-1">Graduation Year</label>
              <input type="text" value={edu.year} onChange={(e) => { const v = e.target.value.replace(/\D/g, ""); onUpdate(edu.id, { year: v }); }} placeholder="e.g. 2022" maxLength={4} inputMode="numeric" className={inputClass} />
            </div>
          </div>
        ))}
      </div>

      {data.length > 0 && (
        <button onClick={addNewEducation} className="w-full py-3.5 rounded-xl border-2 border-dashed border-primary/20 text-primary font-semibold hover:bg-primary/3 transition-all flex items-center justify-center gap-2">
          <Plus size={18} /> Add Another Education
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
