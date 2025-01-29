export const FormatDate = (date: Date): string => {
  const month = (date.getMonth() + 1).toString();
  const day = date.getDate().toString();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
};
