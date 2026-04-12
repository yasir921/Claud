"use client";

const steps = [
  { num: 1, label: "Personal" },
  { num: 2, label: "Experience" },
  { num: 3, label: "Education" },
  { num: 4, label: "Skills" },
];

interface ProgressBarProps {
  currentStep: number;
  onStepClick: (step: number) => void;
}

export default function ProgressBar({ currentStep, onStepClick }: ProgressBarProps) {
  return (
    <div className="w-full px-4 py-6">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {steps.map((step, index) => (
          <div key={step.num} className="flex items-center">
            <button
              onClick={() => onStepClick(step.num)}
              className="flex flex-col items-center gap-1.5 transition-all"
            >
              <div
                className={`w-11 h-11 rounded-2xl flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  currentStep === step.num
                    ? "bg-gradient-to-br from-primary to-primary-dark text-white scale-110 shadow-lg shadow-primary/30"
                    : currentStep > step.num
                    ? "bg-success/10 text-success"
                    : "bg-surface-2 text-muted"
                }`}
              >
                {currentStep > step.num ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8.5L6.5 12L13 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  step.num
                )}
              </div>
              <span className={`text-xs font-semibold transition-colors ${
                currentStep === step.num ? "text-primary" : "text-muted"
              }`}>
                {step.label}
              </span>
            </button>
            {index < steps.length - 1 && (
              <div className="relative w-8 sm:w-16 h-1 mx-1.5 rounded-full bg-surface-2 overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                  style={{ width: currentStep > step.num ? "100%" : "0%" }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
