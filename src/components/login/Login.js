import { useState } from "react";
const handleLogin = (e) => {
  e.preventDefault();
  console.log(e.target.name);
};

const Login = () => {
  const [state, setState] = useState({ username: null, password: null });
  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="username">
        <input
          onChange={handleChange}
          autoComplete="username"
          id="username"
          name="username"
          placeholder="username"
        />
      </label>
      <label htmlFor="password">
        <input
          onChange={handleChange}
          id="password"
          name="password"
          autoComplete="current-password"
          placeholder="password"
        />
      </label>
      <input type="submit" onClick={handleLogin} value="Sign In!" />
    </form>
  );
};
export default Login;
