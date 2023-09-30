import React, { useEffect } from 'react';
import { useSelector , shallowEqual } from 'react-redux';
import { useHistory } from "react-router-dom";
import Wrapper from '../components/Wrapper';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import Navbar from '../components/Navbar';
import Content from '../components/Content';
// import Footer from '../components/Footer';
import { useLocation } from "react-router-dom";

function Dashboard ({ children, props }) {
  const location = useLocation();
  const history = useHistory();
  const currentPath = location.pathname.substr(1,);

  const { sidebar , token } = useSelector(
    (state) => ({
      sidebar: state.sidebar,
      token: state.auth.token,
    }), shallowEqual
  );

  useEffect(() => {
    if (!token) {
      // history.push('/');
    }
  }, [token]);
 
 
  return(
    <React.Fragment>
    <Wrapper>
      {!sidebar.isOnRight && <Sidebar />}
      <Main>
        {!currentPath.includes('replies-chat') && currentPath !== 'chat' && !currentPath.includes('user-info')  ? <Navbar /> : null}
        <Content>{children}</Content>
        {/* <Footer /> */}
      </Main>
      {sidebar.isOnRight && <Sidebar />}
    </Wrapper>
  </React.Fragment>
  )
}
export default Dashboard;
