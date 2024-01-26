import { Box } from "@mui/material";
import { FC } from "react";
import { Capital as CapitalType } from "src/api/types";

export type CapitalProps = {
  capital: CapitalType;
  onClick: (capital: CapitalType) => void;
};

const Capital: FC<CapitalProps> = ({ capital, onClick }) => {
  const onClickHandler = () => {
    onClick(capital);
  };

  return (
    <Box data-testid={`capital-${capital}`} onClick={onClickHandler}>
      {capital}
    </Box>
  );
};

export default Capital;
