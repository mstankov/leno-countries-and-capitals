import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { CORRECT_GUESS_POINTS, WRONG_GUESS_POINTS } from "src/api/constants";

export default function Home() {
  return (
    <Box component="main" sx={{}}>
      <Box textAlign="center">
        <Typography data-testid="home-page-title" variant="h2" fontWeight={600}>
          Countries and Capitals
        </Typography>
        <Box display="flex" flexDirection="column" gap={1}>
          <Box
            textTransform="uppercase"
            p={3}
            mt={5}
            border="1px solid white"
            borderRadius={4}
          >
            <Typography variant="h4" mb={2}>
              Rules
            </Typography>
            <Typography variant="subtitle2">
              Match each country with its respective capital
            </Typography>
            <Typography variant="subtitle2">
              The game lasts until all and capitals are matched
            </Typography>
            <Box
              display="flex"
              mt={2}
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography variant="caption">
                A correct guess adds{" "}
                <Typography
                  component="span"
                  variant="caption"
                  color="green"
                  fontWeight="bold"
                >
                  {CORRECT_GUESS_POINTS}
                </Typography>{" "}
                points
              </Typography>
              <Typography variant="caption">
                An incorrect guess subtracts{" "}
                <Typography
                  component="span"
                  variant="caption"
                  color="green"
                  fontWeight="bold"
                >
                  {WRONG_GUESS_POINTS}
                </Typography>{" "}
                points
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={4} display="flex" justifyContent="center">
        <Button
          data-testid="btn-start-new-game"
          LinkComponent={Link}
          href="/game"
          variant="contained"
          sx={{
            height: 80,
            width: 200,
            fontSize: "1.5rem",
            alignSelf: "center",
          }}
        >
          Start
        </Button>
      </Box>
    </Box>
  );
}
