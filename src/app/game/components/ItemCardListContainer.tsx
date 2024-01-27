import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { ReadonlyPropsWithChildren } from "src/utils/types";

const ItemCardListContainer: FC<
  ReadonlyPropsWithChildren & {
    "data-testid": string;
    title: "Countries" | "Capitals";
  }
> = ({ children, title, ...rest }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2} {...rest}>
      <Typography
        sx={{
          textDecoration: "underline",
        }}
        textAlign="center"
        variant="h5"
        mb={1}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
};

export default ItemCardListContainer;
