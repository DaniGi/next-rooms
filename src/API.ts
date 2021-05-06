import { User } from './pages';

const API_URL = 'http://localhost:3000';

export const logUser = (username: string) => {
  return fetch(`${API_URL}/auth/${username}`)
    .then((res) => res.json() as Promise<User>)
    .catch((err) => err);
};
