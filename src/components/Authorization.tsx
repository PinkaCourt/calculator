import React from "react";
import "App.css";

const Authorization = () => {
  return (
    <form className={"App-form"}>
      <input
        className={"App-input"}
        type="email"
        name="email"
        placeholder="Email"
        autoComplete={"off"}
        required
      ></input>

      <input
        className={"App-input"}
        type="password"
        name="password"
        placeholder="Password"
        autoComplete={"off"}
      ></input>
      <button className={"form-submit"} type="submit">
        Sign in
      </button>
      <span className="link">
        new to S&D?
        <a href="/registration" className={"link-reg"}>
          create account
        </a>
      </span>
    </form>
  );
};

export default Authorization;
