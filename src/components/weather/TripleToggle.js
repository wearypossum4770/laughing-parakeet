import "./style_triple_toggle.css";
import { useReducer } from "react";
export default function TripleToggle({
  props: { feels_like, temp_min, temp_max, temp },
}) {
  const initialState = {
    isShown: false,
    temperatureDisplay: [],
    inCelsius: false,
    inKelvin: true,
    inFahrenheit: false,
    raw_temperatures: [temp, feels_like, temp_min, temp_max],
  };
  function reducer(state, action) {
    switch (action.type) {
      case "kelvin":
        return {
          ...state,
          temperatureDisplay: state.raw_temperatures.map((processed, index) => (
            <h1 key={index}>{`${processed.toFixed(2)} K`}</h1>
          )),
        };
      default:
        return {
          ...state,
          temperatureDisplay: state.raw_temperatures.map((processed, index) => (
            <h1 key={index}>{`${processed.toFixed(2)} K`}</h1>
          )),
        };
      case "fahrenheit":
        return {
          ...state,
          temperatureDisplay: state.raw_temperatures.map((processed, index) => (
            <h1 key={index}>{`${((processed - 273.15) * 1.8 + 32).toFixed(
              2
            )} °F`}</h1>
          )),
        };
      case "celsius":
        return {
          ...state,
          temperatureDisplay: state.raw_temperatures.map((processed, index) => (
            <h1 key={index}>{`${(processed - 273.15).toFixed(2)} °C`}</h1>
          )),
        };
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  let { inCelsius, inKelvin, inFahrenheit } = state;
  return (
    <div>
      <div className="switch-toggle switch-3 switch-candy">
        <input id="celsius" name="state-d" type="radio" />
        <label htmlFor="celsius" onClick={() => dispatch({ type: "celsius" })}>
          Celsius
        </label>
        <input
          id="Kelvin"
          name="state-d"
          type="radio"
          // disabled
          onClick={() => dispatch({ type: "kelvin" })}
          defaultChecked
        />
        <label htmlFor="Kelvin" className="disabled">
          Kelvin
        </label>
        <input id="fahrenheit" name="state-d" type="radio" />
        <label
          htmlFor="fahrenheit"
          onClick={() => dispatch({ type: "fahrenheit" })}
        >
          Fahrenheit
        </label>
      </div>
      {!state.isShown ? state.temperatureDisplay : <div></div>}
    </div>
  );
}
