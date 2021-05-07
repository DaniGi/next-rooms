import { IUser } from './contexts/UserContext';

const API_URL = 'http://localhost:3000';

export const logUser = (username: string) => {
  return fetch(`${API_URL}/user/${username}`)
    .then((res) => res.json() as Promise<IUser>)
    .catch((err) => err);
};

export const addFriend = ({ username, friend }: { username: string; friend: string }) => {
  return fetch(`${API_URL}/user/friend`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ friend, username }),
  })
    .then((res) => res.json() as Promise<string>)
    .catch((err) => err);
};
