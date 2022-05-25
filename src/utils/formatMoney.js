/* eslint-disable react/jsx-no-useless-fragment */
// format 3000 to 3k
export function moneyFormatterToK(num) {
  return Math.abs(num) > 999
    ? `${Math.sign(num) * (Math.abs(num) / 1000).toFixed(1)}K`
    : Math.sign(num) * Math.abs(num);
}
export const renderMoney = (value) => {
  // eslint-disable-next-line no-useless-concat
  return <>{` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' ' + '$'}</>;
};
// format 3000 to 3.000
export function moneyFormatter(num) {
  return Intl.NumberFormat().format(num);
}
