const regUrl = "/user/create";
const authUrl = "/user/login";
const dataUrl = "/user/data";

export const getData = (userId: string) => {
  const url = dataUrl + `?query=${userId}`;

  return fetch(url)
    .then((response) => response.json())
    .catch((error) => error);
};

export const signIn = (email: string, password: string) => {
  const params: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  return fetch(authUrl, params)
    .then((response) => response.json())
    .catch((error) => error);
};

export const signUp = (email: string, password: string) => {
  const params: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  };

  return fetch(regUrl, params)
    .then((response) => response.json())
    .catch((error) => error);
};
