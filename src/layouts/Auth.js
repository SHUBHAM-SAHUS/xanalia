import React, { useEffect } from 'react';

import { Col, Container, Row } from 'reactstrap';
import {useSelector,shallowEqual} from "react-redux";
import {useHistory} from "react-router-dom"
import Main from '../components/Main';

const Auth = ({ children }) => {
  const history = useHistory();

  const {  token } = useSelector(
    (state) => ({
      token: state.auth.user.token,
    }), shallowEqual
  );

  useEffect(() => {
    if (token) {
      // history.push('/dashboard');
    }
  }, [token]);

  return(
  <React.Fragment>
    <Main className="h-100 w-100">
      <Container className="h-100">
        <Row className="h-100">
          <Col sm="10" md="8" lg="6" className="mx-auto d-table h-100">
            <div className="d-table-cell align-middle">{children}</div>
          </Col>
        </Row>
      </Container>
    </Main>
  </React.Fragment>
)};

export default Auth;
