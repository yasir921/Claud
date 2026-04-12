"use client";

import { CVData } from "@/types/cv";
import ModernTemplate from "./templates/ModernTemplate";
import ExecutiveTemplate from "./templates/ExecutiveTemplate";
import ClassicTemplate from "./templates/ClassicTemplate";

interface CVPreviewProps {
  data: CVData;
  template: CVData["selectedTemplate"];
}

export default function CVPreview({ data, template }: CVPreviewProps) {
  switch (template) {
    case "modern":
      return <ModernTemplate data={data} />;
    case "executive":
      return <ExecutiveTemplate data={data} />;
    case "classic":
      return <ClassicTemplate data={data} />;
    default:
      return <ModernTemplate data={data} />;
  }
}
