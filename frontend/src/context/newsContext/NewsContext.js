import NewsReducer from "./NewsReducer";
import { createContext, useReducer } from "react";
const INITIAL_STATE = {
  movies: [],
  isFetching: false,
  error: false,
};
export const MovieContext = createContext(INITIAL_STATE);
export const MovieContextReducer = ({ children }) => {
  const [state, dispatch] = useReducer(NewsReducer, INITIAL_STATE);
  return (
    <MovieContext.Provider
      value={{
        movies: state.movies,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
