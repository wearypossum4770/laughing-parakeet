import { useEffect, useReducer } from "react";
const initialState = {
  errors: [],
  postSuccessful: false,
  data: {},
};
export default function usePostFetch({ options }) {
  const [fetchState, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case "SUCCESS":
        return { ...state, postSuccessful: true, data: { ...action.payload } };
      default:
        return { ...state };
      case "FAILURE":
        return { ...state, errors: [...fetchState, action.payload] };
    }
  }
  useEffect(() => {
    let url = "http://localhost:8000/";
    async function postData() {
      try {
        options["method"] = "POST";
        let response = await (await fetch(url, options)).json();
        dispatch({ type: "SUCCESS", payload: response });
      } catch (error) {
        console.log(error);
        dispatch({ type: "FAILURE", payload: error });
      }
    }
    postData();
  }, []);
  return [fetchState];
}
