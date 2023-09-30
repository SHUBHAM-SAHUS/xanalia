import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeaderTitle from '../../components/HeaderTitle';
import {useHistory, useLocation} from "react-router-dom"
import { Container, Nav, NavItem, NavLink, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

function NavTabs() {
    const intl = useIntl();
    const history = useHistory();
    const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location?.pathname.split('/')[1]);

  const changeSelectedTab = (tab) => {
    // setSelectedTab(tab);
    history.push(`/${tab}`);
  }

  console.log('selectedTab', selectedTab);
  
  return (
    <Container fluid className="blindBoxTabUI">
      <Header>
        <HeaderTitle>
          <FormattedMessage id={intl.formatMessage({id:selectedTab.charAt(0).toUpperCase()+selectedTab.slice(1)})} />
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
            <FormattedMessage id={intl.formatMessage({id:selectedTab})} />
          </BreadcrumbItem>
        </Breadcrumb>
        <Nav className="tabs-center" variant="tabs" >

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
              List
            </NavLink>
          </NavItem>
          <NavItem className={`pointer tabs-space ${selectedTab === "NFTPage" ? 'tabs-border' : ''}`}>
            <NavLink
              eventKey="nft"
              onClick={() => {
                changeSelectedTab('NFTPage');
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
      </Header>
    </Container>
  );
}

export default NavTabs;
