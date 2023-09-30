import React from 'react';
import { Link } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
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
import {useHistory} from "react-router-dom"
import {useDispatch} from "react-redux";
import {logoutAction} from '../../redux/actions/authAction.js'

import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';

const Navigation = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const handleLogout = () => {
    dispatch(logoutAction())
    history.push("/")
  }
  return(
<>
<Card>
    <CardHeader>
      <CardTitle tag="h5" className="mb-0">
        <FormattedMessage id="profileSet" />
      </CardTitle>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem onClick={() => history.push("/Settings")} action className="pointer" className="pointer">
        <FormattedMessage id="account" />
      </ListGroupItem>
      {/* <ListGroupItem tag="a"href="/channel-information" action className="pointer" className="pointer">
         <FormattedMessage id="Create Channel" />
      </ListGroupItem> */}
      <ListGroupItem onClick={() => history.push("/password")} action className="pointer" className="pointer">
        <FormattedMessage id="password" />
      </ListGroupItem>

      <ListGroupItem onClick={() => history.push("/email-notification")} action className="pointer" className="pointer"active>
        <FormattedMessage id="emailNot" />
      </ListGroupItem>
      {/* <ListGroupItem onClick={() => history.push("/apply-token")} action className="pointer" className="pointer"> 
        <FormattedMessage id="Apply Token" />
      </ListGroupItem> */}
      <ListGroupItem onClick={() => history.push("/logout")} onClick={handleLogout}>
        <FormattedMessage id="Logout" />
      </ListGroupItem>
    </ListGroup>
  </Card>
</>
)};

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
        Email Notification
        </CardTitle>
      </CardHeader>
      <CardBody>
      <div className='email_notify custom-control custom-switch'>
        <input
          type='checkbox'
          className='custom-control-input'
          id='customSwitches' 
          readOnly
        />
        <label className='custom-control-label' htmlFor='customSwitches'>
                 </label>
      </div>
      </CardBody>
    </Card>
  )
};

const EmailNotification = () => {
    return(
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
            <BreadcrumbItem active>Email Notification</BreadcrumbItem>
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

export default EmailNotification;