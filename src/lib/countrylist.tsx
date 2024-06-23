import { useMemo } from "react";
import countryList from "react-select-country-list";

export const CountryList = () => {
  const options = useMemo(() => countryList().getData(), []);
  return options;
};

