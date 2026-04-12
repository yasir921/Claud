"use client";

import { CVData } from "@/types/cv";

interface TemplateProps {
  data: CVData;
}

export default function ClassicTemplate({ data }: TemplateProps) {
  const { personalInfo, experiences, education, skills, summary } = data;

  const formatDate = (date: string) => {
    if (!date) return "";
    const [year, month] = date.split("-");
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${months[parseInt(month) - 1]} ${year}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* Header - Classic clean style */}
      <div className="px-6 pt-6 pb-4 border-b-2 border-gray-800">
        <h1 className="text-2xl font-bold text-gray-900">
          {personalInfo.fullName || "Your Name"}
        </h1>
        <p className="text-gray-600 font-medium mt-0.5">
          {personalInfo.jobTitle || "Professional Title"}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2 text-xs text-gray-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && (
            <>
              <span className="text-gray-300">|</span>
              <span>{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.location && (
            <>
              <span className="text-gray-300">|</span>
              <span>{personalInfo.location}, UAE</span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="text-gray-300">|</span>
              <span>{personalInfo.linkedin}</span>
            </>
          )}
        </div>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* Summary */}
        {summary && (
          <section>
            <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2">
              Profile
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm">{summary}</p>
          </section>
        )}

        {/* Experience */}
        {experiences.length > 0 && (
          <section>
            <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
              Experience
            </h2>
            <div className="space-y-4">
              {experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {exp.position || "Position"}
                      </h3>
                      <p className="text-gray-600 text-xs">
                        {exp.company || "Company"}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500 whitespace-nowrap">
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
            <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div key={edu.id} className="flex justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">
                      {edu.degree} {edu.field && `– ${edu.field}`}
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
            <h2 className="text-sm font-bold text-gray-900 uppercase border-b border-gray-300 pb-1 mb-2">
              Skills
            </h2>
            <p className="text-gray-600 text-xs leading-relaxed">
              {skills.join("  •  ")}
            </p>
          </section>
        )}
      </div>
    </div>
  );
}
