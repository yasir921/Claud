import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { text } = body;

    if (!text || !text.trim()) {
      return NextResponse.json(
        { error: "No text provided. Please try again." },
        { status: 400 }
      );
    }

    // Use Groq AI to parse the resume text into structured data
    const groqApiKey = process.env.GROQ_API_KEY;

    if (groqApiKey) {
      const parsed = await parseWithAI(text, groqApiKey);
      return NextResponse.json(parsed);
    }

    // Fallback: basic text parsing without AI
    const parsed = parseResumeBasic(text);
    return NextResponse.json(parsed);
  } catch (error) {
    console.error("Resume parse error:", error);
    return NextResponse.json(
      { error: "Failed to parse resume. Please try again." },
      { status: 500 }
    );
  }
}

async function parseWithAI(text: string, apiKey: string) {
  const prompt = `You are a professional resume parser. Extract the following information from this resume text and return ONLY valid JSON (no markdown, no explanation).

Resume text:
"""
${text.slice(0, 4000)}
"""

Return this exact JSON structure (use empty strings for missing fields, empty arrays for missing lists):
{
  "personalInfo": {
    "fullName": "",
    "email": "",
    "phone": "",
    "location": "",
    "jobTitle": "",
    "linkedin": ""
  },
  "experiences": [
    {
      "company": "",
      "position": "",
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM",
      "current": false,
      "description": "bullet points as text"
    }
  ],
  "education": [
    {
      "institution": "",
      "degree": "",
      "field": "",
      "year": "YYYY"
    }
  ],
  "skills": ["skill1", "skill2"],
  "summary": ""
}`;

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: "You are a resume parser. Return ONLY valid JSON. No markdown. No explanation.",
        },
        { role: "user", content: prompt },
      ],
      temperature: 0.1,
      max_tokens: 2000,
    }),
  });

  if (!response.ok) {
    throw new Error(`Groq API error: ${response.status}`);
  }

  const data = await response.json();
  const content = data.choices[0]?.message?.content || "{}";

  // Extract JSON from response
  const jsonMatch = content.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("Failed to extract JSON from AI response");
  }

  const parsed = JSON.parse(jsonMatch[0]);

  // Add IDs to experiences and education
  let idCounter = 0;
  const makeId = () => `parsed-${Date.now()}-${idCounter++}`;

  if (parsed.experiences) {
    parsed.experiences = parsed.experiences.map((exp: Record<string, unknown>) => ({
      ...exp,
      id: makeId(),
    }));
  }
  if (parsed.education) {
    parsed.education = parsed.education.map((edu: Record<string, unknown>) => ({
      ...edu,
      id: makeId(),
    }));
  }

  return parsed;
}

function parseResumeBasic(text: string) {
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);

  const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
  const phoneMatch = text.match(/[+]?[\d\s\-()]{7,15}/);
  const linkedinMatch = text.match(/linkedin\.com\/in\/[\w-]+/i);

  return {
    personalInfo: {
      fullName: lines[0] || "",
      email: emailMatch?.[0] || "",
      phone: phoneMatch?.[0]?.trim() || "",
      location: "",
      jobTitle: "",
      linkedin: linkedinMatch?.[0] || "",
    },
    experiences: [],
    education: [],
    skills: [],
    summary: "",
    needsReview: true,
  };
}
