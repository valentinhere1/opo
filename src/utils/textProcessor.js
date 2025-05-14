export const countWords = (text) => {
  return text.trim().split(/\s+/).filter(word => word.length > 0).length;
};

export const countCharacters = (text) => {
  return text.length;
};