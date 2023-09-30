import React, { useState } from 'react';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import { Container, Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import NavTabs from './NavTabs';
import { Link } from 'react-router-dom';
// import BlindBox from './BlindBox';
// import CardList from './CardList';
// import NFTPage from './NFTPage';
// import Collection from '../../components/create/Collection';
// import Rarity from '../../components/rarity/Rarity';
// import Filters from '../../components/filters/Filters';

function Store() {
//   const [selectedTab, setSelectedTab] = useState("blindbox")

//   const changeSelectedTab = (tab) => {
//     setSelectedTab(tab)
//   }

  // console.log('selectedTab', selectedTab);
  return (
    <Container fluid className="blindBoxTabUI">
      <NavTabs />
      {/* <Header>
        <HeaderTitle>
          <FormattedMessage id="Penpenz" />
        </HeaderTitle>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">
              <FormattedMessage id="Blindbox" />
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <FormattedMessage id="NFT DUEL" />
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="Penpenz" />
          </BreadcrumbItem>
        </Breadcrumb>
        <Nav className="tabs-center" variant="tabs" activeKey={selectedTab ? selectedTab : 'nft'}>

        <NavItem className={`pointer tabs-space ${selectedTab === "collection" ? 'tabs-border' : ''}`}>
            <NavLink
              eventKey="collection"
              onClick={() => {
                changeSelectedTab('collection');
              }}
            >
              Collection
            </NavLink>
          </NavItem>

          <NavItem className={`pointer tabs-space ${selectedTab === "blindbox" ? 'tabs-border' : ''}`}>
            <NavLink
              eventKey="blindbox"
              onClick={() => {
                changeSelectedTab('blindbox');
              }}
            >
              Blindbox
            </NavLink>
          </NavItem>
          <NavItem className={`pointer tabs-space ${selectedTab === "cardlist" ? 'tabs-border' : ''}`}>
            <NavLink
              eventKey="cardlist"
              onClick={() => {
                changeSelectedTab('cardlist');
              }}
            >
              NFT List
            </NavLink>
          </NavItem>
          <NavItem className={`pointer tabs-space ${selectedTab === "nft" ? 'tabs-border' : ''}`}>
            <NavLink
              eventKey="nft"
              onClick={() => {
                changeSelectedTab('nft');
              }}
            >
              NFT Detail
            </NavLink>
          </NavItem>

          <NavItem className={`pointer tabs-space ${selectedTab === "rarity" ? 'tabs-border' : ''}`}>
            <NavLink
              eventKey="rarity"
              onClick={() => {
                changeSelectedTab('rarity');
              }}
            >
              Rarity
            </NavLink>
          </NavItem>
          <NavItem className={`pointer tabs-space ${selectedTab === "filters" ? 'tabs-border' : ''}`}>
            <NavLink
              eventKey="filters"
              onClick={() => {
                changeSelectedTab('filters');
              }}
            >
              Filters
            </NavLink>
          </NavItem>
        </Nav>
      </Header> */}
      {/* {selectedTab === "blindbox" ? <BlindBox /> : selectedTab === "cardlist" ? <CardList /> : selectedTab === "nft" ? <NFTPage /> :selectedTab === "collection"? <Collection />:selectedTab === "rarity"? <Rarity />:selectedTab === "filters"? <Filters />: <BlindBox />} */}
    </Container>
  );
    }

export default Store;
