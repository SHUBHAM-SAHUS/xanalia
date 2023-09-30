import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import {FormattedMessage} from 'react-intl';
import { DollarSign } from 'react-feather';

const StaticsCard = ({ heading, amount, percentage }) => (
  <Card>
    <CardBody>
      <Row>
        <Col className="mt-2">
          <CardTitle tag="h5">{heading}</CardTitle>
        </Col>

        <Col className="col-auto">
          <div className="avatar">
            <div className="avatar-title rounded-circle bg-primary-dark">
              <DollarSign className="feather align-middle" />
            </div>
          </div>
        </Col>
      </Row>
      <h1 className="display-5 font-weight-bold mt-2 mb-2">${amount}</h1>
      <div className="mb-0 text-right">
        <div className="text-success">
          <i className="mdi mdi-arrow-bottom-right"></i> {percentage}%
        </div>{' '}
        <FormattedMessage id="Then last week" />
      </div>
    </CardBody>
  </Card>
);

export default StaticsCard;
