export interface UploadedFile {
  file: File;
  previewUrl?: string; // For images
  content?: string; // For JSON text
  base64?: string; // For sending to API
  mimeType: string;
}

export interface SectionData {
  image: UploadedFile | null;
  audio: UploadedFile | null;
  json: UploadedFile | null;
}

export enum TriageLevel {
  LEVEL_1 = "Level 1",
  LEVEL_2 = "Level 2",
  LEVEL_3 = "Level 3",
}

export interface TriageResponse {
  Triage_Level: string;
  Triage_Action: string;
  Reasoning_Summary: string;
}

export interface AnalysisState {
  status: 'idle' | 'loading' | 'success' | 'error';
  result: TriageResponse | null;
  error?: string;
}