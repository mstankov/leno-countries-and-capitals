import { Box, Skeleton } from "@mui/material";
export default function Loading() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column" gap={4}>
      <Skeleton
        data-testid="title-skeleton"
        variant="rectangular"
        width={600}
        height={70}
        sx={{
          alignSelf: "center",
          mb: 5,
          backgroundColor: "white",
        }}
      />
      <Skeleton
        data-testid="score-skeleton"
        variant="rectangular"
        width={200}
        height={70}
        sx={{
          alignSelf: "center",
          mb: 2,
          backgroundColor: "white",
        }}
      />
      <Skeleton
        data-testid="score-skeleton"
        variant="rectangular"
        width={200}
        height={70}
        sx={{
          alignSelf: "center",
          mb: 2,
          backgroundColor: "white",
        }}
      />
    </Box>
  );
}
