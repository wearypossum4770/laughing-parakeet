import { useReducer } from "react";
import "./style_signup.css";
const Signup = () => {
  const initialState = {
    first_name: null,
    last_name: null,
    mname: null,
    mobile_number: null,
    password: null,
    username: null,
    showPassword: false,
  };
  function reducer(state, action) {
    switch (action.type) {
      default:
        return { ...state };
      case "CHANGE":
        let { name, value } = action.payload;
        return { ...state, [name]: value };
      case "TOGGLE_PASSWORD":
        return { ...state, showPassword: !state.showPassword };
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleSignup = (e) => console.log(e);
  const storeCredential = async (e, profile = {}) => {
    try {
      if (window.PasswordCredential) {
        let credential = await navigator.credentials.create({
          password: e.target,
        });
        return navigator.credential.store(credential);
      } else {
        return Promise.resolve(profile);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="first_name">
          <input
            onChange={({ target }) =>
              dispatch({ type: "CHANGE", payload: target })
            }
            name="first_name"
            autoComplete="given-name"
            placeholder="John"
            required
            autoFocus
          />
        </label>
      </div>
      <div>
        <label htmlFor="middle_name">
          <input
            onChange={({ target }) =>
              dispatch({ type: "CHANGE", payload: target })
            }
            name="middle_name"
            autoComplete="additional-name"
            placeholder="Daniel"
          />
        </label>
      </div>
      <div>
        <label htmlFor="last_name">
          <input
            onChange={({ target }) =>
              dispatch({ type: "CHANGE", payload: target })
            }
            name="last_name"
            autoComplete="family-name"
            required
            placeholder="Doe"
          />
        </label>
      </div>
      <div>
        <label htmlFor="frmEmailA">
          <input
            onChange={({ target }) =>
              dispatch({ type: "CHANGE", payload: target })
            }
            id="frmEmailA"
            type="email"
            name="email"
            autoComplete="email"
            required
            placeholder="john.d.doe@example.com"
          />
        </label>
      </div>
      <div>
        <label htmlFor="username">
          <input
            onChange={({ target }) =>
              dispatch({ type: "CHANGE", payload: target })
            }
            name="username"
            autoComplete="username"
            placeholder="john.d.doe"
          />
        </label>
      </div>
      <div>
        <label htmlFor="show-password">
          <input
            id="show-password"
            type="checkbox"
            onClick={({ target }) =>
              dispatch({ type: "TOGGLE_PASSWORD", payload: target })
            }
          />
          <small>Show Password?</small>
        </label>
      </div>
      <div>
        <label htmlFor="frmPasswordA">
          <input
            onChange={({ target }) =>
              dispatch({ type: "CHANGE", payload: target })
            }
            name="frmPasswordA"
            type={state.showPassword ? "text" : "password"}
            autoComplete="new-password"
            minLength="8"
            id="frmPasswordA"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            placeholder="chocolate bars 123"
          />
        </label>
      </div>
      <div>
        <label htmlFor="frmPasswordC">
          <input
            onChange={({ target }) =>
              dispatch({ type: "CHANGE", payload: target })
            }
            name="frmPasswordC"
            type={state.showPassword ? "text" : "password"}
            autoComplete="new-password"
            minLength="8"
            id="frmPasswordC"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            placeholder="chocolate bars 123"
          />
        </label>
      </div>
      <div>
        <label htmlFor="frmPhoneNumA">
          <input
            onChange={({ target }) =>
              dispatch({ type: "CHANGE", payload: target })
            }
            name="mobile"
            type="tel"
            id="frmPhoneNumA"
            autoComplete="tel"
            required
            placeholder="(123) 456-7890"
          />
        </label>
      </div>
      <div>
        <input type="submit" onClick={handleSignup} value="Sign Up1" />
      </div>
    </form>
  );
};

export default Signup;
