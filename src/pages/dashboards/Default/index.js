import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {FormattedMessage} from 'react-intl'

import BarChart from './BarChart';
import Calendar from './Calendar';
import Listchart from './listchart';
import PieChart from './PieChart';
import Statistics from './Statistics';
import Table from './Table';
import WorldMap from './WorldMap';

import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle';
import HeaderSubtitle from '../../../components/HeaderSubtitle';

import { useDispatch ,useSelector} from 'react-redux';
import MessageList from './MessageList';
// import { InitiateConnectUserChatList } from "../../../redux/actions/connectUsersChat";

function Default() {
  const dispatch = useDispatch();
  const { user } = useSelector(
    (state) => ({
      user: state.auth.user,
    })
  );
  useEffect(() => {
    // dispatch(InitiateConnectUserChatList());
  }, []);

  return (
    <Container fluid>
      <Header>
        <HeaderTitle><FormattedMessage id="welBack" />, {user.userName}!</HeaderTitle>
        <HeaderSubtitle style={{ color: 'black' }}>
          <FormattedMessage id="youHave" /> 24
          <FormattedMessage id="newMessages" />
          <FormattedMessage id="and" /> 5
          <FormattedMessage id="newNoti" />
        </HeaderSubtitle>
      </Header>

      <Row>
        <Col md={12}>
          <Listchart />
        </Col>
        
        {/* <Col xl="6" className="d-flex col-xxl-7">
          <LineChart />
        </Col>
        <Col xl="6" className="d-flex col-xxl-5">
          <Statistics />
        </Col> */}
      </Row>
      <Row>
      <Col md={12} className="mt-3" >
          <MessageList />
        </Col>
      </Row>
      {/* <Row>
        <Col md="6" className="col-xxl-3 d-flex order-1 order-xxl-1">
          <Calendar />
        </Col>
        <Col md="12" className="col-xxl-6  d-flex order-3 order-xxl-2">
          <WorldMap />
        </Col>
        <Col md="6" className="col-xxl-3  d-flex order-2 order-xxl-3">
          <PieChart />
        </Col>
      </Row>
      <Row>
        <Col lg="8" className="col-xxl-9 d-flex">
          <Table />
        </Col>
        <Col lg="4" className="col-xxl-3  d-flex">
          <BarChart />
        </Col>
      </Row> */}
    </Container>
  );
} 

export default Default;
