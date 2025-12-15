import React, { useRef } from 'react';
import { Upload, Check, FileText, Image as ImageIcon, Mic } from 'lucide-react';
import { UploadedFile } from '../types';

interface UploadButtonProps {
  label: string;
  accept: string;
  type: 'image' | 'audio' | 'json';
  onFileSelect: (file: File) => void;
  uploadedFile: UploadedFile | null;
}

const UploadButton: React.FC<UploadButtonProps> = ({
  label,
  accept,
  type,
  onFileSelect,
  uploadedFile,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const getIcon = () => {
    if (uploadedFile) return <Check className="w-6 h-6 text-green-500" />;
    switch (type) {
      case 'image': return <ImageIcon className="w-6 h-6 text-slate-500" />;
      case 'audio': return <Mic className="w-6 h-6 text-slate-500" />;
      case 'json': return <FileText className="w-6 h-6 text-slate-500" />;
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleChange}
        accept={accept}
        className="hidden"
      />
      <button
        onClick={handleClick}
        className={`
          relative flex items-center justify-center gap-3 p-4 border-2 rounded-xl transition-all duration-200
          ${uploadedFile 
            ? 'border-green-500 bg-green-50 hover:bg-green-100' 
            : 'border-slate-200 bg-white hover:border-blue-400 hover:bg-slate-50'
          }
        `}
      >
        <div className="p-2 bg-white rounded-full shadow-sm">
          {getIcon()}
        </div>
        <div className="flex flex-col items-start">
          <span className={`text-sm font-semibold ${uploadedFile ? 'text-green-800' : 'text-slate-700'}`}>
            {uploadedFile ? 'Uploaded' : label}
          </span>
          <span className="text-xs text-slate-400 truncate max-w-[120px]">
            {uploadedFile ? uploadedFile.file.name : `Select ${type}`}
          </span>
        </div>
        {uploadedFile && (
           <div className="absolute top-2 right-2">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
           </div>
        )}
      </button>
      
      {/* Preview Area */}
      {type === 'image' && uploadedFile?.previewUrl && (
        <div className="mt-2 w-full h-32 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 relative group">
          <img 
            src={uploadedFile.previewUrl} 
            alt="Preview" 
            className="w-full h-full object-cover" 
          />
        </div>
      )}
      
      {type === 'json' && uploadedFile?.content && (
        <div className="mt-2 w-full h-32 bg-slate-900 rounded-lg overflow-auto border border-slate-200 p-2 text-xs text-green-400 font-mono">
            <pre>{uploadedFile.content.slice(0, 150)}...</pre>
        </div>
      )}

      {type === 'audio' && uploadedFile && (
         <div className="mt-2 w-full bg-slate-100 rounded-lg p-2 flex items-center justify-center">
            <span className="text-xs text-slate-500">Audio file ready</span>
         </div>
      )}

    </div>
  );
};

export default UploadButton;