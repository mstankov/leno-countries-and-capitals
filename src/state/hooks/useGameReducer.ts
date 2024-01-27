import { useMemo, useReducer } from "react";
import { GameProgress, INITIAL_STATE, gameReducer } from "../gameReducer";
import { Capital, Country, CountryDto } from "src/api/types";

export const useGameReducer = () => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const actions = useMemo(() => {
    const resetGame = () => {
      dispatch({ type: "RESET_GAME" });
    };
    const setData = (payload: {
      data: CountryDto[];
      countries: Country[];
      capitals: Capital[];
    }) => {
      dispatch({ type: "SET_DATA", payload });
    };
    const setGuess = (
      payload: {
        country: CountryDto;
        success: boolean;
      } | null
    ) => {
      dispatch({ type: "SET_GUESS", payload });
    };
    const setScore = (payload: number) => {
      dispatch({ type: "SET_SCORE", payload });
    };
    const setProgress = (payload: GameProgress) => {
      dispatch({ type: "SET_PROGRESS", payload });
    };
    const removeItems = (payload: CountryDto) => {
      dispatch({ type: "REMOVE_ITEMS", payload });
    };

    return {
      resetGame,
      setData,
      setGuess,
      setScore,
      setProgress,
      removeItems,
    };
  }, [dispatch]);

  return {
    state,
    actions,
  };
};
