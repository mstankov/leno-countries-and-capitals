import { QueryOptions, useQuery } from "@tanstack/react-query";
import { endpoints } from "./utils";
import * as actions from "./actions";

export const getCountriesQueryData = {
  queryKey: [endpoints.getCountriesData],
  queryFn: actions.getCountries,
} as const;

export const useGetCountries = (options?: QueryOptions) =>
  useQuery({
    ...getCountriesQueryData,
    ...options,
  });
