import { IUser } from 'src/contexts/UserContext';

interface IAction {
  type: 'set-user' | 'add-friend';
  payload?: any;
}

type TDispatchFunc = (state: IUser, payload?: any) => IUser;

const setUser: TDispatchFunc = (state, payload) => {
  return {
    ...state,
    ...payload,
  };
};

const addFriend: TDispatchFunc = (state, payload) => {
  const { friends } = state;
  return {
    ...state,
    friends: [payload, ...friends],
  };
};

export function UserReducer(state: IUser, action: IAction) {
  const { type, payload } = action;
  switch (type) {
    case 'set-user':
      return setUser(state, payload);
    case 'add-friend':
      return addFriend(state, payload);
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
