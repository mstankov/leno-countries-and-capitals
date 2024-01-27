import { INITIAL_SCORE } from "src/api/constants";
import { Capital, Country, CountryDto } from "src/api/types";

export type GameProgress = "in-progress" | "done" | "not-started";
export type GameState = {
  score: number;
  data: CountryDto[];
  countries: Country[];
  capitals: Capital[];
  progress: GameProgress;
  guess: {
    country: CountryDto;
    success: boolean;
  } | null;
};

export type GameAction =
  | {
      type: "REMOVE_ITEMS";
      payload: CountryDto;
    }
  | {
      type: "RESET_GAME";
    }
  | {
      type: "SET_DATA";
      payload: {
        data: CountryDto[];
        countries: Country[];
        capitals: Capital[];
      };
    }
  | {
      type: "SET_GUESS";
      payload: {
        country: CountryDto;
        success: boolean;
      } | null;
    }
  | {
      type: "SET_SCORE";
      payload: number;
    }
  | {
      type: "SET_PROGRESS";
      payload: GameProgress;
    };

export const INITIAL_STATE: GameState = {
  score: INITIAL_SCORE,
  progress: "not-started", // can be used to perform redirection logic if user tries to access /game page without having a game in progress
  guess: null,
  data: [],
  countries: [],
  capitals: [],
};

export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
  switch (action.type) {
    case "REMOVE_ITEMS":
      return {
        ...state,
        countries: state.countries.filter((x) => x !== action.payload.name),
        capitals: state.capitals.filter((x) => x !== action.payload.capital),
      };
    case "SET_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "SET_GUESS":
      return {
        ...state,
        guess: action.payload,
      };
    case "SET_SCORE":
      return {
        ...state,
        score: action.payload,
      };
    case "RESET_GAME":
      return {
        ...INITIAL_STATE,
      };
    case "SET_PROGRESS":
      return {
        ...state,
        progress: action.payload,
      };
    default:
      return state;
  }
};
