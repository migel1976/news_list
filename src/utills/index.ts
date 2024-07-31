export const getFormatedDate = (time: number) => {
  return new Date(time * 1000).toLocaleString();
};
