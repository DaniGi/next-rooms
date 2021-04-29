import * as React from 'react';
import { Tab, Nav } from 'react-bootstrap';
import Rooms from './Rooms';
import Friends from './Friends';

const { useState } = React;

interface Props {}

type TabKeys = 'rooms' | 'friends';

const Sidebar: React.FC<Props> = () => {
  const [activeKey, setActiveKey] = useState<TabKeys>('rooms');

  return (
    <Tab.Container activeKey={activeKey} onSelect={(eventKey: TabKeys) => setActiveKey(eventKey)}>
      <Nav variant="pills">
        <Nav.Item className="flex-grow-1">
          <Nav.Link className="text-center text-uppercase" eventKey="rooms">
            rooms
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="flex-grow-1">
          <Nav.Link className="text-center text-uppercase" eventKey="friends">
            friends
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab.Content>
        <Tab.Pane eventKey="rooms">
          <Rooms />
        </Tab.Pane>
        <Tab.Pane eventKey="friends">
          <Friends />
        </Tab.Pane>
      </Tab.Content>
    </Tab.Container>
  );
};

export default Sidebar;
