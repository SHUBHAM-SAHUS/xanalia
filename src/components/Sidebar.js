import React, { useState } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import { useLocation } from "react-router-dom";
import { Badge, Collapse } from 'reactstrap';
import IosPulse from 'react-ionicons/lib/IosPulse';
import XanaliaLogo from './XanaliaLogo';
import routes from '../routes/index';
import avatar from '../assets/img/avatars/avatar.jpg';
// import SocketHandlers from '../services/socketService';
import { shallowEqual, useSelector } from 'react-redux';
import {
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icon from 'react-feather';

const scenario = <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21V1H15.5V6H10.5V10.5H6V15.5H1V21H21Z" stroke="#1F3E73" stroke-width="1.8"/>
</svg>
const greeting = <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.73293 5.51246C8.40911 4.78651 9.07661 4.05278 9.76352 3.33773C10.5291 2.54064 11.3571 1.80015 12.0773 0.9636C13.218 -0.361595 14.9956 -0.361075 15.9545 1.22168C17.2072 0.527927 18.2529 0.872207 19.132 1.94296C19.8613 2.83144 19.8368 3.76614 19.2776 4.71278C20.9402 6.18129 21.0103 6.95138 19.6722 8.98798C20.2339 9.3629 20.722 9.80636 20.9126 10.4986C21.1605 11.3969 20.8615 12.1639 20.261 12.7808C17.7428 15.3699 15.2083 17.9424 12.6584 20.4998C11.8018 21.3592 10.6825 21.717 9.52637 21.8977C5.26023 22.5655 1.30586 19.9032 0.250441 15.6659C-0.178882 13.9419 -0.0526407 12.249 0.601566 10.5962C1.66874 7.89906 3.00731 5.33851 4.40874 2.81119C4.77367 2.15274 5.41203 1.98086 6.07799 2.30645C7.1881 2.84909 7.71913 3.83987 7.58215 5.10535C7.57244 5.19726 7.58062 5.29073 7.58062 5.38368C7.63122 5.42575 7.68182 5.46936 7.73293 5.51246ZM5.52498 3.59477C5.46314 3.67422 5.40385 3.72719 5.37165 3.79366C4.17364 6.28411 2.94649 8.76106 1.796 11.2738C1.24095 12.4858 1.21591 13.8022 1.50979 15.1004C2.3485 18.8054 5.71971 21.0767 9.42518 20.4443C10.4826 20.2636 11.3893 19.831 12.1672 19.0178C14.437 16.6432 16.7635 14.3251 19.0671 11.9842C19.1872 11.8622 19.316 11.7448 19.4131 11.6057C19.6564 11.2562 19.6472 10.9046 19.3727 10.5718C18.9904 10.1081 18.4762 10.0987 18.0121 10.5666C16.599 11.993 15.1929 13.4268 13.7838 14.8568C13.675 14.9675 13.5687 15.0848 13.446 15.1778C13.1312 15.4161 12.8276 15.3356 12.5659 15.0879C12.3037 14.8402 12.2822 14.537 12.4795 14.2374C12.5725 14.0961 12.7013 13.9772 12.8214 13.8557C14.8076 11.8362 16.7983 9.8209 18.7803 7.79676C19.2945 7.27177 19.3344 6.64241 18.9142 6.21089C18.5365 5.82247 18.0786 5.90763 17.524 6.47053C15.842 8.17843 14.1605 9.88685 12.4785 11.5948C12.3911 11.6835 12.3052 11.7739 12.2153 11.8601C11.8279 12.2303 11.4225 12.2579 11.1164 11.937C10.8363 11.643 10.866 11.238 11.238 10.8563C12.3027 9.76378 13.3765 8.68057 14.4508 7.59788C15.6125 6.42639 16.783 5.26477 17.9396 4.08809C18.4312 3.58802 18.418 3.16222 17.937 2.65904C17.4004 2.0977 16.994 2.09147 16.4415 2.65177C14.2668 4.85766 12.0946 7.06562 9.92094 9.27255C9.81208 9.38315 9.7073 9.50414 9.58055 9.58931C9.26827 9.79909 8.96161 9.76119 8.69686 9.49791C8.43978 9.24243 8.42036 8.93969 8.62071 8.6463C8.75155 8.45469 8.92021 8.28852 9.08274 8.12131C10.8205 6.33708 12.5613 4.55648 14.2985 2.77172C14.7227 2.33605 14.7738 1.86506 14.4493 1.53325C14.1155 1.19208 13.6607 1.23778 13.2277 1.65735C13.1383 1.74407 13.0524 1.83443 12.9656 1.92322C10.6176 4.30826 8.27009 6.69278 5.92159 9.0773C5.81222 9.18791 5.71664 9.35407 5.5858 9.3925C5.34047 9.46468 5.01695 9.56698 4.83244 9.4626C4.64334 9.35563 4.54009 9.02641 4.47927 8.77456C4.44605 8.63695 4.56667 8.45209 4.64027 8.2989C5.09208 7.35434 5.56996 6.42224 5.99979 5.46729C6.36829 4.64891 6.20321 4.03616 5.52498 3.59477Z" fill="#1F3E73"/>
<path d="M21.7985 18.1763C20.9787 20.2313 19.3574 21.6888 17.2177 22.7583C17.0998 22.8175 16.9819 22.8772 16.8605 22.9305C16.5492 23.0668 16.2523 22.9991 16.089 22.7588C15.9198 22.5101 15.9911 22.2803 16.3093 22.1037C16.7569 21.8545 17.2275 21.6341 17.6602 21.367C19.251 20.3855 20.4051 19.1254 20.9246 17.4689C21.0414 17.0968 21.3187 16.9361 21.6391 17.0231C21.9527 17.1082 22.0747 17.3853 21.9544 17.7469C21.9067 17.8912 21.8509 18.0335 21.7985 18.1763Z" fill="#274B7C"/>
<path d="M20.8249 17.3634C19.9238 19.3777 18.3546 20.9065 16.0452 21.916C15.6758 22.0773 15.3029 22.0009 15.1 21.7335C14.9007 21.4712 15.0056 21.1786 15.3589 20.9679C16.0634 20.5496 16.8162 20.1726 17.4542 19.6945C18.5554 18.8687 19.2445 17.8174 19.6327 16.6352C19.6642 16.5399 19.6845 16.4395 19.7363 16.3522C19.8916 16.09 20.1574 15.9488 20.5072 16.0171C20.8333 16.0808 21.0235 16.2891 20.9977 16.5669C20.9725 16.8343 20.885 17.0983 20.8249 17.3634Z" fill="#274B7C"/>
</svg>

const initOpenRoutes = (location) => {
  /* Open collapse element that matches current url */
  const pathName = location.pathname;

  let _routes = {};

  routes.forEach((route, index) => {
    const isActive = pathName.indexOf(route.path) === 0;
    const isOpen = route.open;
    const isHome = route.containsHome && pathName === '/' ? true : false;

    _routes = Object.assign({}, _routes, { [index]: isActive || isOpen || isHome });
  });

  return _routes;
};

const SidebarCategory = withRouter(({ name, badgeColor, badgeText, icon, isOpen, children, onClick, location, to }) => {
  const getSidebarItemClass = (path) => {
    return location.pathname.indexOf(path) !== -1 || (location.pathname === '/' && path === '/dashboard')
      ? 'active'
      : '';
  };
  return (
    <li className={'sidebar-item ' + getSidebarItemClass(to)}>
      <span
        data-toggle="collapse"
        className={'sidebar-link ' + (!isOpen ? 'collapsed' : '')}
        onClick={onClick}
        aria-expanded={isOpen ? 'true' : 'false'}
      >
        {name.props.id == 'scenario' ? <span className="align-middle"> {scenario}</span> : <span className="align-middle">{icon}</span>}{' '}
        <span className="align-middle">{name}</span>
        {badgeColor && badgeText ? (
          <Badge color={badgeColor} size={18} pill className="sidebar-badge">
            {badgeText}
          </Badge>
        ) : null}
      </span>
      <Collapse isOpen={isOpen}>
        <ul id="item" className={'sidebar-dropdown list-unstyled'}>
          {children}
        </ul>
      </Collapse>
    </li>
  );
});

const SidebarItem = withRouter(({ name, badgeColor, badgeText, icon, location, to }) => {
  console.log("Called sidebar item")
  const getSidebarItemClass = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <li className={'sidebar-item ' + getSidebarItemClass(to)}>
      <NavLink to={to} className="sidebar-link" activeClassName="active">
        {icon ? (
          <React.Fragment>
            <span className="align-middle">{icon}</span> 
            <span className="align-middle">{name}</span>
          </React.Fragment>
        ) : name == "Add" ? (
          <React.Fragment>
            <span className="align-middle"><Icon.Plus /></span> 
            {/* <FontAwesomeIcon icon={faPlus} className="plush-icon" /> */}
          </React.Fragment>
        ) : (
          name
        )
        }{' '}
        {badgeColor && badgeText ? (
          <Badge color={badgeColor} size={18} pill className="sidebar-badge">
            {badgeText}
          </Badge>
        ) : null}
      </NavLink>
    </li>
  );
});

