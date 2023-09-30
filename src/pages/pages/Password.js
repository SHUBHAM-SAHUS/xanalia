import React from 'react';
import { Link } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  ListGroup,
  ListGroupItem,

} from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl'

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import { useHistory } from "react-router-dom";



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
          <ListGroupItem onClick={() => history.push("/Settings")} action className="pointer">
            <FormattedMessage id="account" />
          </ListGroupItem>
          {/* <ListGroupItem onClick={() => history.push("/channel-information")} action className="pointer">
            <FormattedMessage id="Create Channel" />
          </ListGroupItem> */}
          <ListGroupItem onClick={() => history.push("/password")} action active className="pointer">
            <FormattedMessage id="password" />
          </ListGroupItem>

          <ListGroupItem onClick={() => history.push("/email-notification")} action className="pointer">
            <FormattedMessage id="emailNot" />
          </ListGroupItem>
          {/* <ListGroupItem onClick={() => history.push("/apply-token")} action className="pointer">
            <FormattedMessage id="Apply Token" />
          </ListGroupItem> */}
          <ListGroupItem onClick={() => history.push("/logout")} action className="pointer">
            <FormattedMessage id="Logout" />
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );

}

const PrivateInfo = () => {
  const intl = useIntl()
  return (
    <Card>
      <CardHeader>
        {/* <div className="card-actions float-right">
          <span className="cursor-pointer mr-1">
            <RefreshCw />
          </span>{' '}
          <UncontrolledDropdown className="d-inline-block">
            <DropdownToggle tag="a">
              <MoreVertical />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem>Something else here</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div> */}
        <CardTitle tag="h5" className="mb-0">
          Change Password
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="newPassword">New Password</Label>
                <Input type="text" name="text" id="newPassword" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="confirmPassword">Confirm Password</Label>
                <Input type="text" name="text" id="confirmPassword" />
              </FormGroup>
            </Col>
          </Row>
          <Button color="primary"><FormattedMessage id="changesSave" /></Button>
        </Form>
      </CardBody>
    </Card>
  )
};


const Password = () => {
  return (
    <Container fluid className="container-height">
      <Header>
        <HeaderTitle><FormattedMessage id="settings" /></HeaderTitle>

        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/dashboard"><FormattedMessage id="dashboard" /></Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/dashboard"><FormattedMessage id="pages" /></Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Password</BreadcrumbItem>
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


export default Password;