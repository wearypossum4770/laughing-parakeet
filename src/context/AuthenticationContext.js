import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "AUTH_START":
      return { ...state, loading: true };
    case "AUTH_SUCCESS":
      return { ...state, ...action.payload, loading: false };
    case "AUTH_FAIL":
      return {
        ...state,
        loading: false,
        error: [...state.error, action.error],
      };
    case "AUTH_LOGOUT":
      return { ...state, username: null, token: null };
  }
}
const initialState = {
  token: null,
  username: null,
  error: null,
  loading: false,
};
export default function AuthenticationContext() {
  const [authState, dispatch] = useReducer(reducer, initialState);
}
