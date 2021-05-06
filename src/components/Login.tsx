import * as React from 'react';
import { useRouter } from 'next/router';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { User } from 'src/pages';
import { logUser } from '../API';

const { useRef } = React;

interface Props {
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const Login: React.FC<Props> = ({ setUser }) => {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const userMutation = useMutation(logUser, {
    onSuccess: (data: User) => {
      setUser(data);
      router.push('/');
    },
  });

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (inputRef.current) {
      userMutation.mutate(inputRef.current.value);
    }
  };

  return (
    <Row className="m-auto h-100 d-flex justify-content-center align-items-center">
      <Col sm={4} className="d-flex flex-column p-0 mh-100">
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="username" className="pb-2">
            <Form.Label className="lh-1">username</Form.Label>
            <Form.Control required type="username" ref={inputRef} />
          </Form.Group>
          {userMutation.isError ? (
            <Form.Group className="pb-2">
              <Form.Text className="text-danger">An error occurred</Form.Text>
            </Form.Group>
          ) : null}
          <Button disabled={userMutation.isLoading} variant="primary" type="submit">
            Log In
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
