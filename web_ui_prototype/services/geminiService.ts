import { GoogleGenAI, Type, Schema } from "@google/genai";
import { SectionData, TriageResponse } from "../types";
import { TRIAGE_SYSTEM_PROMPT } from "../prompts/triagePrompt";

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    Triage_Level: {
      type: Type.STRING,
      enum: ["Level 1", "Level 2", "Level 3"],
      description: "The calculated triage level based on the protocol.",
    },
    Triage_Action: {
      type: Type.STRING,
      description: "Immediate action text required.",
    },
    Reasoning_Summary: {
      type: Type.STRING,
      description: "Brief, 1-2 sentence explanation citing specific multimodal evidence.",
    },
  },
  required: ["Triage_Level", "Triage_Action", "Reasoning_Summary"],
};

export const analyzeTriage = async (
  baseline: SectionData,
  realtime: SectionData
): Promise<TriageResponse> => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key not found in environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const parts: any[] = [];

  // 1. Add Baseline Context
  let baselineText = "--- SECTION A: BASELINE DATA ---\n";
  if (baseline.json?.content) {
    baselineText += `Baseline Sensor Data (JSON): ${baseline.json.content}\n`;
  } else {
    baselineText += "No Baseline Sensor Data provided.\n";
  }
  parts.push({ text: baselineText });

  if (baseline.image?.base64) {
    parts.push({
      inlineData: {
        mimeType: baseline.image.mimeType,
        data: baseline.image.base64,
      },
    });
  }

  if (baseline.audio?.base64) {
    parts.push({
      inlineData: {
        mimeType: baseline.audio.mimeType,
        data: baseline.audio.base64,
      },
    });
  }

  // 2. Add Realtime Context
  let realtimeText = "\n--- SECTION B: REAL-TIME DATA (Analyze This) ---\n";
  if (realtime.json?.content) {
    realtimeText += `Current Sensor Data (JSON): ${realtime.json.content}\n`;
  } else {
    realtimeText += "No Current Sensor Data provided.\n";
  }
  parts.push({ text: realtimeText });

  if (realtime.image?.base64) {
    parts.push({
      inlineData: {
        mimeType: realtime.image.mimeType,
        data: realtime.image.base64,
      },
    });
  }

  if (realtime.audio?.base64) {
    parts.push({
      inlineData: {
        mimeType: realtime.audio.mimeType,
        data: realtime.audio.base64,
      },
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview", // Using the robust model for complex reasoning
      contents: [
        {
          role: "user",
          parts: parts,
        },
      ],
      config: {
        systemInstruction: TRIAGE_SYSTEM_PROMPT,
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini.");

    return JSON.parse(text) as TriageResponse;
  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};