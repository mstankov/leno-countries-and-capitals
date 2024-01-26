import { Box } from "@mui/material";
import { FC } from "react";
import { Country as CountryType } from "src/api/types";

export type CountryProps = {
  country: CountryType;
  onClick: (country: CountryType) => void;
};

const Country: FC<CountryProps> = ({ country, onClick }) => {
  const onClickHandler = () => {
    onClick(country);
  };

  return (
    <Box data-testid={`country-${country}`} onClick={onClickHandler}>
      {country}
    </Box>
  );
};

export default Country;
