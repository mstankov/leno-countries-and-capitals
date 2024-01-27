import { useMemo, useReducer } from "react";
import { GameProgress, INITIAL_STATE, gameReducer } from "../gameReducer";
import { CountryDto } from "src/api/types";

export const useGameReducer = () => {
  const [state, dispatch] = useReducer(gameReducer, INITIAL_STATE);

  const actions = useMemo(() => {
    const removeItem = (payload: CountryDto) => {
      dispatch({ type: "REMOVE_ITEM", payload });
    };
    const resetGame = () => {
      dispatch({ type: "RESET_GAME" });
    };
    const setCountries = (payload: CountryDto[]) => {
      dispatch({ type: "SET_COUNTRIES", payload });
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

    return {
      removeItem,
      resetGame,
      setCountries,
      setGuess,
      setScore,
      setProgress,
    };
  }, [dispatch]);

  return {
    state,
    actions,
  };
};
