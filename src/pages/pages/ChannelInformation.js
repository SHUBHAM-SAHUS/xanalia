import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Row,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  CardText,
  ListGroup,
  ListGroupItem,
  CardHeader,
}
  from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import lake from '../../assets/img/channel/lake.png';
import Profile from '../../assets/img/channel/superhero.png';
import Camera from '../../assets/img/channel/Group 4.svg';
import ProfileSetting from './ProfileSetting';

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
          <ListGroupItem onClick={() => history.push("/Settings")} action className="pointer" className="pointer">
            <FormattedMessage id="account" />
          </ListGroupItem>
          {/* <ListGroupItem onClick={() => history.push("/channel-information")} action className="pointer" className="pointer"active>
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
          <ListGroupItem onClick={() => history.push("/logout")} action className="pointer">
            <FormattedMessage id="Logout" />
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  );
}

const PublicInfo = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  const intl = useIntl()
  return (
    <>
      <Card>
        <CardBody>
          <Row>
            <Col md="12" className="channel_sec">
              <img className="img-fluid" src={lake} />
              <div className="prfile_photo">
                <img src={Profile} className="img-fluid circle_img" />
                <img src={Camera} className=" circle_camera" />

                <Button className="cam_btn btn-primary">
                  <svg className="mr-2 camera" width="16" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group Copy">
                      <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M15.981 1.7029C16.5456 1.7029 17.0418 1.93841 17.4011 2.33696C17.7776 2.71739 18 3.24275 18 3.84058V12.8623C18 13.442 17.7605 13.9855 17.4011 14.3659C17.0418 14.7645 16.5456 15 15.981 15H2.01901C1.47148 15 0.958175 14.7464 0.598859 14.3659C0.222433 13.9855 0 13.4601 0 12.8623V3.84058C0 3.26087 0.239544 2.71739 0.598859 2.33696C0.958175 1.93841 1.45437 1.7029 2.01901 1.7029H4.84221V1.66667C4.84221 1.21377 5.01331 0.797101 5.30418 0.48913C5.59506 0.181159 5.98859 0 6.43346 0H11.5665C11.9943 0 12.3878 0.181159 12.6787 0.48913C12.9696 0.778986 13.1407 1.21377 13.1407 1.66667V1.7029H15.981ZM17.0932 12.8623H17.1103V3.84058C17.1103 3.51449 16.9905 3.22464 16.7852 3.00725C16.5798 2.78986 16.3061 2.66304 15.9981 2.66304H12.6958C12.4392 2.66304 12.2338 2.44565 12.2338 2.17391V1.64855C12.2338 1.44928 12.1654 1.26812 12.0456 1.1413C11.9259 1.01449 11.7548 0.942029 11.5665 0.942029H6.45057C6.26236 0.942029 6.09125 1.01449 5.97148 1.1413C5.85171 1.26812 5.78327 1.44928 5.78327 1.64855V2.17391C5.78327 2.44565 5.57795 2.66304 5.32129 2.66304H2.01901C1.71103 2.66304 1.43726 2.78986 1.23194 3.00725C1.02662 3.22464 0.906844 3.51449 0.906844 3.84058V12.8623C0.906844 13.1884 1.02662 13.4783 1.23194 13.6957C1.43726 13.913 1.71103 14.0399 2.01901 14.0399H15.981C16.289 14.0399 16.5627 13.913 16.7681 13.6957C16.9734 13.4783 17.0932 13.1884 17.0932 12.8623Z" fill="white" />
                      <g id="Shape_2" filter="url(#filter0_d)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.6299 5.54049C6.48212 4.77394 7.68298 4.28613 9.00006 4.28613C10.3171 4.28613 11.518 4.77394 12.3702 5.54049C13.2224 6.30704 13.7648 7.38718 13.7648 8.57185C13.7648 9.75652 13.2418 10.8192 12.3702 11.6032C11.518 12.3698 10.3171 12.8576 9.00006 12.8576C7.68298 12.8576 6.50149 12.3872 5.6299 11.6032C4.77768 10.8367 4.23535 9.75652 4.23535 8.57185C4.23535 7.38718 4.75831 6.32446 5.6299 5.54049ZM9.00006 11.9342C10.0266 11.9342 10.9563 11.5509 11.6342 10.9586C12.3121 10.3489 12.7382 9.51261 12.7189 8.58927C12.7189 7.66592 12.3121 6.82969 11.6342 6.21993C10.9563 5.6276 10.0266 5.24432 9.00006 5.24432C7.97352 5.24432 7.04382 5.61017 6.36591 6.21993C5.70737 6.82969 5.28126 7.66592 5.28126 8.58927C5.28126 9.51261 5.68801 10.3489 6.36591 10.9586C7.04382 11.5509 7.97352 11.9342 9.00006 11.9342Z" fill="white" />
                      </g>
                      <ellipse id="Oval" cx="14.8235" cy="6.42885" rx="1.05882" ry="1.07143" fill="white" />
                    </g>
                    <defs>
                      <filter id="filter0_d" x="0.235352" y="4.28613" width="17.5294" height="16.5714" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                  <span className="cam_text">Edit Cover photo</span>
                </Button>
              </div>
              <div className="channel_details">
                <h3>Channel Name
                  <svg className="ml-2" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59647 0.442795C8.18785 -0.147598 9.14551 -0.147598 9.73689 0.442795L10.5572 1.2602C11.1476 1.85154 11.1476 2.8093 10.5572 3.40073L4.31798 9.64059C4.31585 9.64492 4.31221 9.64766 4.30916 9.64996L4.30915 9.64996L4.30914 9.64997L4.30666 9.65191L4.30576 9.65271C4.30576 9.65451 4.30467 9.6552 4.30312 9.65619L4.30205 9.65689C4.30134 9.65738 4.30057 9.65798 4.2998 9.65878C4.29527 9.66179 4.29072 9.66556 4.28619 9.66932L4.28617 9.66933L4.28616 9.66934L4.28615 9.66935C4.28158 9.67313 4.27703 9.67691 4.27252 9.67989C4.26805 9.68288 4.26285 9.68588 4.25764 9.68888L4.25763 9.68889C4.25226 9.69199 4.24688 9.69509 4.24231 9.69817C4.24061 9.69978 4.23853 9.70082 4.23616 9.70111C4.22773 9.70641 4.21855 9.71048 4.20898 9.71333C4.20586 9.71626 4.20586 9.71626 4.20292 9.71626L0.400572 10.9848C0.369132 10.9943 0.336557 10.9994 0.303697 11C0.2233 11.0003 0.146027 10.9686 0.0887361 10.9121C0.00720239 10.8317 -0.0210172 10.7117 0.0161038 10.6034L1.28153 6.79772C1.28153 6.79614 1.28229 6.79535 1.28304 6.79459C1.28376 6.79384 1.28447 6.79311 1.28447 6.79166C1.28597 6.7873 1.28745 6.78363 1.28891 6.78C1.2905 6.77606 1.29208 6.77215 1.29365 6.76742C1.29518 6.76584 1.29594 6.76431 1.29669 6.7628C1.29743 6.76131 1.29816 6.75983 1.29962 6.75833C1.3028 6.75362 1.30513 6.74973 1.30747 6.74581C1.30965 6.74215 1.31185 6.73847 1.31477 6.73408C1.31477 6.73257 1.31555 6.73181 1.31633 6.73105C1.31712 6.73029 1.3179 6.72954 1.3179 6.72802C1.32092 6.72341 1.32476 6.71882 1.32859 6.71423L1.32859 6.71422C1.33231 6.70977 1.33603 6.70532 1.33901 6.70084C1.34096 6.70084 1.34169 6.69963 1.34268 6.69801C1.34328 6.69702 1.34397 6.69589 1.34507 6.69478L1.3572 6.68256L7.06067 0.981575L7.59647 0.442795ZM1.99905 6.89764L4.10605 9.00474L9.3796 3.73069L7.2726 1.62358L1.99905 6.89764ZM1.70227 7.45773L3.54298 9.29852L0.778979 10.2189L1.70227 7.45773ZM9.80952 3.30082L10.1304 2.97683C10.4839 2.62244 10.4852 2.04919 10.1334 1.6931L9.31 0.869633C8.95545 0.515435 8.38093 0.515435 8.02648 0.869633L7.70243 1.19353L9.80952 3.30082Z" fill="black" />
                  </svg>
                </h3>
                <h5>Status
                  <svg className="ml-2" width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59647 0.442795C8.18785 -0.147598 9.14551 -0.147598 9.73689 0.442795L10.5572 1.2602C11.1476 1.85154 11.1476 2.8093 10.5572 3.40073L4.31798 9.64059C4.31585 9.64492 4.31221 9.64766 4.30916 9.64996L4.30915 9.64996L4.30914 9.64997L4.30666 9.65191L4.30576 9.65271C4.30576 9.65451 4.30467 9.6552 4.30312 9.65619L4.30205 9.65689C4.30134 9.65738 4.30057 9.65798 4.2998 9.65878C4.29527 9.66179 4.29072 9.66556 4.28619 9.66932L4.28617 9.66933L4.28616 9.66934L4.28615 9.66935C4.28158 9.67313 4.27703 9.67691 4.27252 9.67989C4.26805 9.68288 4.26285 9.68588 4.25764 9.68888L4.25763 9.68889C4.25226 9.69199 4.24688 9.69509 4.24231 9.69817C4.24061 9.69978 4.23853 9.70082 4.23616 9.70111C4.22773 9.70641 4.21855 9.71048 4.20898 9.71333C4.20586 9.71626 4.20586 9.71626 4.20292 9.71626L0.400572 10.9848C0.369132 10.9943 0.336557 10.9994 0.303697 11C0.2233 11.0003 0.146027 10.9686 0.0887361 10.9121C0.00720239 10.8317 -0.0210172 10.7117 0.0161038 10.6034L1.28153 6.79772C1.28153 6.79614 1.28229 6.79535 1.28304 6.79459C1.28376 6.79384 1.28447 6.79311 1.28447 6.79166C1.28597 6.7873 1.28745 6.78363 1.28891 6.78C1.2905 6.77606 1.29208 6.77215 1.29365 6.76742C1.29518 6.76584 1.29594 6.76431 1.29669 6.7628C1.29743 6.76131 1.29816 6.75983 1.29962 6.75833C1.3028 6.75362 1.30513 6.74973 1.30747 6.74581C1.30965 6.74215 1.31185 6.73847 1.31477 6.73408C1.31477 6.73257 1.31555 6.73181 1.31633 6.73105C1.31712 6.73029 1.3179 6.72954 1.3179 6.72802C1.32092 6.72341 1.32476 6.71882 1.32859 6.71423L1.32859 6.71422C1.33231 6.70977 1.33603 6.70532 1.33901 6.70084C1.34096 6.70084 1.34169 6.69963 1.34268 6.69801C1.34328 6.69702 1.34397 6.69589 1.34507 6.69478L1.3572 6.68256L7.06067 0.981575L7.59647 0.442795ZM1.99905 6.89764L4.10605 9.00474L9.3796 3.73069L7.2726 1.62358L1.99905 6.89764ZM1.70227 7.45773L3.54298 9.29852L0.778979 10.2189L1.70227 7.45773ZM9.80952 3.30082L10.1304 2.97683C10.4839 2.62244 10.4852 2.04919 10.1334 1.6931L9.31 0.869633C8.95545 0.515435 8.38093 0.515435 8.02648 0.869633L7.70243 1.19353L9.80952 3.30082Z" fill="black" />
                  </svg>
                </h5>
              </div>

            </Col>
            <Col md={12} className="channel_describtion">
              <hr className="line_space" />
              <div className="channels_tabs">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '1' })}
                      onClick={() => { toggle('1'); }}
                    >
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === '2' })}
                      onClick={() => { toggle('2'); }}
                    >
                      Manage
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <div className="blank_space"></div>
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row>
                      <Col md={12}>
                        <div className="blank_space"></div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </Col>
            <Col md={2}></Col>
            <Col md={10}>
              <div className="swich_btn">
                <div className='email_notify custom-control custom-switch'>
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customSwitches'
                    readOnly
                  />
                  <small>Show new follower past posts</small><label className='custom-control-label' htmlFor='customSwitches'></label> |
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customSwitches2'
                    readOnly
                  />
                  <small>Show new follower past posts</small><label className='custom-control-label' htmlFor='customSwitches2'></label> |
                  <input
                    type='checkbox'
                    className='custom-control-input'
                    id='customSwitches3'
                    readOnly
                  />
                  <small>VIP</small><label className='custom-control-label' htmlFor='customSwitches3'></label>
                </div>
              </div>
            </Col>
            <Col md={12}>
              <div className="button_sec d-flex">
                <Button className="brn brn-primary">Create</Button>
                <Button className="brn brn-primary">Cancle</Button>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  )

};

const ChannelInformation = () => {
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
          <BreadcrumbItem active><FormattedMessage id="settings" /></BreadcrumbItem>
        </Breadcrumb>
      </Header>

      <Row>
        <Col md="3" xl="3">
          <Navigation />
        </Col>
        <Col md="9" xl="9">
          <PublicInfo />
        </Col>
      </Row>
    </Container>
  )
};

export default ChannelInformation;