import * as React from 'react';
import { Modal } from 'react-bootstrap';

interface Props {}

const NewRoomModal: React.FC<Props> = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>New ROOM</Modal.Title>
      </Modal.Header>
    </>
  );
};

export default NewRoomModal;
