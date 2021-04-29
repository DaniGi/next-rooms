import * as React from 'react';
import { Modal } from 'react-bootstrap';

interface Props {}

const NewFriendModal: React.FC<Props> = () => {
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>New FRIEND</Modal.Title>
      </Modal.Header>
    </>
  );
};

export default NewFriendModal;
