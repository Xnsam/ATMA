import React from 'react';
import { UploadedFile, SectionData } from '../types';
import UploadButton from './UploadButton';
import { processFile } from '../utils/fileHelpers';

interface SectionProps {
  title: string;
  description: string;
  data: SectionData;
  setData: React.Dispatch<React.SetStateAction<SectionData>>;
  colorTheme: 'blue' | 'indigo';
}

const Section: React.FC<SectionProps> = ({ title, description, data, setData, colorTheme }) => {
  const handleUpload = async (file: File, type: keyof SectionData) => {
    try {
      const processed = await processFile(file);
      setData((prev) => ({ ...prev, [type]: processed }));
    } catch (err) {
      console.error("File processing error", err);
      alert("Error processing file.");
    }
  };

  const themeClass = colorTheme === 'blue' ? 'bg-blue-50 border-blue-100' : 'bg-indigo-50 border-indigo-100';
  const textClass = colorTheme === 'blue' ? 'text-blue-900' : 'text-indigo-900';

  return (
    <div className={`flex-1 rounded-2xl border ${themeClass} p-6 shadow-sm transition-all hover:shadow-md`}>
      <div className="mb-6">
        <h2 className={`text-xl font-bold ${textClass} flex items-center gap-2`}>
          {title}
        </h2>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <UploadButton
          label="Upload Image"
          accept="image/*"
          type="image"
          onFileSelect={(f) => handleUpload(f, 'image')}
          uploadedFile={data.image}
        />
        <UploadButton
          label="Upload Audio"
          accept="audio/*"
          type="audio"
          onFileSelect={(f) => handleUpload(f, 'audio')}
          uploadedFile={data.audio}
        />
        <UploadButton
          label="Upload JSON"
          accept=".json,application/json"
          type="json"
          onFileSelect={(f) => handleUpload(f, 'json')}
          uploadedFile={data.json}
        />
      </div>
    </div>
  );
};

export default Section;