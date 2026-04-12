"use client";

import { useState, useRef } from "react";
import { Upload, FileText, Loader2, CheckCircle, AlertCircle, X } from "lucide-react";
import { useCVStore } from "@/lib/cv-store";

interface ResumeUploadProps {
  onComplete: () => void;
}

export default function ResumeUpload({ onComplete }: ResumeUploadProps) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);
  const store = useCVStore();

  const handleFile = async (file: File) => {
    if (!file) return;

    const validTypes = [
      "application/pdf",
      "text/plain",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const validExtensions = [".pdf", ".txt", ".doc", ".docx"];
    const hasValidExt = validExtensions.some((ext) =>
      file.name.toLowerCase().endsWith(ext)
    );

    if (!validTypes.includes(file.type) && !hasValidExt) {
      setStatus("error");
      setErrorMsg("Please upload a PDF, Word, or text file.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setStatus("error");
      setErrorMsg("File too large. Maximum 10MB.");
      return;
    }

    setFileName(file.name);
    setUploading(true);
    setStatus("idle");
    setErrorMsg("");

    try {
      const formData = new FormData();
      formData.append("resume", file);

      const response = await fetch("/api/parse-resume", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to parse resume");
      }

      // Fill in the store with parsed data
      if (data.personalInfo) {
        store.setPersonalInfo({
          fullName: data.personalInfo.fullName || "",
          email: data.personalInfo.email || "",
          phone: data.personalInfo.phone || "",
          location: data.personalInfo.location || "",
          jobTitle: data.personalInfo.jobTitle || "",
          linkedin: data.personalInfo.linkedin || "",
        });
      }

      if (data.experiences?.length) {
        data.experiences.forEach(
          (exp: {
            id?: string;
            company?: string;
            position?: string;
            startDate?: string;
            endDate?: string;
            current?: boolean;
            description?: string;
          }) => {
            store.addExperience({
              id: exp.id || crypto.randomUUID(),
              company: exp.company || "",
              position: exp.position || "",
              startDate: exp.startDate || "",
              endDate: exp.endDate || "",
              current: exp.current || false,
              description: exp.description || "",
            });
          }
        );
      }

      if (data.education?.length) {
        data.education.forEach(
          (edu: {
            id?: string;
            institution?: string;
            degree?: string;
            field?: string;
            year?: string;
          }) => {
            store.addEducation({
              id: edu.id || crypto.randomUUID(),
              institution: edu.institution || "",
              degree: edu.degree || "",
              field: edu.field || "",
              year: edu.year || "",
            });
          }
        );
      }

      if (data.skills?.length) {
        store.setSkills(data.skills);
      }

      if (data.summary) {
        store.setSummary(data.summary);
      }

      setStatus("success");
      setTimeout(() => onComplete(), 1500);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to parse resume"
      );
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className="animate-fade-in">
      <input
        ref={fileRef}
        type="file"
        accept=".pdf,.doc,.docx,.txt"
        onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])}
        className="hidden"
      />

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => !uploading && fileRef.current?.click()}
        className={`relative cursor-pointer rounded-2xl border-2 border-dashed p-8 text-center transition-all duration-300 ${
          dragging
            ? "border-primary bg-primary/5 scale-[1.02]"
            : status === "success"
            ? "border-success/40 bg-success/3"
            : status === "error"
            ? "border-red-300 bg-red-50/50"
            : "border-border hover:border-primary/40 hover:bg-primary/2"
        }`}
      >
        {uploading ? (
          <div className="space-y-3">
            <Loader2 className="mx-auto text-primary animate-spin" size={36} />
            <p className="font-semibold text-heading">
              Analyzing your resume...
            </p>
            <p className="text-sm text-muted">
              AI is extracting your details from {fileName}
            </p>
          </div>
        ) : status === "success" ? (
          <div className="space-y-3">
            <CheckCircle className="mx-auto text-success" size={36} />
            <p className="font-semibold text-heading">
              Resume parsed successfully!
            </p>
            <p className="text-sm text-muted">
              Your details have been filled in. Review and edit below.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/5 flex items-center justify-center mx-auto">
              <Upload className="text-primary" size={28} />
            </div>
            <div>
              <p className="font-semibold text-heading">
                Have an existing resume?
              </p>
              <p className="text-sm text-muted mt-1">
                Upload it and we&apos;ll auto-fill everything for you
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs text-muted">
              <FileText size={12} />
              PDF, Word, or Text file (max 10MB)
            </div>
          </div>
        )}

        {status === "error" && (
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-red-500">
            <AlertCircle size={14} />
            {errorMsg}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setStatus("idle");
                setErrorMsg("");
              }}
              className="ml-1"
            >
              <X size={14} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
