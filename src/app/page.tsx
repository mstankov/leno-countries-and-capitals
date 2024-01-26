import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        padding: "6rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box textAlign="center">
        <Typography data-testid="home-page-title" variant="h1" fontWeight={600}>
          Countries and Capitals
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Box textTransform="uppercase" p={3} mt={5} border="1px solid white">
            <Typography variant="h4" mb={2}>
              Rules
            </Typography>
            <Typography variant="body2">
              Match each country with its respective capital
            </Typography>
            <Typography variant="body2">
              The game lasts until all countries are matched with their capitals
            </Typography>
            <Box>
              <Typography variant="caption">
                A correct match adds 7 points
              </Typography>
              <Typography variant="caption">
                An incorrect match subtracts 5 points
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box alignSelf="center" pt={4}>
        <Button
          data-testid="btn-start-new-game"
          LinkComponent={Link}
          href="/game"
          variant="contained"
          sx={{
            height: 80,
            width: 200,
            fontSize: "1.5rem",
          }}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
}
