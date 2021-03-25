import { useReducer } from "react/cjs/react.production.min";
const initialState = { showAddChatPopup: false, messages: [], chats: [] };
function reducer(state, action) {
  switch (action.type) {
    case "ADD_MESSAGE":
      return { ...state, messages: [...state.messages, action.message] };
    case "GET_CHATS_SUCCESS":
      return { ...state, chats: action.chats };
    case "CHAT_POPUP":
      return { ...state, showAddChatPopup: !state.showAddChatPopup };
    case "SET_MESSAGES":
      return { ...state, messages: action.messages.reverse() };
  }
}
export default function ChatContext() {
  const [chat, setChat] = useReducer(reducer, initialState);
}
