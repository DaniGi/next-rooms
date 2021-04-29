import * as React from 'react';
import { Tab, Nav, Button, Modal } from 'react-bootstrap';
import Rooms from './Rooms';
import Friends from './Friends';
import NewFriendModal from './NewFriendModal';
import NewRoomModal from './NewRoomModal';

const { useState } = React;

interface Props {}

type TabKeys = 'rooms' | 'friends';

const Sidebar: React.FC<Props> = () => {
  const [activeKey, setActiveKey] = useState<TabKeys>('rooms');
  const [showModal, SetShowModal] = useState(false);

  return (
    <>
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
        <Tab.Content className="flex-grow-1 overflow-auto">
          <Tab.Pane eventKey="rooms">
            <Rooms />
          </Tab.Pane>
          <Tab.Pane eventKey="friends">
            <Friends />
          </Tab.Pane>
        </Tab.Content>
        <Button onClick={() => SetShowModal(true)} className="w-100 rounded-0">
          New {activeKey === 'rooms' ? 'ROOM' : 'FRIEND'}
        </Button>
      </Tab.Container>

      <Modal show={showModal} onHide={() => SetShowModal(false)}>
        {activeKey === 'rooms' ? <NewRoomModal /> : <NewFriendModal />}
      </Modal>
    </>
  );
};

export default Sidebar;
