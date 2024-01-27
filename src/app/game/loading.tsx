import { Box, Skeleton } from "@mui/material";
import ItemCardListSkeletonColumns from "./components/ItemCardListSkeletonColumns";

export default function Loading() {
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Skeleton
        data-testid="title-skeleton"
        variant="rectangular"
        width={400}
        height={40}
        sx={{
          alignSelf: "center",
          mb: 5,
          backgroundColor: "white",
          borderRadius: 2,
        }}
      />

      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{
          p: 4,
          border: "1px solid white",
          borderRadius: 4,
        }}
      >
        <Skeleton
          data-testid="score-skeleton"
          variant="rectangular"
          width={200}
          height={40}
          sx={{
            alignSelf: "center",
            mb: 5,
            backgroundColor: "white",
            borderRadius: 2,
          }}
        />
        <Box display="flex" justifyContent="space-between">
          <ItemCardListSkeletonColumns />
        </Box>
      </Box>
    </Box>
  );
}
