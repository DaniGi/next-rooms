import * as React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

interface Props {}

const Login: React.FC<Props> = () => {
  return (
    <Row className="m-auto h-100 d-flex justify-content-center align-items-center">
      <Col sm={4} className="d-flex flex-column p-0 mh-100">
        <Form>
          <Form.Group controlId="username" className="pb-2">
            <Form.Label className="lh-1">username</Form.Label>
            <Form.Control type="username" />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
