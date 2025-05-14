export const createNewFile = (name, type = 'file') => {
  const extension = type === 'file' ? '.txt' : '';
  return {
    name: `${name}${extension}`,
    type,
    content: '',
    createdAt: new Date(),
    modifiedAt: new Date()
  };
};

export const validateFilename = (name) => {
  const forbiddenChars = /[<>:"/\\|?*]/g;
  return !forbiddenChars.test(name);
};