import React from "react";
import "./Form.css";

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
        path: "/signUp",
      }
    : {
        button: "Sign up",
        span: "have an S&D account? ",
        link: "log in",
        path: "/",
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
