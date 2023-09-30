import React, { Fragment } from 'react';
import ChatList from '../../components/ChatList';
import NewConversation from '../../components/NewConversation';
import chatstyle from './chat-style.css';
import {
  Card,
  Col,
  Container,
  Row,
} from 'reactstrap';

function Chat(props) {
  return (
    <Fragment>
      <Container fluid className="chat-container">
        <Card style={{height: '100vh'}}>
          <Row noGutters>
            <ChatList />
            <NewConversation />
          </Row>
        </Card>
      </Container>
    </Fragment>
  )
}
export default Chat;
