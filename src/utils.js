export const getImageUrl = (file) => URL.createObjectURL(file);

export const imageMimeTypes = [
  { name: 'JPEG', mType: 'image/jpeg' },
  { name: 'PNG', mType: 'image/png' },
  { name: 'SVG', mType: 'image/svg+xml' },
  { name: 'BMP', mType: 'image/bmp' },
  { name: 'HEIF', mType: 'image/heif' },
];

export const acceptedInputMime = imageMimeTypes.map((item) => `.${item.name.toLowerCase()}`).join(', ');
