import { useCallback, useEffect, useState } from "react";
import { Capital, Country } from "src/api/types";
import { useGameReducer } from "./useGameReducer";
import {
  CORRECT_GUESS_POINTS,
  ITEM_REMOVE_DELAY_MILLISECONDS,
  WRONG_GUESS_POINTS,
} from "src/api/constants";
import { useRouter } from "next/navigation";

export const useGameState = () => {
  const router = useRouter();
  const gameReducer = useGameReducer();

  const [selectedCountry, setSelectedCountry] = useState<Country | null>();
  const [selectedCapital, setSelectedCapital] = useState<Capital | null>();

  const {
    state: { score, data, countries, progress },
    actions,
  } = gameReducer;

  useEffect(() => {
    // TODO: Refactor, too much is happening in a single useEffect. Hard to read.
    if (selectedCountry && selectedCapital) {
      const match = data.find(
        (x) => x.capital === selectedCapital && x.name === selectedCountry
      );

      if (match) {
        // update points, set current guess and remove selections after delay
        actions.setScore(score + CORRECT_GUESS_POINTS);
        actions.setGuess({
          country: match,
          success: true,
        });

        setTimeout(() => {
          actions.removeItems(match);
          actions.setGuess(null);

          setSelectedCapital(null);
          setSelectedCountry(null);
        }, ITEM_REMOVE_DELAY_MILLISECONDS);
      } else {
        // update points, set current guess and reset selections after delay
        actions.setScore(
          score - WRONG_GUESS_POINTS <= 0 ? 0 : score - WRONG_GUESS_POINTS
        );
        actions.setGuess({
          country: {
            name: selectedCountry,
            capital: selectedCapital,
          },
          success: false,
        });

        setTimeout(() => {
          actions.setGuess(null);

          setSelectedCapital(null);
          setSelectedCountry(null);
        }, ITEM_REMOVE_DELAY_MILLISECONDS);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCountry, selectedCapital, data, actions]);

  useEffect(() => {
    if (progress === "in-progress" && !countries.length) {
      actions.setProgress("done");
    }
  }, [actions, countries, progress, score]);

  useEffect(() => {
    if (progress === "done") {
      router.push("/game/result");
    }
  }, [progress, router]);

  const onCountrySelectHandler = useCallback(
    (country: Country) => {
      setSelectedCountry(country === selectedCountry ? null : country);
    },
    [setSelectedCountry, selectedCountry]
  );

  const onCapitalSelectHandler = useCallback(
    (capital: Capital) => {
      setSelectedCapital(capital);

      if (progress === "not-started") {
        actions.setProgress("in-progress");
      }
    },
    [actions, progress]
  );

  return {
    ...gameReducer,
    selectedCountry,
    selectedCapital,
    onCountrySelectHandler,
    onCapitalSelectHandler,
  };
};
