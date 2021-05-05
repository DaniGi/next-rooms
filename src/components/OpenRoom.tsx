import * as React from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

const { useState } = React;

interface Message {
  content: string;
  sentBy: string;
}

interface Props {}

const messages: Message[] = [
  {
    content: 'ciao',
    sentBy: 'Jo',
  },
  {
    content: 'ciao',
    sentBy: 'Jo',
  },
  {
    content: 'ciao',
    sentBy: 'Jo',
  },
  {
    content: 'ciao',
    sentBy: 'Jo',
  },
  {
    content: 'ciao',
    sentBy: 'Jo',
  },
  {
    content: 'ciao',
    sentBy: 'Jo',
  },
];

const OpenRoom: React.FC<Props> = () => {
  const [text, setText] = useState('');

  return (
    <>
      <div className="flex-grow-1 p-3 d-inline-flex flex-column">
        {messages.map((message, index) => (
          <div
            className={`p-2 mb-2 bg-primary rounded align-self-${
              index % 2 === 0 ? 'end' : 'start'
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <Form className="p-2 bg-secondary">
        <Form.Group className="m-0">
          <InputGroup>
            <Form.Control
              as="textarea"
              required
              value={text}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
            />
            <InputGroup.Append>
              <Button type="submit">Send</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </>
  );
};

export default OpenRoom;
