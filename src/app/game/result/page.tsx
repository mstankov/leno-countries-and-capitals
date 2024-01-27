"use client";

import { Box, Button, Typography } from "@mui/material";
import { useGame } from "src/state/contexts/GameContext";
import { getResultMessage } from "./utils";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function Result() {
  const router = useRouter();
  const { state, actions } = useGame();
  const { score } = state;

  const onTryAgainClick = useCallback(() => {
    actions.resetGame();
    router.push("/game");
  }, [actions, router]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={4}
      justifyContent="center"
      textAlign="center"
    >
      <Typography variant="h2" fontWeight={500}>
        Thanks for playing!
      </Typography>
      <Typography variant="h4">
        Final score:{" "}
        <Typography
          component="span"
          variant="h4"
          sx={{
            color: (theme) => theme.palette.success.main,
          }}
        >
          {score}
        </Typography>
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: (theme) => theme.palette.success.main,
        }}
      >
        {getResultMessage(score)}
      </Typography>

      <Button
        onClick={onTryAgainClick}
        variant="contained"
        sx={{
          width: 200,
          alignSelf: "center",
        }}
      >
        Try again
      </Button>
    </Box>
  );
}
