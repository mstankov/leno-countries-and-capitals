import { Box } from "@mui/material";
import { ReadonlyPropsWithChildren } from "src/utils/types";

export default function Layout({ children }: ReadonlyPropsWithChildren) {
  return (
    <Box sx={{ py: 2, px: "20%" }} width="100%">
      {children}
    </Box>
  );
}
