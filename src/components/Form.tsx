import React from "react";
import "./Form.css";

import { routes } from "App";

type Props = {
  autorization: boolean;
};

const Form: React.FC<Props> = (props) => {
  const { autorization } = props;

  const signature = autorization
    ? {
        button: "Sign in",
        span: "new to S&D? ",
        link: "create account",
        path: routes[1].path,
      }
    : {
        button: "Sign up",
        span: "have an S&D account? ",
        link: "log in",
        path: routes[0].path,
      };

  return (
    <form className={"form"}>
      <input
        className={"input"}
        type="email"
        name="email"
        placeholder="Email"
        autoComplete={"off"}
        required
      ></input>
      <input
        className={"input"}
        type="password"
        name="password"
        placeholder="Password"
        autoComplete={"off"}
      ></input>
      {!autorization && (
        <input
          className={"input"}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete={"off"}
        ></input>
      )}
      <button className={"submit"} type="submit">
        {signature.button}
      </button>
      <span className="link">
        {signature.span}
        <a href={signature.path} className={"link-reg"}>
          {signature.link}
        </a>
      </span>
    </form>
  );
};

export default Form;
