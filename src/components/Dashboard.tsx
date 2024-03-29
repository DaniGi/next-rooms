import * as React from 'react';
import { Col, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import OpenRoom from './OpenRoom';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <Row className="m-auto h-100">
      <Col sm={4} className="d-flex flex-column p-0 mh-100">
        <Sidebar />
      </Col>
      <Col sm={8} className="d-flex flex-column p-0 mh-100 d-flex flex-column">
        <OpenRoom />
      </Col>
    </Row>
  );
};

export default Dashboard;
