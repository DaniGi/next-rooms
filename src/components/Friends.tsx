import * as React from 'react';
import styles from './Sidebar.module.css';

import { useUser } from '../contexts/UserContext';

interface Props {}

const Friends: React.FC<Props> = () => {
  const { userState } = useUser();
  return (
    <>
      {userState.friends.map((username) => (
        <div
          className={`d-flex flex-row align-items-center justify-content-between p-2 ${styles.sidebarListElement}`}
        >
          <div>{username}</div>
        </div>
      ))}
    </>
  );
};

export default Friends;
