import { UploadedFile } from '../types';

export const readFileAsBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      // Remove the Data URL prefix (e.g., "data:image/png;base64,")
      const base64 = result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
  });
};

export const readFileAsText = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
    reader.readAsText(file);
  });
};

export const processFile = async (file: File): Promise<UploadedFile> => {
  const isImage = file.type.startsWith('image/');
  const isAudio = file.type.startsWith('audio/');
  const isJson = file.type === 'application/json' || file.name.endsWith('.json');

  let previewUrl: string | undefined;
  let content: string | undefined;
  let base64: string | undefined;

  if (isImage) {
    previewUrl = URL.createObjectURL(file);
    base64 = await readFileAsBase64(file);
  } else if (isAudio) {
    base64 = await readFileAsBase64(file);
  } else if (isJson) {
    content = await readFileAsText(file);
  }

  return {
    file,
    previewUrl,
    content,
    base64,
    mimeType: file.type || (isJson ? 'application/json' : 'application/octet-stream'),
  };
};