import { createContext, useContext } from "react";
import { ReadonlyPropsWithChildren } from "src/utils/types";
import { useGameState } from "../hooks/useGameState";

export type GameState = ReturnType<typeof useGameState>;

const GameContext = createContext<GameState>(null!);

export const GameProvider = ({ children }: ReadonlyPropsWithChildren) => {
  const state = useGameState(); // empty by default,  fetched and set where needed

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }

  return context;
};
