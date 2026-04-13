"use client";

import { useState } from "react";
import { PersonalInfo } from "@/types/cv";
import { ArrowRight, User, AlertCircle } from "lucide-react";

interface StepPersonalProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
  onNext: () => void;
}

const dubaiCities = [
  "Dubai", "Abu Dhabi", "Sharjah", "Ajman",
  "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Al Ain",
];

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function validatePhone(phone: string): boolean {
  // Allow only digits, +, spaces, dashes, parentheses. Min 7 digits.
  const digitsOnly = phone.replace(/\D/g, "");
  return /^[+\d\s\-()]+$/.test(phone) && digitsOnly.length >= 7 && digitsOnly.length <= 15;
}

function validateName(name: string): boolean {
  // At least 2 characters, only letters, spaces, hyphens, apostrophes
  return /^[a-zA-Z\u0600-\u06FF\s'\-.]{2,}$/.test(name.trim());
}

function sanitizePhone(value: string): string {
  // Strip any character that's not a digit, +, space, dash, or parenthesis
  return value.replace(/[^+\d\s\-()]/g, "");
}

export default function StepPersonal({ data, onChange, onNext }: StepPersonalProps) {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [attempted, setAttempted] = useState(false);

  const updateField = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const markTouched = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const errors: Record<string, string> = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required";
  } else if (!validateName(data.fullName)) {
    errors.fullName = "Please enter a valid name (letters only)";
  }

  if (!data.jobTitle.trim()) {
    errors.jobTitle = "Job title is required";
  } else if (data.jobTitle.trim().length < 2) {
    errors.jobTitle = "Job title must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required";
  } else if (!validateEmail(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!validatePhone(data.phone)) {
    errors.phone = "Enter a valid phone number (digits only, 7-15 digits)";
  }

  if (data.linkedin.trim() && !/linkedin\.com\/in\/[\w-]+/i.test(data.linkedin)) {
    errors.linkedin = "Enter a valid LinkedIn URL (e.g. linkedin.com/in/your-name)";
  }

  const isValid = Object.keys(errors).length === 0;

  const handleNext = () => {
    setAttempted(true);
    if (isValid) {
      onNext();
    }
  };

  const showError = (field: string) => (touched[field] || attempted) && errors[field];

  const inputClass = (field: string) =>
    `w-full px-4 py-3.5 rounded-xl border bg-white text-heading placeholder:text-muted/60 transition-all duration-200 text-sm ${
      showError(field) ? "border-red-400 focus:border-red-500 focus:shadow-red-500/10" : "border-border"
    }`;

  return (
    <div className="space-y-5 animate-fade-in">
      <div className="text-center mb-8">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center mx-auto mb-4">
          <User className="text-primary" size={24} />
        </div>
        <h2 className="text-2xl font-extrabold text-heading">Personal Details</h2>
        <p className="text-muted mt-1.5 text-sm">Let&apos;s start with your basic information</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-heading mb-1.5">
          Full Name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          onBlur={() => markTouched("fullName")}
          placeholder="e.g. Ahmed Al Maktoum"
          className={inputClass("fullName")}
        />
        {showError("fullName") && (
          <p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12} />{errors.fullName}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-heading mb-1.5">
          Target Job Title <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          value={data.jobTitle}
          onChange={(e) => updateField("jobTitle", e.target.value)}
          onBlur={() => markTouched("jobTitle")}
          placeholder="e.g. Senior Marketing Manager"
          className={inputClass("jobTitle")}
        />
        {showError("jobTitle") && (
          <p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12} />{errors.jobTitle}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-heading mb-1.5">
          Email Address <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => updateField("email", e.target.value)}
          onBlur={() => markTouched("email")}
          placeholder="ahmed@example.com"
          className={inputClass("email")}
        />
        {showError("email") && (
          <p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12} />{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-heading mb-1.5">
          Phone Number <span className="text-primary">*</span>
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => updateField("phone", sanitizePhone(e.target.value))}
          onBlur={() => markTouched("phone")}
          placeholder="+971 50 123 4567"
          className={inputClass("phone")}
        />
        {showError("phone") && (
          <p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12} />{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-heading mb-1.5">Location</label>
        <select value={data.location} onChange={(e) => updateField("location", e.target.value)} className={inputClass("location")}>
          <option value="">Select your city</option>
          {dubaiCities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-heading mb-1.5">LinkedIn Profile</label>
        <input
          type="url"
          value={data.linkedin}
          onChange={(e) => updateField("linkedin", e.target.value)}
          onBlur={() => markTouched("linkedin")}
          placeholder="linkedin.com/in/your-profile"
          className={inputClass("linkedin")}
        />
        {showError("linkedin") && (
          <p className="flex items-center gap-1 text-xs text-red-500 mt-1"><AlertCircle size={12} />{errors.linkedin}</p>
        )}
      </div>

      <button
        onClick={handleNext}
        disabled={attempted && !isValid}
        className="w-full py-4 rounded-2xl font-bold text-base transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:transform-none btn-primary text-white flex items-center justify-center gap-2 shadow-lg mt-3"
      >
        Continue to Experience
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
