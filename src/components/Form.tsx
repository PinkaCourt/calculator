import React from "react";
import "./Form.css";

import { routes } from "App";

type Props = {
  autorization: boolean;
};

const regUrl = "/user/create";
const authUrl = "/user/login";

const Form: React.FC<Props> = (props) => {
  const { autorization } = props;

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const signature = autorization
    ? {
        button: "Sign in",
        span: "new to S&D? ",
        link: "create account",
        path: routes.signUp.path,
      }
    : {
        button: "Sign up",
        span: "have an S&D account? ",
        link: "log in",
        path: routes.auth.path,
      };

  const handleLoginChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setConfirmPassword(event.target.value);
  };

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    const url = autorization ? authUrl : regUrl;

    if (!autorization && password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    const formData = new FormData();
    formData.append("email", login);
    formData.append("password", password);

    const params: RequestInit = {
      method: "POST",
      headers: {
        ContentType: "application/json",
      },
      body: formData,
    };

    fetch(url, params)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("json", json);
      })
      .catch(console.log);
  };

  return (
    <form
      className={"form"}
      onSubmit={(event) => {
        event.preventDefault();
        handleClick(event);
      }}
    >
      <input
        className={"input"}
        type="email"
        name="email"
        placeholder="Email"
        autoComplete={"off"}
        required
        onChange={handleLoginChange}
      ></input>
      <input
        className={"input"}
        type="password"
        name="password"
        placeholder="Password"
        autoComplete={"off"}
        onChange={handlePasswordChange}
      ></input>
      {!autorization && (
        <input
          className={"input"}
          type="password"
          name="password"
          placeholder="Password"
          autoComplete={"off"}
          onChange={handleConfirmPasswordChange}
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
