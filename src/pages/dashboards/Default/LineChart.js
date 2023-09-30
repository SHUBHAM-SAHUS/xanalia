import React from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './style.scss';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap';

import { MoreVertical, RefreshCw } from 'react-feather';
import { useLocation } from 'react-router-dom'

const LineChart = ({ theme }) => {
  const location = useLocation();
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Orders',
        fill: true,
        backgroundColor: theme?.primary,
        borderColor: theme?.primary,
        borderWidth: 2,
        data: [3, 2, 3, 5, 6, 5, 4, 6, 9, 10, 8, 9],
      },
      {
        label: 'Sales ($)',
        fill: true,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        borderColor: 'rgba(0, 0, 0, 0.05)',
        borderWidth: 2,
        data: [5, 4, 10, 15, 16, 12, 10, 13, 20, 22, 18, 20],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      intersect: false,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: 'rgba(0,0,0,0.0)',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 5,
          },
          display: true,
          gridLines: {
            color: 'rgba(0,0,0,0)',
            fontColor: '#fff',
          },
        },
      ],
    },
  };


  return (
    <Card className={location.pathname === "/home2" ? "flex-fill w-100 line-chart" : "flex-fill w-100"}
    >
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
          <FormattedMessage id="recentMove" />
        </CardTitle>
      </CardHeader>
      <CardBody className="py-3">
        <div className={location.pathname === "/home2" ? "chart chart-lg" : "chart chart-sm"}>
          <Line data={data} options={options} />
        </div>
      </CardBody>
    </Card>
  );
};

export default connect((store) => ({
  theme: store?.theme?.currentTheme,
}))(LineChart);
