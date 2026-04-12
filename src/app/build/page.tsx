"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCVStore } from "@/lib/cv-store";
import ProgressBar from "@/components/builder/ProgressBar";
import StepPersonal from "@/components/builder/StepPersonal";
import StepExperience from "@/components/builder/StepExperience";
import StepEducation from "@/components/builder/StepEducation";
import StepSkills from "@/components/builder/StepSkills";
import ResumeUpload from "@/components/builder/ResumeUpload";
import { FileText } from "lucide-react";

export default function BuildPage() {
  const [step, setStep] = useState(1);
  const [showUpload, setShowUpload] = useState(true);
  const router = useRouter();
  const store = useCVStore();

  const hasExistingData = store.personalInfo.fullName.trim() !== "";

  return (
    <div className="min-h-screen bg-gradient-to-b from-surface to-white">
      {/* Header */}
      <header className="glass border-b border-white/40 sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3.5 flex items-center justify-between">
          <button onClick={() => router.push("/")} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <FileText className="text-white" size={16} />
            </div>
            <span className="font-bold text-heading">
              CV<span className="gradient-text">Dubai</span>
            </span>
          </button>
          <span className="text-xs font-semibold text-muted bg-surface-2 px-3 py-1.5 rounded-full">
            Step {step} of 4
          </span>
        </div>
      </header>

      <ProgressBar currentStep={step} onStepClick={setStep} />

      <div className="max-w-lg mx-auto px-4 pb-12">
        {/* Resume Upload - shown at step 1 if no data yet */}
        {step === 1 && showUpload && !hasExistingData && (
          <div className="mb-8 space-y-4">
            <ResumeUpload onComplete={() => setShowUpload(false)} />
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs font-semibold text-muted">or start fresh below</span>
              <div className="flex-1 h-px bg-border" />
            </div>
          </div>
        )}

        {step === 1 && (
          <StepPersonal data={store.personalInfo} onChange={store.setPersonalInfo} onNext={() => setStep(2)} />
        )}
        {step === 2 && (
          <StepExperience data={store.experiences} onAdd={store.addExperience} onUpdate={store.updateExperience} onRemove={store.removeExperience} onNext={() => setStep(3)} onBack={() => setStep(1)} />
        )}
        {step === 3 && (
          <StepEducation data={store.education} onAdd={store.addEducation} onUpdate={store.updateEducation} onRemove={store.removeEducation} onNext={() => setStep(4)} onBack={() => setStep(2)} />
        )}
        {step === 4 && (
          <StepSkills skills={store.skills} summary={store.summary} jobTitle={store.personalInfo.jobTitle} onSkillsChange={store.setSkills} onSummaryChange={store.setSummary} onNext={() => router.push("/preview")} onBack={() => setStep(3)} />
        )}
      </div>
    </div>
  );
}
