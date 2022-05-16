/* eslint-disable operator-linebreak */
export const formatDate = (dateNeedFormat) => {
  const date = new Date(dateNeedFormat);
  return (
    // eslint-disable-next-line operator-linebreak
    (date.getMonth() > 8 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1)) +
    "/" +
    (date.getDate() > 9 ? date.getDate() : "0" + date.getDate()) +
    "/" +
    date.getFullYear()
  );
};
