export type Country =
  | "Austria"
  | "Germany"
  | "Bulgaria"
  | "France"
  | "Italy"
  | "Netherlands"
  | "Poland"
  | "Belgium";

export type Capital =
  | "Vienna"
  | "Brussels"
  | "Sofia"
  | "Berlin"
  | "Paris"
  | "Rome"
  | "Amsterdam"
  | "Warsaw";

export type CountryDto = {
  country: Country;
  capital: Capital;
};
