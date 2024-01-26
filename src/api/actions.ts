import axios from "src/utils/axios";
import { endpoints } from "./utils";
import { CountryDto } from "./types";

export const getCountries = () =>
  axios
    .get<CountryDto[]>(endpoints.getCountriesData)
    .then((response) => response.data);
