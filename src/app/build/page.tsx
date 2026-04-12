"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCVStore } from "@/lib/cv-store";
import ProgressBar from "@/components/builder/ProgressBar";
import StepPersonal from "@/components/builder/StepPersonal";
import StepExperience from "@/components/builder/StepExperience";
import StepEducation from "@/components/builder/StepEducation";
import StepSkills from "@/components/builder/StepSkills";
import { FileText } from "lucide-react";

export default function BuildPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const store = useCVStore();

  const goToPreview = () => {
    router.push("/preview");
  };

  return (
    <div className="min-h-screen bg-dubai-off-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 font-bold text-dubai-navy"
          >
            <FileText className="text-dubai-gold" size={24} />
            <span>
              CV<span className="text-dubai-gold">Dubai</span>
            </span>
          </button>
          <span className="text-sm text-gray-400">Step {step} of 4</span>
        </div>
      </header>

      {/* Progress */}
      <ProgressBar currentStep={step} onStepClick={setStep} />

      {/* Form Steps */}
      <div className="max-w-lg mx-auto px-4 pb-10">
        {step === 1 && (
          <StepPersonal
            data={store.personalInfo}
            onChange={store.setPersonalInfo}
            onNext={() => setStep(2)}
          />
        )}

        {step === 2 && (
          <StepExperience
            data={store.experiences}
            onAdd={store.addExperience}
            onUpdate={store.updateExperience}
            onRemove={store.removeExperience}
            onNext={() => setStep(3)}
            onBack={() => setStep(1)}
          />
        )}

        {step === 3 && (
          <StepEducation
            data={store.education}
            onAdd={store.addEducation}
            onUpdate={store.updateEducation}
            onRemove={store.removeEducation}
            onNext={() => setStep(4)}
            onBack={() => setStep(2)}
          />
        )}

        {step === 4 && (
          <StepSkills
            skills={store.skills}
            summary={store.summary}
            jobTitle={store.personalInfo.jobTitle}
            onSkillsChange={store.setSkills}
            onSummaryChange={store.setSummary}
            onNext={goToPreview}
            onBack={() => setStep(3)}
          />
        )}
      </div>
    </div>
  );
}
