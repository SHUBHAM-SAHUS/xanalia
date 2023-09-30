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
          <ListGroupItem onClick={() => history.push("/Settings")} action className="pointer" >
            <FormattedMessage id="account" />
          </ListGroupItem>
          <ListGroupItem onClick={() => history.push("/channel-information")} action className="pointer" >
            <FormattedMessage id="Create Channel" />
          </ListGroupItem>
          <ListGroupItem onClick={() => history.push("/password")} action className="pointer" >
            <FormattedMessage id="password" />
          </ListGroupItem>

          <ListGroupItem onClick={() => history.push("/email-notification")} action className="pointer">
            <FormattedMessage id="emailNot" />
          </ListGroupItem>
          <ListGroupItem onClick={() => history.push("/apply-token")} action active className="pointer">
            <FormattedMessage id="Apply Token" />
          </ListGroupItem>
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
        <CardTitle tag="h5" className="mb-0">
          Apply Token
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="organization">Organization</Label>
                <Input type="text" name="text" id="organization" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="text" id="name" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="mobile">Mobile</Label>
                <Input type="text" name="mobile" id="mobile" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Address</Label>
                <Input type="text" name="address" id="address" />
              </FormGroup>
            </Col>
          </Row>
          <Button color="primary"><FormattedMessage id="Next" /></Button>
          <Button className="outline_btn"><FormattedMessage id="Save as draft" /></Button>
        </Form>
      </CardBody>
    </Card>
  )
};


const ApplyToken = () => {
  return (
    <Container fluid style={{height: 'calc(100vh - 100px)'}}>
      <Header>
        <HeaderTitle><FormattedMessage id="settings" /></HeaderTitle>

        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/dashboard"><FormattedMessage id="dashboard" /></Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/dashboard"><FormattedMessage id="pages" /></Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Apply Token</BreadcrumbItem>
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


export default ApplyToken;
