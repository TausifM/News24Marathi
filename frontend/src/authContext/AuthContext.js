import AuthReducer from "./AuthReducer";
import { createContext, useReducer, useEffect } from "react";
const INITAIl_STATE = {
  user: JSON.parse(localStorage.getItem("user")),
  isFetching: false,
  error: false,
};
export const AuthContext = createContext(INITAIl_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITAIl_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        dispatch,
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
