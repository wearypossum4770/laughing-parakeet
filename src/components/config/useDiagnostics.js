import { useState } from "react";
let analytics = new Map();
const pwa = "chrome://flags/#mobile-pwa-install-use-bottom-sheet";
export default function useDiagnostics(data) {
  const {
    appCodeName,
    appName,
    appVersion,
    language,
    cookieEnabled,
    languages,
    platform,
    product,
    productSub,
    userAgent,
    vendor,
    connection: { downlink, downlinkMax, effectiveType, rtt, saveData, type },
  } = data;
  analytics.set("appCodeName", appCodeName);
  analytics.set("appName", appName);
  analytics.set("cookieEnabled", cookieEnabled);
  analytics.set("appVersion", appVersion);
  analytics.set("language", language);
  analytics.set("languages", languages);
  analytics.set("platform", platform);
  analytics.set("product", product);
  analytics.set("productSub", productSub);
  analytics.set("userAgent", userAgent);
  analytics.set("vendor", vendor);
  data.bluetooth
    .getAvailability()
    .then((available) => analytics.set("hasBluetooth", available));
  const [state, setState] = useState(analytics);
  console.log(state);
  return ["eh"];
}
