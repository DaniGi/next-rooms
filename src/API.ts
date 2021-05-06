const API_URL = 'http://localhost:3000';

type TLogUser = (username: string) => Promise<Response>;

export const logUser: TLogUser = (username) => {
  return fetch(`${API_URL}/auth/${username}`)
    .then((res) => res.json())
    .catch((err) => err);
};
