import { IUser } from './contexts/UserContext';

const API_URL = 'http://localhost:3000';

export const logUser = (username: string) => {
  return fetch(`${API_URL}/auth/${username}`)
    .then((res) => res.json() as Promise<IUser>)
    .catch((err) => err);
};

export const addFriend = (username: string) => {
  return fetch(`${API_URL}/friend/${username}`, {
    method: 'POST',
    headers: { 'Content-type': 'applicatio/json' },
    body: JSON.stringify({ username }),
  })
    .then((res) => res.json() as Promise<string>)
    .catch((err) => err);
};
