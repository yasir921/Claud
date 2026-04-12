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
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden text-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white px-6 py-7">
        <h1 className="text-2xl font-extrabold tracking-tight">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p className="text-indigo-200 font-semibold mt-1 text-base">
          {personalInfo.jobTitle || "Professional Title"}
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs text-indigo-200/80">
          {personalInfo.email && (
            <span className="flex items-center gap-1"><Mail size={11} /> {personalInfo.email}</span>
          )}
          {personalInfo.phone && (
            <span className="flex items-center gap-1"><Phone size={11} /> {personalInfo.phone}</span>
          )}
          {personalInfo.location && (
            <span className="flex items-center gap-1"><MapPin size={11} /> {personalInfo.location}, UAE</span>
          )}
          {personalInfo.linkedin && (
            <span className="flex items-center gap-1"><Link2 size={11} /> {personalInfo.linkedin}</span>
          )}
        </div>
      </div>

      <div className="px-6 py-5 space-y-5">
        {summary && (
          <section>
            <h2 className="text-xs font-bold text-[#4F46E5] uppercase tracking-widest mb-2 border-b border-gray-100 pb-1.5">
              Professional Summary
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">{summary}</p>
          </section>
        )}

        {experiences.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-[#4F46E5] uppercase tracking-widest mb-3 border-b border-gray-100 pb-1.5">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">{exp.position || "Position"}</h3>
                      <p className="text-[#4F46E5] font-medium text-xs">{exp.company || "Company"}</p>
                    </div>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {formatDate(exp.startDate)} – {exp.current ? "Present" : formatDate(exp.endDate)}
                    </span>
                  </div>
                  {exp.description && (
                    <div className="mt-1.5 text-gray-500 text-xs leading-relaxed whitespace-pre-line">{exp.description}</div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-[#4F46E5] uppercase tracking-widest mb-3 border-b border-gray-100 pb-1.5">Education</h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{edu.degree} {edu.field && `in ${edu.field}`}</h3>
                    <p className="text-gray-400 text-xs">{edu.institution}</p>
                  </div>
                  <span className="text-xs text-gray-400">{edu.year}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section>
            <h2 className="text-xs font-bold text-[#4F46E5] uppercase tracking-widest mb-2 border-b border-gray-100 pb-1.5">Skills</h2>
            <div className="flex flex-wrap gap-1.5">
              {skills.map((skill) => (
                <span key={skill} className="px-2.5 py-1 bg-[#4F46E5]/8 text-[#4F46E5] rounded-md text-xs font-medium">
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
