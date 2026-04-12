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
              className={`flex flex-col items-center gap-1 transition-all ${
                currentStep >= step.num ? "opacity-100" : "opacity-40"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  currentStep === step.num
                    ? "bg-dubai-gold text-white scale-110 shadow-lg"
                    : currentStep > step.num
                    ? "bg-dubai-navy text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {currentStep > step.num ? "✓" : step.num}
              </div>
              <span className="text-xs font-medium text-dubai-navy">
                {step.label}
              </span>
            </button>
            {index < steps.length - 1 && (
              <div
                className={`w-8 sm:w-16 h-0.5 mx-1 transition-all ${
                  currentStep > step.num ? "bg-dubai-navy" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
