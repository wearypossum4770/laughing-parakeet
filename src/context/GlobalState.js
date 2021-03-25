function useGetPermissions() {
  const permissions = [
    "geolocation",
    "notifications",
    "push",
    "midi",
    "camera",
    "microphone",
    "speaker-selection",
    "device-info",
    "background-fetch",
    "background-sync",
    "bluetooth",
    "persistent-storage",
    "ambient-light-sensor",
    "accelerometer",
    "gyroscope",
    "magnetometer",
    "clipboard-read",
    "clipboard-write",
    "display-capture",
    "nfc",
  ];
  let capabilities = new Map();
  try {
    permissions.forEach((perm) =>
      navigator.permissions.query({ name: perm }).then((result) => {
        if (result.state == "granted") {
          capabilities.set(`has_${perm.replace("-", "_")}_permissions`, true);
        }
      })
    );
    return capabilities;
  } catch (error) {
    return error;
  }
}
export default function GlobalState() {
  let capabilities = new Map([
    ["hasGeolocation", "geolocation" in navigator],
    ["hasNotifications", "Notification" in window],
    ["hasClipboard", "clipboard" in navigator],
  ]);
  // showButtonToEnableLocalNews
  return capabilities;
}
const a = [
  "clear sky",
  "🌞", // 01d.png  01n.png,
  "few clouds",
  "⛅", // 02d.png  02n.png,
  "scattered clouds",
  "☁️   ☁️   ☁️", // 03d.png  03n.png,
  "broken clouds",
  "☁️☁️☁️", // 04d.png  04n.png,
  "shower rain", // 09d.png  09n.png,
  "rain", // 10d.png  10n.png,
  "thunderstorm", // 11d.png  11n.png,
  "snow", // 13d.png  13n.png,
  "mist ", // 50d.png  50n.png,
];
