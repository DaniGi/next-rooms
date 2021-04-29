import * as React from 'react';
import styles from './Sidebar.module.css';

interface Props {}

const rooms = [
  { name: 'Javascript' },
  { name: 'PHP' },
  { name: 'Typescript' },
  { name: 'WebSocket' },
];

const Rooms: React.FC<Props> = () => {
  return (
    <>
      {rooms.map((room) => (
        <div
          className={`d-flex flex-row align-items-center justify-content-between p-2 ${styles.sidebarListElement}`}
        >
          <div>{room.name}</div>
        </div>
      ))}
    </>
  );
};

export default Rooms;
