"use client";
import { Box, Typography } from "@mui/material";
import { useGetCountries } from "src/api/hooks";

export default function Game() {
  const { data } = useGetCountries(); // prefetched in the server-side GamePage component

  return (
    <Box>
      <Box data-testid="countries-list"></Box>
      <Box data-testid="capitals-list"></Box>
    </Box>
  );
}
