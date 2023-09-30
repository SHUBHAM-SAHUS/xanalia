import React from 'react';
import { Link } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  Button,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Row,
  ListGroupItem,
  ListGroup
} from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from '../../redux/actions/authAction.js'

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';



const Navigation = () => {
  const history = useHistory();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h5" className="mb-0">
            <FormattedMessage id="profileSet" />
          </CardTitle>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem onClick={() => history.push("/Settings")} action >
            <FormattedMessage id="account" />
          </ListGroupItem>
          {/* <ListGroupItem onClick={() => history.push("/channel-information")} action >
            <FormattedMessage id="Channel information" />
          </ListGroupItem> */}
          <ListGroupItem onClick={() => history.push("/password")} action >
            <FormattedMessage id="password" />
          </ListGroupItem>

          <ListGroupItem onClick={() => history.push("/email-notification")} action >
            <FormattedMessage id="emailNot" />
          </ListGroupItem>
          <ListGroupItem onClick={() => history.push("/logout")} active>
            <FormattedMessage id="Logout" />
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
}

const PrivateInfo = () => {
  const intl = useIntl()
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = () => {
    dispatch(logoutAction())
    history.push("/")
  }
  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h5" className="mb-0">
          Logout
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Button onClick={handleLogout}>Logout</Button>
      </CardBody>
    </Card>
  )
};

const Logout = () => {
  return (
    <Container fluid>
      <Header>
        <HeaderTitle><FormattedMessage id="settings" /></HeaderTitle>

        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/dashboard"><FormattedMessage id="dashboard" /></Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/dashboard"><FormattedMessage id="pages" /></Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Logout</BreadcrumbItem>
        </Breadcrumb>
      </Header>

      <Row>
        <Col md="3" xl="3">
          <Navigation />
        </Col>
        <Col md="9" xl="9">
          <PrivateInfo />
        </Col>
      </Row>
    </Container>
  )
};

export default Logout;
