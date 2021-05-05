import * as React from 'react';
import { Container } from 'react-bootstrap';

const Layout: React.FC = ({ children }) => {
  return (
    <Container fluid className="p-0 vh-100">
      {children}
    </Container>
  );
};

export default Layout;
