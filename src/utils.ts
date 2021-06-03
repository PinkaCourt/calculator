const regUrl = "/user/create";
const authUrl = "/user/login";
const dataUrl = "/user/data";
const mockUrl = "/user/data/mock";

export const getData = (userId: string, token: string) => {
  const url = dataUrl + `?userId=${userId}`;

  const params: RequestInit = {
    method: "GET",
    headers: {
      "x-access-token": token,
    },
  };

  return fetch(url, params)
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
