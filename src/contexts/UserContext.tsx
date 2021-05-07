import * as React from 'react';
import { UserReducer, initialState } from '../reducers/UserReducer';

const { useContext, useReducer, createContext } = React;

export interface IUser {
  username: string;
  online: boolean;
  friends: string[];
  rooms: string[];
}

interface IUserContext {
  userState: IUser;
  userDispatch: React.Dispatch<any> | (() => {});
}

const UserContext = createContext<IUserContext>({
  userState: initialState,
  userDispatch: () => {},
});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider: React.FC = ({ children }) => {
  const [userState, userDispatch] = useReducer(UserReducer, initialState);

  // query to get user

  const value = {
    userState,
    userDispatch,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
