const validFileExtensions = { image: ['jpg', 'png', 'jpeg'] };

export function isValidFileType(fileName, fileType) {
  return fileName && validFileExtensions[fileType].indexOf(fileName.split('.').pop()) > -1;
}