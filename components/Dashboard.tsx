import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import OpenRoom from './OpenRoom';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <Container fluid className="p-1 vh-100">
      <Row className="m-auto h-100">
        <Col sm={4} className="d-flex flex-column p-0 mh-100">
          <Sidebar />
        </Col>
        <Col sm={8} className="p-0 mh-100">
          <OpenRoom />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
