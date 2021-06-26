import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import * as A from "store/actions";
import * as S from "store/selectors";
import { routes } from "App";
import "./Form.css";

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
  const userId = useSelector(S.selectLogin);

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
  // валидация
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

  // проверяем кукис
  React.useEffect(() => {
    const allCookies = document.cookie;

    if (allCookies === "") {
      return;
    }

    let cookies = new Map();

    document.cookie.split("; ").forEach((e) => {
      const pair = e.split("=");
      const name = pair[0];
      const value = pair[1];
      cookies.set(name, value);
    });

    if (cookies.get("accessToken") !== "") {
      dispatch(A.setLogin(cookies.get("login")));
      dispatch(A.setToken(cookies.get("accessToken")));
      dispatch(A.getUserProfile());
      dispatch(A.getUserData());
    }
  }, [auth, dispatch, history, login, token]);

  // установка кукис
  React.useEffect(() => {
    if (auth) {
      document.cookie = `accessToken=${token}; max-age=864e2`;
      document.cookie = `login=${userId}`;

      history.push("/dashboard");
    }
  }, [auth, history, login, token, userId]);

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
