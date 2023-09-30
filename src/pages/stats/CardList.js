import React, { useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavTabs from './NavTabs';
import { Card, CardBody, Container, Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem, TabPane } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import Button from 'reactstrap/lib/Button';
import './styles.scss';
import NftModal from './NftModal';
import { AlertTriangle } from 'react-feather';
import { Feather } from "react-feather";
import * as Icon from 'react-feather';
const nftData = [
  {
    id: 1,
    nft_name: 'Dark Shadow',
    rarity: 'Ultra Rare',
    rarity_: '4%',
    nft: '2%',
    copy: '12342',
    sold: '2,000',
    // category: 'A',
    // allocation: '4%',
    // open: '08/27/2021, 13:19:51 PM',
    // close: '09/27/2021, 10:35:01 AM',
    edit: [<Icon.Edit className="edit_action"/>,<Icon.Trash2 className="edit_action" />],
  },
  {
    id: 2,
    nft_name: 'Lion In Jungle',
    rarity: 'Ultra Rare',
    rarity_: '4%',
    nft: '2%',
    copy: '12342',
    sold: '2,000',
    // category: 'B',
    // allocation: '9%',
    // open: '12/02/2021, 11:39:21 AM',
    // close: '12/16/2021, 11:39:21 AM',
    edit: [<Icon.Edit className="edit_action"/>,<Icon.Trash2 className="edit_action" />],
  },
  {
    id: 3,
    nft_name: 'Broken Wall',
    rarity: 'Super Rare',
    rarity_: '8%',
    nft: '4%',
    copy: '12342',
    sold: '2,000',
    // category: 'C',
    // allocation: '2%',
    // open: '11/07/2021, 12:09:27 AM',
    // close: '12/16/2021, 13:45:34 PM',
    edit: [<Icon.Edit className="edit_action"/>,<Icon.Trash2 className="edit_action" />],
  },
  {
    id: 4,
    nft_name: 'Moonlight',
    rarity: 'Super Rare',
    rarity_: '8%',
    nft: '4%',
    copy: '12342',
    sold: '2,000',
    // category: 'A',
    // allocation: '4%',
    // open: '11/07/2021, 12:09:27 AM',
    // close: '12/16/2021, 13:45:34 PM',
    edit: [<Icon.Edit className="edit_action"/>,<Icon.Trash2 className="edit_action" />],
  }
  // {
  //   id: 5,
  //   nft_name: 'Beautiful child',
  //   rarity: '15%',
  //   category: 'B',
  //   allocation: '9%',
  //   copy: '21324',
  //   sold: '675',
  //   open: '11/07/2021, 12:09:27 AM',
  //   close: '12/16/2021, 13:45:34 PM',
  //   edit: [<Icon.Edit className="edit_action"/>,<Icon.Trash2 className="edit_action" />],
  // },
  // {
  //   id: 6,
  //   nft_name: 'Demon Fire',
  //   rarity: '11%',
  //   category: 'C',
  //   allocation: '2%',
  //   copy: '2',
  //   sold: '1034',
  //   open: '11/07/2021, 12:09:27 AM',
  //   close: '12/16/2021, 13:45:34 PM',
  //   edit: [<Icon.Edit className="edit_action"/>,<Icon.Trash2 className="edit_action" />],
  // },
  // {
  //   id: 7,
  //   nft_name: 'Shining Stars',
  //   rarity: '7%',
  //   category: 'A',
  //   allocation: '4%',
  //   copy: '12312',
  //   sold: '2,000',
  //   open: '12/02/2021, 11:39:21 AM',
  //   close: '12/16/2021, 11:39:21 AM',
  //   edit: [<Icon.Edit className="edit_action"/>,<Icon.Trash2 className="edit_action" />],
  // },
  // {
  //   id: 8,
  //   nft_name: 'A Hut',
  //   rarity: '15%',
  //   category: 'B',
  //   allocation: '9%',
  //   copy: '21324',
  //   sold: '675',
  //   open: '12/02/2021, 11:39:21 AM',
  //   close: '12/16/2021, 11:39:21 AM',
  //   edit: [<Icon.Edit className="edit_action"/>,<Icon.Trash2 className="edit_action" />],
  // },
  // {
  //   id: 9,
  //   nft_name: 'Snake',
  //   rarity: '11%',
  //   category: 'C',
  //   allocation: '2%',
  //   copy: '2',
  //   sold: '1034',
  //   open: '08/27/2021, 13:19:51 PM',
  //   close: '09/27/2021, 10:35:01 AM',
  //   edit: [<Icon.Edit className="edit_action"/>,<Icon.Trash2 className="edit_action" />],
  // }
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
    dataField: 'rarity_',
    text: 'Rarity%',
  },
  {
    dataField: 'nft',
    text: 'NFT%',
  },
  // {
  //   dataField: 'allocation',
  //   text: 'Allocation',
  // },
  {
    dataField: 'copy',
    text: 'Copy',
  },
  {
    dataField: 'sold',
    text: 'Sold',
  },
  // {
  //   dataField: 'open',
  //   text: 'Open',
  // },
  // {
  //   dataField: 'close',
  //   text: 'Close',
  // },
  {
    dataField: 'edit',
    text: 'Edit',
  },
];

function CardList() {
  const [toggle, setToggle] = useState('blindbox');
  // const [showModal, setShowModal] = useState(false);
  const [openModals, setOpenModals] = useState(false);
  const [addTagModal, setAddTagModal] = useState(false);


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
          edit: element.edit,
          rarity_: element.rarity_,
          nft: element.nft,
        };
        elementData.push(obj);
      });
    }
    return elementData;
  };
  const modalClose = () => {
    setOpenModals(false);
    setAddTagModal(false);
  }
  const tagModalOpen = () => {
    setAddTagModal(true);
};

  return (
    <Container fluid>
        <NftModal addTagModal={addTagModal} close={modalClose} />
     
      <div className="add_new" onClick={tagModalOpen}>
        <Button color="primary" >Add New</Button>
      </div>
      <NavTabs />
      <Card>
        <CardBody>
          <div className="d-flex justify-content-between">
            <div className="d-flex justify-content-between">
              <Nav tabs style={{ borderBottom: 'none' }}>
                <NavItem style={{ cursor: 'pointer' }}>
                  <NavLink
                    className={ toggle == "blindbox" ?  "active" : ""}
                    eventKey="blindbox"
                    onClick={() => {
                        changeToggle('blindbox');
                    }}
                  >
                    <FormattedMessage id="Blindbox" />
                  </NavLink>
                </NavItem>
                <NavItem style={{ cursor: 'pointer' }}>
                  <NavLink
                    className={ toggle == "nft" ?  "active" : ""}
                    eventKey="nft"
                    onClick={() => {
                        changeToggle('nft');
                    }}
                  >
                    <FormattedMessage id="NFT's" />
                  </NavLink>
                </NavItem>
                {/* <NavItem style={{ cursor: 'pointer' }}>
                  <NavLink
                    className={ toggle == "sent" ?  "active" : ""}
                    eventKey="sent"
                    onClick={() => {
                        changeToggle('sent');
                    }}
                  >
                    <FormattedMessage id="Sent" />
                  </NavLink>
                </NavItem> */}
              </Nav>
            </div>
            <div>
              {/* <FontAwesomeIcon icon={faPlus} className="plush-icon" /> */}
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

export default CardList;
