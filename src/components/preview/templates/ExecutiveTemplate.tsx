"use client";

import { CVData } from "@/types/cv";

interface TemplateProps {
  data: CVData;
}

export default function ExecutiveTemplate({ data }: TemplateProps) {
  const { personalInfo, experiences, education, skills, summary } = data;

  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header - Elegant executive style */}
      <div className="px-8 pt-8 pb-4 text-center border-b-2 border-[#C8A45C]">
        <h1 className="text-3xl font-light tracking-wider text-[#0A1628] uppercase">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p className="text-[#C8A45C] font-semibold mt-2 text-sm uppercase tracking-widest">
          {personalInfo.jobTitle || "Professional Title"}
        </p>
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-1 mt-3 text-xs text-gray-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.location && <span>{personalInfo.location}, UAE</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </div>

      <div className="px-8 py-6 space-y-6">
        {/* Summary */}
        {summary && (
          <section>
            <h2 className="text-sm font-semibold text-[#0A1628] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A45C]"></span>
              Executive Summary
              <span className="flex-1 h-px bg-[#C8A45C]"></span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm italic">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <section>
            <h2 className="text-sm font-semibold text-[#0A1628] uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A45C]"></span>
              Professional Experience
              <span className="flex-1 h-px bg-[#C8A45C]"></span>
            </h2>
            <div className="space-y-5">
              {experiences.map((exp) => (
                <div key={exp.id} className="pl-4 border-l-2 border-[#C8A45C]">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-[#0A1628] text-sm">
                        {exp.position || "Position"}
                      </h3>
                      <p className="text-gray-500 font-medium text-xs">
                        {exp.company || "Company"}
                      </p>
                    </div>
                    <span className="text-xs text-[#C8A45C] font-medium whitespace-nowrap">
                      {formatDate(exp.startDate)} – {exp.current ? "Present" : formatDate(exp.endDate)}
                    </span>
                  </div>
                  {exp.description && (
                    <div className="mt-2 text-gray-600 text-xs leading-relaxed whitespace-pre-line">
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
            <h2 className="text-sm font-semibold text-[#0A1628] uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A45C]"></span>
              Education
              <span className="flex-1 h-px bg-[#C8A45C]"></span>
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between pl-4 border-l-2 border-gray-200">
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
            <h2 className="text-sm font-semibold text-[#0A1628] uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-8 h-px bg-[#C8A45C]"></span>
              Core Competencies
              <span className="flex-1 h-px bg-[#C8A45C]"></span>
            </h2>
            <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-gray-600">
              {skills.map((skill, i) => (
                <span key={skill}>
                  {skill}
                  {i < skills.length - 1 && (
                    <span className="text-[#C8A45C] ml-2">|</span>
                  )}
                </span>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
