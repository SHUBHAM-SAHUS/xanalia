import React, { useState, useEffect } from 'react';
import { DollarSign } from 'react-feather';
import Header from '../../../components/Header';
import HeaderTitle from '../../../components/HeaderTitle';
import StatsCard from '../../dashboards/Default/Statistics';
import {
    Card,
    CardBody,
    Container,
    Nav,
    NavItem,
    NavLink,
    CardTitle, 
    Col, 
    Row,
    Breadcrumb,
    BreadcrumbItem,
    FormGroup,
    Input,
    Button,
    ButtonGroup
} from 'reactstrap';
import { FormattedMessage } from 'react-intl'
import { Link } from 'react-router-dom';
import { Line } from "react-chartjs-2";

const data = {
//   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  labels: [ "Dec1", "Dec2", "Dec3", "Dec4", "Dec5", "Dec6","Dec7", "Dec8", "Dec9", "Dec10", "Dec11", "Dec12","Dec13", "Dec14", "Dec15", "Dec16", "Dec17", "Dec18"],
  datasets: [
    {
      label: "Hourly",
      data: [10, 50, 80, 430 , 210 , 290 , 110 , 350, 40, 60,280,120 , 101 , 60, 120 ,20 ,50 ,60 ,90,10,220,87,56,403,290,302,181,166,144,65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "#3ca6d6",
      borderWidth: 3
    },
    {
      label: "Day",
      data: [],
    //   3, 2, 5, 1, 4, 6
      fill: false,
      borderColor: "#742774"
    },
    {
      label: "Week",
      data: [],
    //   1, 5, 3, 8, 4, 7
      fill: false,
      borderColor: "#a93737"
    },
    {
      label: "Month",
      data: [],
    //   2, 1, 5, 1, 4, 8
      fill: false,
      borderColor: "#68d474"
    }
  ]
};

const options = {
    maintainAspectRatio: false,
    layout: {
        padding: {
            left: 10,
            right: 20,
            top: 5,
            bottom: 10
        }
    },
    hover: {
        intersect: true,
    },
    line: {
        tension: 100
    },
    legend: {
        display: false
    },
    tooltips: {
        displayColors: false,
        intersect: false,
    },
    plugins: {
        filler: {
          propagate: false,
        },
    },
    scales: {
        xAxes: [{
            gridLines: {
                //reverse: true,
                color: "rgba(255, 255, 255, 0.1)",
            },
            ticks: {
                display: true
            }
        }],
        yAxes: [{
            ticks: {
            //   display: false,
              suggestedMin: 250,
              suggestedMax: 500,
              stepSize: 250,
            //   maxTicksLimit: 3,
            },
            gridLines: {
                // color: "rgba(255, 255, 255, 0.1)",
            },
            display: true,
        }]
    },
}

let cardsData = [
    {
      id: 1,
      cardHeading: 'Trade Volume',
      amount: 20024,
      percentage: 45,
    },
    {
      id: 2,
      cardHeading: 'To Creator',
      amount: 20024,
      percentage: 45,
    },
    {
      id: 3,
      cardHeading: 'To Agent',
      amount: 20024,
      percentage: 45,
    },
    {
      id: 4,
      cardHeading: 'Our NFT Profit',
      amount: 20024,
      percentage: 45,
    },
    {
      id: 5,
      cardHeading: 'Platform Profit',
      amount: 20024,
      percentage: 45,
    },
    {
      id: 6,
      cardHeading: 'PV',
      amount: 20024,
      percentage: 45,
    },
    {
      id: 7,
      cardHeading: 'UU',
      amount: 20024,
      percentage: 45,
    }
  ];


function Listchart(props) {
    return (
        <Container fluid className="nft-stats">
            <Header className="mb-0">
                <div>
                <HeaderTitle><FormattedMessage id="Stats" /></HeaderTitle>
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/dashboard"><FormattedMessage id="dashboard" /></Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        <FormattedMessage id="Stats" />
                    </BreadcrumbItem>

                </Breadcrumb>
                </div>
                <div  style={{marginTop:'30px'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between' , flexWrap: 'wrap' }}>
                        <Nav tabs style={{ borderBottom: 'none' }}>
                            <NavItem style={{ cursor: 'pointer' }}>
                                <NavLink
                                    className="active"
                                >
                                    <FormattedMessage id="Revenue" />
                                </NavLink>
                            </NavItem>
                            <NavItem style={{ cursor: 'pointer' }}>
                                <NavLink>
                                    <FormattedMessage id="Py" />
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <div className="p-2 bg-white">
                        <FormGroup style={{ display: 'flex', marginBottom: '0px' }}>
                            <Input
                                placeholder="From Date"
                                type="date"
                                name="from_date"
                                id="from"
                            />
                            <span className="to_text"><FormattedMessage id="To" /></span>
                            <Input
                                placeholder="To Date"
                                type="date"
                                name="to_date"
                                id="to"
                            />&nbsp;
                            <Button className="search_btn" color="primary" >
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="search_icon svg-inline--fa fa-search fa-w-16 fa-fw align-middle mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                            </Button>&nbsp;
                            <Button className="clear_btn" color="secondary"><FormattedMessage id="clear" /></Button>


                        </FormGroup>
                        </div>
                    </div>
                </div>
            </Header>
            <Card className="mt-1">
                <CardBody>
                    <div className="d-flex justify-content-end pt-1 py-2 pb-5">
                    <ButtonGroup>
                       <Button outline color="stats">Day</Button>
                       <Button outline color="stats">Hour</Button>
                       <Button outline color="stats">Week</Button>
                       <Button outline color="stats">Month</Button>
                    </ButtonGroup>
                    </div>
                    <div className="chart chart-sm ">
                    <Line data={data} options={options} height={80} width={300}/>
                    </div>
                </CardBody>
            </Card>
            <Row>
            {/* {
            cardsData.map(card => {
                return(
                    <Col key={card.id} sm="6" md="4" lg="3" >
                      <StatsCard  heading={card.cardHeading} amount={card.amount} percentage={card.percentage}/>
                    </Col>
                )
            })
          } */}
          <StatsCard  heading={'a'} amount={1} percentage={1}/>
            </Row>
        </Container>
    );
};

export default Listchart;
