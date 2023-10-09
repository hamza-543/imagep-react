export const getImageUrl = (file) => URL.createObjectURL(file);

export const toImageMimeTypes = [
  { name: 'JPEG', mType: 'image/jpeg' },
  { name: 'PNG', mType: 'image/png' },
  // { name: 'SVG', mType: 'image/svg+xml' },
  // { name: 'BMP', mType: 'image/bmp' },
  // { name: 'HEIF', mType: 'image/heif' },
];

export const formImageMimeTypes = [
  { name: 'JPEG', mType: 'image/jpeg' },
  { name: 'JPG', mType: 'image/jpg' },
  { name: 'PNG', mType: 'image/png' },
  // { name: 'SVG', mType: 'image/svg+xml' },
  // { name: 'BMP', mType: 'image/bmp' },
  // { name: 'HEIF', mType: 'image/heif' },
];

export const acceptedInputMime = formImageMimeTypes.map((item) => `.${item.name.toLowerCase()}`).join(', ');

export const downloadBlob = (data, fileName) => {
  const blob = new Blob([data], { type: 'application/zip' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  a.click();
  window.URL.revokeObjectURL(url);
}
