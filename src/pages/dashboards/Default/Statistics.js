import React from 'react';
import {FormattedMessage} from 'react-intl';
import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';

import { Truck, Users, DollarSign, ShoppingCart } from 'react-feather';

const Statistics = () => (
  <div className="w-100 card_rank">
    <Row>

      <Col className="card_item">
        <Card>
          <CardBody>
            <Row>
              <Col className="mt-0">
                <CardTitle tag="h5"><FormattedMessage id="Trade Volume"/></CardTitle>
              </Col>

              <Col className="col-auto">
                <div className="avatar">
                  <div className="avatar-title rounded-circle bg-primary-dark">
                    <DollarSign className="feather align-middle" />
                  </div>
                </div>
              </Col>
            </Row>
            <h1 className="display-5 mt-1 mb-3">$20,024</h1>
            <div className="mb-0">
              <span className="text-success">
                <i className="mdi mdi-arrow-bottom-right"></i> 405%
              </span>{' '}
              <p><small><FormattedMessage id="lessSales"/></small></p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="card_item">
        <Card>
          <CardBody>
            <Row>
              <Col className="mt-0">
                <CardTitle tag="h5"><FormattedMessage id="To Creator"/></CardTitle>
              </Col>

              <Col className="col-auto">
                <div className="avatar">
                  <div className="avatar-title rounded-circle bg-primary-dark">
                    <DollarSign className="feather align-middle" />
                  </div>
                </div>
              </Col>
            </Row>
            <h1 className="display-5 mt-1 mb-3">$20,024</h1>
            <div className="mb-0">
              <span className="text-success">
                <i className="mdi mdi-arrow-bottom-right"></i> 405%
              </span>{' '}
              <p><small><FormattedMessage id="lessSales"/></small></p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="card_item">
        <Card>
          <CardBody>
            <Row>
              <Col className="mt-0">
                <CardTitle tag="h5"><FormattedMessage id="To Agent"/></CardTitle>
              </Col>

              <Col className="col-auto">
                <div className="avatar">
                  <div className="avatar-title rounded-circle bg-primary-dark">
                    <DollarSign className="feather align-middle" />
                  </div>
                </div>
              </Col>
            </Row>
            <h1 className="display-5 mt-1 mb-3">$20,024</h1>
            <div className="mb-0">
              <span className="text-success">
                <i className="mdi mdi-arrow-bottom-right"></i> 405%
              </span>{' '}
              <p><small><FormattedMessage id="lessSales"/></small></p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="card_item">
        <Card>
          <CardBody>
            <Row>
              <Col className="mt-0">
                <CardTitle tag="h5"><FormattedMessage id="Our NFT Profit"/></CardTitle>
              </Col>

              <Col className="col-auto">
                <div className="avatar">
                  <div className="avatar-title rounded-circle bg-primary-dark">
                    <DollarSign className="feather align-middle" />
                  </div>
                </div>
              </Col>
            </Row>
            <h1 className="display-5 mt-1 mb-3">$20,024</h1>
            <div className="mb-0">
              <span className="text-success">
                <i className="mdi mdi-arrow-bottom-right"></i> 405%
              </span>{' '}
              <p><small><FormattedMessage id="lessSales"/></small></p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="card_item">
        <Card>
          <CardBody>
            <Row>
              <Col className="mt-0">
                <CardTitle tag="h5"><FormattedMessage id="Platform Profit"/></CardTitle>
              </Col>

              <Col className="col-auto">
                <div className="avatar">
                  <div className="avatar-title rounded-circle bg-primary-dark">
                    <DollarSign className="feather align-middle" />
                  </div>
                </div>
              </Col>
            </Row>
            <h1 className="display-5 mt-1 mb-3">$20,024</h1>
            <div className="mb-0">
              <span className="text-success">
                <i className="mdi mdi-arrow-bottom-right"></i> 405%
              </span>{' '}
              <p><small><FormattedMessage id="lessSales"/></small></p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="card_item">
        <Card>
          <CardBody>
            <Row>
              <Col className="mt-0">
                <CardTitle tag="h5"><FormattedMessage id="PV"/></CardTitle>
              </Col>

              <Col className="col-auto">
                <div className="avatar">
                  <div className="avatar-title rounded-circle bg-primary-dark">
                    <DollarSign className="feather align-middle" />
                  </div>
                </div>
              </Col>
            </Row>
            <h1 className="display-5 mt-1 mb-3">$20,024</h1>
            <div className="mb-0">
              <span className="text-success">
                <i className="mdi mdi-arrow-bottom-right"></i> 405%
              </span>{' '}
              <p><small><FormattedMessage id="lessSales"/></small></p>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col className="card_item">
        <Card>
          <CardBody>
            <Row>
              <Col className="mt-0">
                <CardTitle tag="h5"><FormattedMessage id="UU"/></CardTitle>
              </Col>

              <Col className="col-auto">
                <div className="avatar">
                  <div className="avatar-title rounded-circle bg-primary-dark">
                    <DollarSign className="feather align-middle" />
                  </div>
                </div>
              </Col>
            </Row>
            <h1 className="display-5 mt-1 mb-3">$20,024</h1>
            <div className="mb-0">
              <span className="text-success">
                <i className="mdi mdi-arrow-bottom-right"></i> 405%
              </span>{' '}
              <p><small><FormattedMessage id="lessSales"/></small></p>
            </div>
          </CardBody>
        </Card>
      </Col>
      
      
    </Row>
  </div>
);

export default Statistics;
