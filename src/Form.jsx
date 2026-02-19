import { useState } from "react";

export default function Form({ userInfo, setUserInfo, loggedIn, setLoggedIn }) {
  const [inputVal, setInputVal] = useState("");
  const [password, setPassword] = useState("");

  function handleButtonClick() {
    const state = {
      email: inputVal,
      password: password,
    };
    // const newState = { state };
    setUserInfo(state);
    if (inputVal !== "" && password !== "") {
      setLoggedIn(true);
    }
  }
  return (
    <div className="inputFunction">
      <div className="div1">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          className="inputEmail"
          required
        />
      </div>
      <div className="div2">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="inputPass"
          required
        />
      </div>
      <div className="div3">
        <button type="submit" onClick={handleButtonClick} className="button">
          Login
        </button>
      </div>
    </div>
  );
}
