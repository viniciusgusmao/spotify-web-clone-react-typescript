const hexToR = (h: string) => parseInt(cutHex(h).substring(0, 2), 16);
const hexToG = (h: string) => parseInt(cutHex(h).substring(2, 4), 16);
const hexToB = (h: string) => parseInt(cutHex(h).substring(4, 6), 16);
const cutHex = (h: string) => (h.charAt(0) == '#' ? h.substring(1, 7) : h);

export const convertHexToRgb = (color: string): string => {
  return `rgb(${hexToR(color)},${hexToG(color)},${hexToB(color)},0)`;
};

export const convertHexToRgba = (color: string): string => {
  return `rgba(${hexToR(color)},${hexToG(color)},${hexToB(color)},0.5)`;
};
