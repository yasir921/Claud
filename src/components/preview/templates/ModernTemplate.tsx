"use client";

import { CVData } from "@/types/cv";
import { Mail, Phone, MapPin, Link2 } from "lucide-react";

interface TemplateProps {
  data: CVData;
}

export default function ModernTemplate({ data }: TemplateProps) {
  const { personalInfo, experiences, education, skills, summary } = data;

  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header */}
      <div className="bg-[#0A1628] text-white px-6 py-6">
        <h1 className="text-2xl font-bold tracking-tight">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p className="text-[#C8A45C] font-medium mt-1 text-base">
          {personalInfo.jobTitle || "Professional Title"}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-gray-300">
          {personalInfo.email && (
            <span className="flex items-center gap-1">
              <Mail size={12} /> {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1">
              <Phone size={12} /> {personalInfo.phone}
            </span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1">
              <MapPin size={12} /> {personalInfo.location}, UAE
            </span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1">
              <Link2 size={12} /> {personalInfo.linkedin}
            </span>
          )}
        </div>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* Summary */}
        {summary && (
          <section>
            <h2 className="text-xs font-bold text-[#C8A45C] uppercase tracking-widest mb-2 border-b border-gray-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-[#C8A45C] uppercase tracking-widest mb-3 border-b border-gray-200 pb-1">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[#0A1628]">
                        {exp.position || "Position"}
                      </h3>
                      <p className="text-[#C8A45C] font-medium text-xs">
                        {exp.company || "Company"}
                      </p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {formatDate(exp.startDate)} – {exp.current ? "Present" : formatDate(exp.endDate)}
                    </span>
                  </div>
                  {exp.description && (
                    <div className="mt-1.5 text-gray-600 text-xs leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-[#C8A45C] uppercase tracking-widest mb-3 border-b border-gray-200 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-[#0A1628] text-sm">
                      {edu.degree} {edu.field && `in ${edu.field}`}
                    </h3>
                    <p className="text-gray-500 text-xs">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-gray-400">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-[#C8A45C] uppercase tracking-widest mb-2 border-b border-gray-200 pb-1">
              Skills
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 bg-[#0A1628] text-white rounded text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
