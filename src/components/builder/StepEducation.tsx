"use client";

import { Education } from "@/types/cv";
import { Plus, Trash2, GraduationCap } from "lucide-react";

interface StepEducationProps {
  data: Education[];
  onAdd: (edu: Education) => void;
  onUpdate: (id: string, edu: Partial<Education>) => void;
  onRemove: (id: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function StepEducation({
  data,
  onAdd,
  onUpdate,
  onRemove,
  onNext,
  onBack,
}: StepEducationProps) {
  const addNewEducation = () => {
    onAdd({
      id: crypto.randomUUID(),
      institution: "",
      degree: "",
      field: "",
      year: "",
    });
  };

  return (
    <div className="space-y-5 animate-in fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-dubai-navy">Education</h2>
        <p className="text-gray-500 mt-1">Add your educational background</p>
      </div>

      {data.length === 0 && (
        <div className="text-center py-10 border-2 border-dashed border-gray-200 rounded-2xl">
          <GraduationCap className="mx-auto text-gray-300 mb-3" size={48} />
          <p className="text-gray-400 mb-4">No education added yet</p>
          <button
            onClick={addNewEducation}
            className="px-6 py-3 bg-dubai-gold text-white rounded-xl font-semibold hover:brightness-110 transition-all"
          >
            <Plus className="inline mr-1" size={18} />
            Add Education
          </button>
        </div>
      )}

      {data.map((edu, index) => (
        <div
          key={edu.id}
          className="p-5 border border-gray-200 rounded-2xl space-y-4 bg-white shadow-sm"
        >
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-dubai-navy">Education #{index + 1}</h3>
            <button
              onClick={() => onRemove(edu.id)}
              className="text-red-400 hover:text-red-600 p-1.5 rounded-lg hover:bg-red-50 transition-all"
            >
              <Trash2 size={18} />
            </button>
          </div>

          <div>
            <label className="block text-sm font-semibold text-dubai-navy mb-1">
              Institution
            </label>
            <input
              type="text"
              value={edu.institution}
              onChange={(e) =>
                onUpdate(edu.id, { institution: e.target.value })
              }
              placeholder="e.g. American University of Dubai"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-dubai-navy mb-1">
                Degree
              </label>
              <select
                value={edu.degree}
                onChange={(e) =>
                  onUpdate(edu.id, { degree: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy bg-white transition-all"
              >
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
              <label className="block text-sm font-semibold text-dubai-navy mb-1">
                Field of Study
              </label>
              <input
                type="text"
                value={edu.field}
                onChange={(e) =>
                  onUpdate(edu.id, { field: e.target.value })
                }
                placeholder="e.g. Business Administration"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-dubai-navy mb-1">
              Graduation Year
            </label>
            <input
              type="text"
              value={edu.year}
              onChange={(e) => onUpdate(edu.id, { year: e.target.value })}
              placeholder="e.g. 2022"
              maxLength={4}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
            />
          </div>
        </div>
      ))}

      {data.length > 0 && (
        <button
          onClick={addNewEducation}
          className="w-full py-3 rounded-xl border-2 border-dashed border-dubai-gold/40 text-dubai-gold font-semibold hover:bg-dubai-gold/5 transition-all"
        >
          <Plus className="inline mr-1" size={18} />
          Add Another Education
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
          Continue to Skills →
        </button>
      </div>
    </div>
  );
}
