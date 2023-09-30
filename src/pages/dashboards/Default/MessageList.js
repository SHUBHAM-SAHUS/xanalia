import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, CardBody, Container, Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem, TabPane } from 'reactstrap';
import { FormattedMessage } from 'react-intl';

const nftData = [
  {
    id: 1,
    nft_name: 'Dark Shadow',
    rarity: '7%',
    category: 'A',
    allocation: '4%',
    copy: '12312',
    sold: '2,000',
    open: '08/27/2021, 13:19:51 PM',
    close: '09/27/2021, 10:35:01 AM',
  },
  {
    id: 2,
    nft_name: 'Lion In Jungle',
    rarity: '15%',
    category: 'B',
    allocation: '9%',
    copy: '21324',
    sold: '675',
    open: '12/02/2021, 11:39:21 AM',
    close: '12/16/2021, 11:39:21 AM',
  },
  {
    id: 3,
    nft_name: 'Broken Wall',
    rarity: '11%',
    category: 'C',
    allocation: '2%',
    copy: '2',
    sold: '9034',
    open: '11/07/2021, 12:09:27 AM',
    close: '12/16/2021, 13:45:34 PM',
  },
  {
    id: 4,
    nft_name: 'Moonlight',
    rarity: '7%',
    category: 'A',
    allocation: '4%',
    copy: '12312',
    sold: '2,000',
    open: '11/07/2021, 12:09:27 AM',
    close: '12/16/2021, 13:45:34 PM',
  },
  {
    id: 5,
    nft_name: 'Beautiful child',
    rarity: '15%',
    category: 'B',
    allocation: '9%',
    copy: '21324',
    sold: '675',
    open: '11/07/2021, 12:09:27 AM',
    close: '12/16/2021, 13:45:34 PM',
  },
  {
    id: 6,
    nft_name: 'Demon Fire',
    rarity: '11%',
    category: 'C',
    allocation: '2%',
    copy: '2',
    sold: '1034',
    open: '11/07/2021, 12:09:27 AM',
    close: '12/16/2021, 13:45:34 PM',
  },
  {
    id: 7,
    nft_name: 'Shining Stars',
    rarity: '7%',
    category: 'A',
    allocation: '4%',
    copy: '12312',
    sold: '2,000',
    open: '12/02/2021, 11:39:21 AM',
    close: '12/16/2021, 11:39:21 AM',
  },
  {
    id: 8,
    nft_name: 'A Hut',
    rarity: '15%',
    category: 'B',
    allocation: '9%',
    copy: '21324',
    sold: '675',
    open: '12/02/2021, 11:39:21 AM',
    close: '12/16/2021, 11:39:21 AM',
  },
  {
    id: 9,
    nft_name: 'Snake',
    rarity: '11%',
    category: 'C',
    allocation: '2%',
    copy: '2',
    sold: '1034',
    open: '08/27/2021, 13:19:51 PM',
    close: '09/27/2021, 10:35:01 AM',
  }
];

const tableColumns = [
  {
    dataField: 'srNumber',
    text: '#',
  },
  {
    dataField: 'nftName',
    text: 'NFT Name',
  },
  {
    dataField: 'rarity',
    text: 'Rarity',
  },
  {
    dataField: 'category',
    text: 'Category',
  },

  {
    dataField: 'allocation',
    text: 'Allocation',
  },
  {
    dataField: 'copy',
    text: 'Copy',
  },
  {
    dataField: 'sold',
    text: 'Sold',
  },
  {
    dataField: 'open',
    text: 'Open',
  },
  {
    dataField: 'close',
    text: 'Close',
  },
];

function MessageList() {
  const [toggle, setToggle] = useState('schedule');

  const changeToggle = (tab) => {
    setToggle(tab);
  };

  const setData = () => {
    var elementData = [];
    var number = 1;
    if (nftData && nftData.length > 0) {
      nftData.forEach((element) => {
        number++;
        const obj = {
          srNumber: element.id,
          nftName: element.nft_name,
          rarity: element.rarity,
          category: element.category,
          allocation: element.allocation,
          copy: element.copy,
          sold: element.sold,
          open: element.open,
          close: element.close,
        };
        elementData.push(obj);
      });
    }
    return elementData;
  };

  return (
    <Container fluid>
      <Card>
        <CardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between">
              <Nav tabs style={{ borderBottom: 'none' }}>
                <NavItem style={{ cursor: 'pointer' }}>
                  <NavLink
                    className={ toggle == "schedule" ?  "active" : ""}
                    eventKey="schedule"
                    onClick={() => {
                        changeToggle('schedule');
                    }}
                  >
                    <FormattedMessage id="schedule" />
                  </NavLink>
                </NavItem>
                <NavItem style={{ cursor: 'pointer' }}>
                  <NavLink
                    className={ toggle == "draft" ?  "active" : ""}
                    eventKey="draft"
                    onClick={() => {
                        changeToggle('draft');
                    }}
                  >
                    <FormattedMessage id="draft" />
                  </NavLink>
                </NavItem>
                <NavItem style={{ cursor: 'pointer' }}>
                  <NavLink
                    className={ toggle == "sent" ?  "active" : ""}
                    eventKey="sent"
                    onClick={() => {
                        changeToggle('sent');
                    }}
                  >
                    <FormattedMessage id="Sent" />
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div>
              <FontAwesomeIcon icon={faPlus} className="plush-icon" />
            </div>
          </div>
          <div>
            <TabPane tabId="3">
              <div className="analytics-table">
                <BootstrapTable
                  keyField="name"
                  data={setData()}
                  columns={tableColumns}
                  noDataIndication="No Data"
                  bootstrap4
                  //defaultSorted={defaultSorted}
                  // remote={{ pagination: true, filter: true }}
                  bordered={false}
                  // pagination={paginationFactory({
                  //   sizePerPage: 15,
                  //   sizePerPageList: [15, 20, 25, 50],
                  // })}
                />
              </div>
            </TabPane>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
}

export default MessageList;
