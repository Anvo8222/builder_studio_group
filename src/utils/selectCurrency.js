import { useSelector } from "react-redux";
import currencyList from "../data/currencys";

export const currency = (idCurrency) => {
  const newCurrency = currencyList.filter((item) => item.id === idCurrency);
  return newCurrency;
};
