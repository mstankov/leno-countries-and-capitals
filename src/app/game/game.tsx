"use client";

import { Box, BoxProps, Theme, Typography, useTheme } from "@mui/material";
import ItemCard from "./components/ItemCard";
import { ReactElement, useEffect } from "react";
import { useGetCountries } from "src/api/hooks";
import ItemCardListContainer from "./components/ItemCardListContainer";
import Layout from "./layout";
import { useGame } from "src/state/contexts/GameContext";

function Game() {
  const { data } = useGetCountries();
  const {
    state: { guess, score, progress, countries },
    actions,
    selectedCapital,
    selectedCountry,
    onCapitalSelectHandler,
    onCountrySelectHandler,
  } = useGame();

  useEffect(() => {
    if (data && countries.length === 0 && progress === "not-started") {
      actions.setCountries(data);
    }
  }, [data, actions, countries.length, progress]);

  const theme = useTheme();

  const isItemDisabled = !!guess;

  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Typography variant="h4" textAlign="center" mb={5}>
        Match the countries and capitals
      </Typography>
      <Box
        sx={{
          borderRadius: 4,
          p: 4,
          background: (theme) => theme.palette.grey[400],
          color: (theme) => theme.palette.grey[900],
        }}
      >
        <Typography
          sx={{
            mb: 5,
            textAlign: "center",
          }}
          variant="h4"
        >
          Score: {score}
        </Typography>
        <Box>
          <Box display="flex" justifyContent="space-between">
            <ItemCardListContainer
              title="Countries"
              data-testid="countries-list"
            >
              {countries.map(({ name }) => (
                <ItemCard
                  selected={name === selectedCountry}
                  key={name}
                  value={name}
                  onClick={onCountrySelectHandler}
                  disabled={isItemDisabled}
                  sx={{
                    ...(!!guess &&
                      guess.country.name === name &&
                      getItemGuessBackground(guess.success, theme)),
                  }}
                />
              ))}
            </ItemCardListContainer>
            <ItemCardListContainer title="Capitals" data-testid="capitals-list">
              {countries.map(({ capital }) => (
                <ItemCard
                  selected={capital === selectedCapital}
                  disabled={isItemDisabled}
                  key={capital}
                  value={capital}
                  sx={{
                    ...(!!guess &&
                      guess.country.capital === capital &&
                      getItemGuessBackground(guess.success, theme)),
                  }}
                  onClick={onCapitalSelectHandler}
                />
              ))}
            </ItemCardListContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const getItemGuessBackground = (
  guessed: boolean,
  theme: Theme
): BoxProps["sx"] => ({
  backgroundColor: guessed
    ? theme.palette.success.main
    : theme.palette.error.main,
});

Game.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Game;
