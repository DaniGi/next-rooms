import * as React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { useRef } from 'react';
import { useUser } from '../contexts/UserContext';
import { addFriend } from '../API';

interface Props {
  SetShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewFriendModal: React.FC<Props> = ({ SetShowModal }) => {
  const { userDispatch } = useUser();
  const inputRef = useRef<HTMLInputElement>(null);

  const userMutation = useMutation(addFriend, {
    onSuccess: (data: string) => {
      userDispatch({ type: 'add-friend', payload: data });
      SetShowModal(false);
    },
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (inputRef.current) {
      userMutation.mutate(inputRef.current.value);
    }
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>New FRIEND</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="username" className="pb-2">
            <Form.Label className="lh-1">Friend username</Form.Label>
            <Form.Control required type="username" ref={inputRef} />
          </Form.Group>
          {userMutation.isError ? (
            <Form.Group className="pb-2">
              <Form.Text className="text-danger">An error occurred</Form.Text>
            </Form.Group>
          ) : null}
          <Button disabled={userMutation.isLoading} variant="primary" type="submit">
            Add FRIEND
          </Button>
        </Form>
      </Modal.Body>
    </>
  );
};

export default NewFriendModal;
