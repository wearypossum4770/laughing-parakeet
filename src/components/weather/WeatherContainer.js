import { useState, useEffect, useReducer } from "react";
import TripleToggle from "./TripleToggle";
const initialState = {
  weather: {},
  errors: [],
  weatherObtained: false,
};
function reducer(state, action) {
  switch (action.type) {
    default:
      return { ...state };
    case "USE_CELSIUS":
      return { ...state };
    // case "USE_"
    case "GET_WEATHER":
      return { ...state };
    case "SET_WEATHER":
      return { ...state, weather: action.payload, weatherObtained: true };
    case "SET_ERRORS":
      return { ...state, errors: [...state.errors, [action.errors]] };
  }
}
const WeatherContainer = ({ props: { latitude, longitude } }) => {
  const weatherDictionary = new Map([
    ["01d", "🌞"],
    ["02d", "⛅"],
    ["03d", "☀️ ☁️ ☁️"],
    ["04d", "☁️☀️☁️"],
    ["01n", "🌑🌃"],
    ["02n", "⛅"],
    ["03n", "🌑 ☁️ ☁️"],
    ["04n", "☁️🌑☁️"],
    // ['901', '☄️'], comet / meteor
    ["900", "🌊"], // water wave
    ["802", "🌀"], // hurricane
    ["801", "☁️☀️☁️"],
    ["802", "☁️🌤️☁️"],
    ["803", "☁️⛅☁️"],
    ["804", "☁️🌥️☁️"],
    ["800", "🌞"],
    ["701", ""],
    ["711", ""],
    ["721", ""],
    ["731", ""],
    ["741", "🌫️"],
    ["751", ""],
    ["761", ""],
    ["762", "🌋"],
    ["771", "🌬️"],
    ["781", "🌪️"],
    ["600", "🌨️"],
    ["601", "🌨️🌨️"],
    ["602", "🌨️🌨️🌨️"],
    ["611", "🌨️🌧️"],
    ["612", "🌨️🌧️🌨️"],
    ["613", "🌨️🌨️🌧️🌨️🌨️"],
    ["615", "🌨️🌨️🌨️🌧️🌨️🌨️🌨️"],
    ["616", "🌨️🌧️"],
    ["620", "🌨️🌨️"],
    ["621", "🌨️🌨️🌨️"],
    ["622", "🌨️🌨️🌨️🌨️"],
    ["500", "🌦️"],
    ["501", "☔🌧️🌦️🌧️"],
    ["502", "☔🌧️🌧️🌦️🌧️🌧️"],
    ["503", "☔🌧️🌧️🌧️🌦️🌧️🌧️🌧️"],
    ["504", "☔🌧️🌧️🌧️🌧️🌧️🌧️"],
    ["511", "🌦️🌧️🌨️"],
    ["520", "🌦️"],
    ["521", "🌧️🌦️🌧️"],
    ["522", "🌧️🌧️🌦️🌧️🌧️"],
    ["531", "🌧️🌧️🌧️🌦️🌧️🌧️🌧️"],
    ["300", "☔🌧️"],
    ["301", "☔🌧️🌧️"],
    ["302", "☔🌧️🌧️🌧️"],
    ["310", "☔🌧️"],
    ["311", "☔🌧️🌧️"],
    ["312", "☔🌧️🌧️🌧️"],
    ["313", "☔🌧️"],
    ["314", "☔🌧️🌧️"],
    ["321", "☔🌧️🌧️🌧️"],
    ["200", "⛈🌩️🌩️🌧️"],
    ["201", "⛈🌩️🌩️🌧️🌧️"],
    ["202", "🌩️🌩️🌧️🌧️🌧️"],
    ["210", "🌩️"],
    ["211", "🌩️🌩️"],
    ["212", "🌩️🌩️🌩️"],
    ["221", "🌩️🌩️🌩️🌩️"],
    ["230", "⛈⛈⛈🌩️🌩️🌧️"],
    ["231", "🌩️🌩️🌧️🌧️"],
    ["232", "🌩️🌩️🌧️🌧️🌧️"],
  ]);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { weatherObtained } = state;
  console.log(state);
  useEffect(() => {
    async function getWeather() {
      let WEATHER_API_KEY = "0d379932ab8f74b262973b9886276755";
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;
      try {
        const {
          main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
          sys: { sunrise, sunset },
          timezone,
          visibility,
          weather: [{ description, icon, id }],
          wind: { deg, speed },
          clouds: { all: cloudinessPercentage },
        } = await (await fetch(url)).json();
        return dispatch({
          type: "SET_WEATHER",
          payload: {
            temp: temp,
            visibility: visibility,
            feels_like: feels_like,
            temp_min: temp_min,
            temp_max: temp_max,
            pressure: pressure,
            humidity: humidity,
            sunrise: sunrise,
            sunset: sunset,
            timezone: timezone,
            description: description,
            icon: icon,
            deg: deg,
            id: id,
            speed: speed,
            cloudinessPercentage: cloudinessPercentage,
          },
        });
      } catch (error) {
        // "Unable to retrieve your location"
        // "Geolocation is not supported by your browser"
        dispatch({ type: "SET_ERRORS", errors: { ...error } });
      }
    }
    getWeather();
  }, []);
  let accesibleDictionary = new Map();
  console.log("🍺 🛋️");
  let { temp, feels_like, temp_min, temp_max, id } = state.weather;
  console.log(id);
  function convertTemperature() {}
  return !weatherObtained ? (
    <div>obtaining location....</div>
  ) : (
    <div>
      <h1>Weather Widget</h1>
      <TripleToggle
        props={{
          temp: temp,
          feels_like: feels_like,
          temp_min: temp_min,
          temp_max: temp_max,
        }}
      />
      <p alt="night time scattered clouds " style={{ fontSize: "100px" }}>
        {weatherDictionary.get(state.weather.id)}
        <i className="fas fa-cloud-moon"></i>
      </p>
      <p alt="night time scattered clouds " style={{ fontSize: "100px" }}>
        {weatherDictionary.get("803")}
        <i className="fas fa-cloud-moon"></i>
      </p>
    </div>
  );
};
export default WeatherContainer;
