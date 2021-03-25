import { useReducer, useEffect } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state };
    case "SET_MESSAGE":
      return { ...state };
    case "RENDER_MESSAGE":
      return { ...state };
    case "SEND_MESSAGE":
      return { ...state };
    default:
      return { ...state };
    case "RECEIVE_MESSAGE":
      return { ...state };
    case "HEARTBEAT":
      return { ...state };
  }
}
const initialState = {
  message: {},
  messages: [],
};
const ChatContainer = () => {
  return <h1>ChatContainer</h1>;
};
export default ChatContainer;
