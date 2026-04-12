"use client";

import { PersonalInfo } from "@/types/cv";

interface StepPersonalProps {
  data: PersonalInfo;
  onChange: (data: PersonalInfo) => void;
  onNext: () => void;
}

const dubaiCities = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "Al Ain",
];

export default function StepPersonal({ data, onChange, onNext }: StepPersonalProps) {
  const updateField = (field: keyof PersonalInfo, value: string) => {
    onChange({ ...data, [field]: value });
  };

  const isValid =
    data.fullName.trim() !== "" &&
    data.email.trim() !== "" &&
    data.phone.trim() !== "" &&
    data.jobTitle.trim() !== "";

  return (
    <div className="space-y-5 animate-in fade-in">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-dubai-navy">Personal Details</h2>
        <p className="text-gray-500 mt-1">Let&apos;s start with your basic information</p>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dubai-navy mb-1.5">
          Full Name *
        </label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => updateField("fullName", e.target.value)}
          placeholder="e.g. Ahmed Al Maktoum"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dubai-navy mb-1.5">
          Target Job Title *
        </label>
        <input
          type="text"
          value={data.jobTitle}
          onChange={(e) => updateField("jobTitle", e.target.value)}
          placeholder="e.g. Senior Marketing Manager"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dubai-navy mb-1.5">
          Email Address *
        </label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => updateField("email", e.target.value)}
          placeholder="ahmed@example.com"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dubai-navy mb-1.5">
          Phone Number *
        </label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          placeholder="+971 50 123 4567"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-dubai-navy mb-1.5">
          Location
        </label>
        <select
          value={data.location}
          onChange={(e) => updateField("location", e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy bg-white transition-all"
        >
          <option value="">Select your city</option>
          {dubaiCities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-dubai-navy mb-1.5">
          LinkedIn Profile
        </label>
        <input
          type="url"
          value={data.linkedin}
          onChange={(e) => updateField("linkedin", e.target.value)}
          placeholder="linkedin.com/in/your-profile"
          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dubai-navy placeholder:text-gray-400 transition-all"
        />
      </div>

      <button
        onClick={onNext}
        disabled={!isValid}
        className="w-full py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed bg-dubai-gold text-white hover:brightness-110 active:scale-[0.98] shadow-lg shadow-dubai-gold/25"
      >
        Continue to Experience →
      </button>
    </div>
  );
}
