import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as A from "store/actions";
import * as S from "store/selectors";
import { routes } from "App";
import "./Form.css";
/*
function validation(login) {
  if (/^[a-zA-Z1-9]+$/.test(login) === false) {
    alert("В логине должны быть только латинские буквы");
    return false;
  }
  if (login.length < 4 || login.length > 20) {
    alert("В логине должен быть от 4 до 20 символов");
    return false;
  }
  if (parseInt(login.substr(0, 1))) {
    alert("Логине должен начинаться с буквы");
    return false;
  }

  return true;
}
*/
type Props = {
  autorization: boolean;
};

const Form: React.FC<Props> = (props) => {
  const { autorization } = props;

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [formValid, setFormValid] = React.useState(false);
  const [error, setError] = React.useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(S.selectAuth);
  const token = useSelector(S.selectToken);

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

  const handleLoginChange = (event: { target: { value: string } }) => {
    setLogin(event.target.value);
  };

  const handlePasswordChange = (event: { target: { value: string } }) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event: {
    target: { value: string };
  }) => {
    setConfirmPassword(event.target.value);
  };

  const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (autorization) {
      dispatch(A.authorizationUser({ login, password }));
    } else {
      dispatch(A.registerUser({ login, password }));
    }
  };

  React.useEffect(() => {
    const pwdMatch = confirmPassword === password;
    const fieldsFilled = Boolean(login.length && password.length);

    const isValid =
      (autorization && fieldsFilled) ||
      (!autorization && fieldsFilled && pwdMatch);

    if (!isValid && !fieldsFilled) {
      setError("Fill in all the fields");
    }

    if (!autorization && !isValid && !pwdMatch) {
      setError("Passwords do not match");
    }

    setFormValid(isValid);

    if (formValid) {
      setError("");
    }
  }, [autorization, login, password, confirmPassword, formValid]);

  React.useEffect(() => {
    if (auth) {
      document.cookie = `accessToken=${token};max-age=864e2`;
      history.push("/dashboard");
    }
  }, [auth, history, token]);

  return (
    <form className="form" onSubmit={handleClick}>
      <input
        className="input"
        type="email"
        name="email"
        placeholder="Email"
        required
        onChange={handleLoginChange}
        pattern="[A-Za-z]\w+@+\w+\.+\w*"
      />
      <input
        className="input"
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={handlePasswordChange}
      />
      {!autorization && (
        <input
          className="input"
          type="password"
          name="password"
          placeholder="Password"
          required
          onChange={handleConfirmPasswordChange}
        />
      )}
      <button
        className={formValid ? "submit" : "disable_button"}
        type="submit"
        disabled={!formValid}
      >
        {signature.button}
      </button>
      <span className="link">
        {signature.span}
        <a href={signature.path} className="link-reg">
          {signature.link}
        </a>
      </span>
      {error.length > 0 && <span className="error">{error}</span>}
    </form>
  );
};

export default Form;