const Sidebar = ({ location, sidebar }) => {

  const { 
    //isChatConnected , 
    user 
  } = useSelector(
    (state) => ({
      // isChatConnected: state.connectUsersChat.isChatConnected,
      user: state.auth.user,
    }), shallowEqual
  );

  const [openRoutes, setOpenRoutes] = useState(() => initOpenRoutes(location));

  const toggle = (index) => {
    // Collapse all elements
    Object.keys(openRoutes).forEach(
      (item) => openRoutes[index] || setOpenRoutes((openRoutes) => Object.assign({}, openRoutes, { [item]: false }))
    );

    // Toggle selected element
    setOpenRoutes((openRoutes) => Object.assign({}, openRoutes, { [index]: !openRoutes[index] }));
  };

  const currentPath = location.pathname.substr(1,);

  return (
    <nav className={classNames('sidebar', sidebar.isOpen || 'toggled', !sidebar.isOnRight || 'sidebar-right', currentPath.includes('chat') && 'sidebar-scroll', currentPath.includes('replies-chat') && 'sidebar-scroll' , currentPath.includes('user-info') && 'sidebar-scroll')}>
      {/* {isChatConnected ? <SocketHandlers /> : null} */}
      <div className="sidebar-content">
        <a className={classNames('sidebar-brand', !sidebar.isOnRight || 'text-right')} href="/">
          {sidebar.isOnRight || <XanaliaLogo />}
           {/* <span className="align-middle">Xanalia Dashboard</span> */}
           {/* {' '} */}
          {!sidebar.isOnRight || <XanaliaLogo />}
        </a>

        <div className="sidebar-user">
          <img src={avatar} className="img-fluid rounded-circle mb-2" alt="Linda Miller" />
          <div className="font-weight-bold">{user?.userName}</div>
          {/* <small>Front-end Developer</small> */}
        </div>
        <ul className="sidebar-nav">
          {routes.map((category, index) => {
            return (
              <React.Fragment key={index}>
                {category.header ? <li className="sidebar-header">{category.header}</li> : null}
                {category.children ? (
                  <SidebarCategory
                    name={category.name}
                    badgeColor={category.badgeColor}
                    badgeText={category.badgeText}
                    icon={category.icon}
                    to={category.path}
                    isOpen={openRoutes[index]}
                    onClick={() => toggle(index)}
                  >
                    {category.children.map((route, index) => (
                      <SidebarItem
                        key={index}
                        name={route.name}
                        to={route.path}
                        // icon={route.icon}
                        badgeColor={route.badgeColor}
                        badgeText={route.badgeText}
                      />
                    ))}
                  </SidebarCategory>
                ) : (
                  <SidebarItem
                    name={category.name}
                    to={category.path}
                    icon={category.icon}
                    badgeColor={category.badgeColor}
                    badgeText={category.badgeText}
                  />
                )}
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(
  connect((store) => ({
    sidebar: store.sidebar,
  }))(Sidebar)
);
