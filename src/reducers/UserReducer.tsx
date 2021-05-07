import { IUser } from 'src/contexts/UserContext';

interface IAction {
  type: 'set-user';
  payload?: any;
}

type TDispatchFunc = (state: IUser, payload?: any) => IUser;

const setUser: TDispatchFunc = (state, payload) => {
  return {
    ...state,
    ...payload,
  };
};

export function UserReducer(state: IUser, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case 'set-user':
      return setUser(state, payload);
    default:
      return state;
  }
}

export const initialState: IUser = {
  username: '',
  online: false,
  friends: [],
  rooms: [],
};
