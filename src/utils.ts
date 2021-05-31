const regUrl = "/user/create";
const authUrl = "/user/login";
const dataUrl = "/user/data";

const getFormData = (email: string, password: string) => {
  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  return formData;
};

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
      ContentType: "application/json",
    },
    body: getFormData(email, password),
  };

  return fetch(authUrl, params)
    .then((response) => response.json())
    .catch((error) => error);
};

export const signUp = (email: string, password: string) => {
  const params: RequestInit = {
    method: "POST",
    headers: {
      ContentType: "application/json",
    },
    body: getFormData(email, password),
  };

  return fetch(regUrl, params)
    .then((response) => response.json())
    .catch((error) => error);
};
