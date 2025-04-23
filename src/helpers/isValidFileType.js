const validFileExtensions = { image: ['jpeg', 'jpg', 'png', 'avif', 'bmp', 'webp'] };

export function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}