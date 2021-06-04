export type UserAuth = {
  accessToken: string;
  auth: boolean;
  avatar: null;
  email: string;
  name: null;
};

export type Data = {
  id: number;
  ds: string;
  ans: string;
  wtl: string;
  userId: string;
  date: number;
};

export type serverDataUser = {
  items: Data[];
  message: string;
};

export type User = {
  avatar: null;
  email: string;
  name: null;
};
