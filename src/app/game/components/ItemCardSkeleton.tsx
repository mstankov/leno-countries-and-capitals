import { Skeleton } from "@mui/material";

const ItemCardSkeleton = () => {
  return (
    <Skeleton
      variant="rectangular"
      height={70}
      width={200}
      sx={{
        p: 3,
        backgroundColor: "white",
      }}
    />
  );
};

export default ItemCardSkeleton;
