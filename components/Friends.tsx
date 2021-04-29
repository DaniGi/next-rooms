import * as React from 'react';
import styles from './Sidebar.module.css';

interface Props {}

const friends = [
  { name: 'Jo', isConnected: false },
  { name: 'Edd', isConnected: true },
  { name: 'Anna', isConnected: true },
  { name: 'Olga', isConnected: false },
  { name: 'Jo', isConnected: false },
  { name: 'Edd', isConnected: true },
  { name: 'Anna', isConnected: true },
  { name: 'Olga', isConnected: false },
  { name: 'Jo', isConnected: false },
  { name: 'Edd', isConnected: true },
  { name: 'Anna', isConnected: true },
  { name: 'Olga', isConnected: false },
  { name: 'Jo', isConnected: false },
  { name: 'Edd', isConnected: true },
  { name: 'Anna', isConnected: true },
  { name: 'Olga', isConnected: false },
  { name: 'Jo', isConnected: false },
  { name: 'Edd', isConnected: true },
  { name: 'Anna', isConnected: true },
  { name: 'Olga', isConnected: false },
  { name: 'Jo', isConnected: false },
  { name: 'Edd', isConnected: true },
  { name: 'Anna', isConnected: true },
  { name: 'Olga', isConnected: false },
];

const Friends: React.FC<Props> = () => {
  return (
    <>
      {friends.map((friend) => (
        <div
          className={`d-flex flex-row align-items-center justify-content-between p-2 ${styles.sidebarListElement}`}
        >
          <div>{friend.name}</div>
          <div>{friend.isConnected && 'Connected'}</div>
        </div>
      ))}
    </>
  );
};

export default Friends;
