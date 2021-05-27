import React from "react";
import "App.css";

const Authorization = () => {
  return (
    <form className={"App-form"}>
      <input
        className={"App-input"}
        // type="email"
        type="text"
        name="email"
        placeholder="Email"
      ></input>

      <input
        className={"App-input"}
        //type="password"
        type="text"
        name="password"
        placeholder="Password"
      ></input>
      <button className={"form-submit"} type="submit">
        Sign in
      </button>
      <a href="/registration" className={"link-reg"}>
        new to S&D? create account
      </a>
    </form>
  );
};

export default Authorization;
