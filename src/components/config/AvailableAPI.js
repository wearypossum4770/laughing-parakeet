import { ApiContext } from "./ApiContext";

export default function AvailableAPI({ children }) {
  const apiState = {
    hasWebsockets: "WebSocket" in window,
  };
  return <ApiContext.Provider value={apiState}>{children}</ApiContext.Provider>;
}
