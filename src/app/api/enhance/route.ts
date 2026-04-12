import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, text, jobTitle, experiences, skills } = body;

    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 500 }
      );
    }

    let prompt = "";
    let systemPrompt = "You are a professional CV writer specializing in the Dubai and UAE job market. Write in confident, professional English. Be concise and impactful.";

    switch (type) {
      case "enhance-bullets":
        systemPrompt += " Return ONLY the enhanced bullet points, one per line starting with •. No other text.";
        prompt = `Transform this job description into 3-5 powerful bullet points using action verbs and quantified results where possible. Make it ATS-friendly for the UAE market.

Job Title: ${jobTitle}
Original text:
"""
${text}
"""`;
        break;

      case "generate-summary":
        systemPrompt += " Return ONLY the summary paragraph. No other text. 3-4 sentences max.";
        prompt = `Write a professional summary for a ${jobTitle || "professional"} based on this background. Make it compelling for Dubai/UAE employers.

Experience: ${JSON.stringify(experiences?.slice(0, 3))}
Skills: ${skills?.join(", ")}`;
        break;

      case "suggest-skills":
        systemPrompt += " Return ONLY a JSON array of skill strings. No other text. Example: [\"Skill 1\", \"Skill 2\"]";
        prompt = `Suggest 10-12 relevant skills for a "${jobTitle}" role in the UAE/Dubai job market. Include a mix of technical and soft skills that are in high demand. Return as JSON array.`;
        break;

      case "ats-optimize":
        systemPrompt += " Return ONLY the optimized text. No explanation.";
        prompt = `Optimize this CV text to pass ATS (Applicant Tracking Systems). Add relevant keywords for the UAE market, use standard section formatting, and ensure strong action verbs.

Job Target: ${jobTitle}
Text to optimize:
"""
${text}
"""`;
        break;

      default:
        return NextResponse.json({ error: "Invalid type" }, { status: 400 });
    }

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${groqApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
          temperature: 0.3,
          max_tokens: 1000,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Groq error:", errorText);
      return NextResponse.json(
        { error: "AI service error" },
        { status: 500 }
      );
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || "";

    return NextResponse.json({ result: content });
  } catch (error) {
    console.error("AI enhance error:", error);
    return NextResponse.json(
      { error: "Failed to enhance text" },
      { status: 500 }
    );
  }
}
