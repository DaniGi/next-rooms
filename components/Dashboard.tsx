import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import OpenRoom from './OpenRoom';

interface Props {}

const Dashboard: React.FC<Props> = () => {
  return (
    <Row>
      <Col sm={3}>
        <Sidebar />
      </Col>
      <Col sm={9}>
        <OpenRoom />
      </Col>
    </Row>
  );
};

export default Dashboard;
