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
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
  UncontrolledDropdown,
  InputGroup,
  InputGroupAddon,

} from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl'
import { logoutAction } from '../../redux/actions/authAction.js'
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';

import { MoreVertical, RefreshCw } from 'react-feather';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

import avatar1 from '../../assets/img/avatars/avatar.jpg';
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
          <ListGroupItem onClick={() => history.push("/Settings")} action className="pointer" className="pointer"active>
            <FormattedMessage id="account" />
          </ListGroupItem>
          {/* <ListGroupItem onClick={() => history.push("/channel-information")} action className="pointer">
            <FormattedMessage id="Create Channel" />
          </ListGroupItem> */}
          <ListGroupItem onClick={() => history.push("/password")} action className="pointer">
            <FormattedMessage id="password" />
          </ListGroupItem>

          <ListGroupItem onClick={() => history.push("/email-notification")} action className="pointer">
            <FormattedMessage id="emailNot" />
          </ListGroupItem>
          {/* <ListGroupItem onClick={() => history.push("/apply-token")} action className="pointer" className="pointer">
            <FormattedMessage id="Apply Token" />
          </ListGroupItem> */}
          <ListGroupItem onClick={() => history.push("/logout")} action className="pointer" className="pointer">
            <FormattedMessage id="Logout" />
          </ListGroupItem>
        </ListGroup>
      </Card>
      {/* <ProfileSetting /> */}
    </>
  )
}

const PublicInfo = () => {
  const intl = useIntl()
  return (
    <>
      <Card>
        <CardHeader>
          <div className="card-actions float-right">
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
          </div>
          <CardTitle tag="h5" className="mb-0">
            <FormattedMessage id="pubInfo" />
          </CardTitle>
        </CardHeader>
        <CardBody>
          <Form>
            <Row>
              <Col md="8">
                <FormGroup>
                  <Label for="inputUsername"><FormattedMessage id="userName" /></Label>
                  <Input type="text" id="inputUsername" placeholder={intl.formatMessage({ id: "userName" })} />
                </FormGroup>
                <FormGroup>
                  <Label for="inputBio"><FormattedMessage id="bio" /></Label>
                  <Input type="textarea" rows="2" id="inputBio" placeholder={intl.formatMessage({ id: "aboutYou" })} />
                </FormGroup>
              </Col>
              <Col md="4">
                <div className="text-center">
                  <img
                    alt="Chris Wood"
                    src={avatar1}
                    className="rounded-circle img-responsive mt-2"
                    width="128"
                    height="128"
                  />
                  <div className="mt-2">
                    <Button color="primary">
                      <FontAwesomeIcon icon={faUpload} /> <FormattedMessage id="upload" />
                    </Button>
                  </div>
                  <small><FormattedMessage id="forBestRes" /></small>
                </div>
              </Col>
            </Row>

            <Button color="primary"><FormattedMessage id="changesSave" /></Button>
          </Form>
        </CardBody>
      </Card>
    </>
  )

};

const PrivateInfo = () => {
  const intl = useIntl()
  return (
    <Card>
      <CardHeader>
        <div className="card-actions float-right">
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
        </div>
        <CardTitle tag="h5" className="mb-0">
          <FormattedMessage id="priInfo" />
        </CardTitle>
      </CardHeader>
      <CardBody>
        <Form>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName"><FormattedMessage id="fName" /></Label>
                <Input type="text" name="text" id="firstName" placeholder={intl.formatMessage({ id: "fName" })} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName"><FormattedMessage id="lastName" /></Label>
                <Input type="text" name="text" id="lastName" placeholder={intl.formatMessage({ id: "lastName" })} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Label for="email"><FormattedMessage id="email" /></Label>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input type="email" name="email" id="email" placeholder="dummy@gmail.com" />
                <InputGroupAddon addonType="append" color="primary">
                  <Button>Send OTP</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col md={6}>
              <Label for="otp">OTP</Label>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input type="text" name="otp" id="otp" placeholder="Verification code of old email" />
                <InputGroupAddon addonType="append" color="primary">
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input type="email" name="email" id="email" placeholder="Enter new email address" />
                <InputGroupAddon addonType="append" color="primary">
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col md={6}>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input type="email" name="email" id="email" placeholder="Re-enter new email address" />
                <InputGroupAddon addonType="append" color="primary">
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label for="country">Country</Label>
                <Input type="text" name="country" id="country" placeholder="1234 Main St" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Label for="phone">Phone</Label>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input type="number" name="phone" id="phone" placeholder="+91" />
                <InputGroupAddon addonType="append" color="primary">
                  <Button>Send OTP</Button>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col md={6}>
              <Label for="otp">OTP</Label>
              <InputGroup className="mb-3">
                <InputGroupAddon addonType="prepend"></InputGroupAddon>
                <Input type="text" name="otp" id="otp" placeholder="+91 0000 000" />
                <InputGroupAddon addonType="append" color="primary">
                </InputGroupAddon>
              </InputGroup>
            </Col>
          </Row>

          {/* <FormGroup>
            <Label for="email"><FormattedMessage id="email" /></Label>
            <Input type="email" name="email" id="email" placeholder={intl.formatMessage({ id: "email" })} />
          </FormGroup>
          <FormGroup>
            <Label for="address"><FormattedMessage id="add" /></Label>
            <Input type="text" name="address" id="address" placeholder={intl.formatMessage({ id: "mainSt" })} />
          </FormGroup>
          <FormGroup>
            <Label for="address2"><FormattedMessage id="add2" /></Label>
            <Input type="text" name="address2" id="address2" placeholder={intl.formatMessage({ id: "apartment" })} />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city"><FormattedMessage id="city" /></Label>
                <Input type="text" name="city" id="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state"><FormattedMessage id="state" /></Label>
                <Input type="select" name="state" id="state">
                  <option>{intl.formatMessage({ id: "choose" })}</option>
                  <option>...</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="zipcode"><FormattedMessage id="zip" /></Label>
                <Input type="text" name="zip" id="zipcode" />
              </FormGroup>
            </Col>
          </Row> */}

          <Button color="primary"><FormattedMessage id="changesSave" /></Button>
        </Form>
      </CardBody>
    </Card>
  )
};

const Settings = () => (
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
        <BreadcrumbItem active><FormattedMessage id="settings" /></BreadcrumbItem>
      </Breadcrumb>
    </Header>

    <Row>
      <Col md="3" xl="3">
        <Navigation />
      </Col>
      <Col md="9" xl="9">
        <PublicInfo />
        <PrivateInfo />
      </Col>
    </Row>
  </Container>
);

export default Settings;
