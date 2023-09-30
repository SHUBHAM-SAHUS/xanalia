import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer id="footer" className="footer">
    <Container fluid>
      <Row className="text-muted spanned">
        <Col xs={8} className="text-left">
          <ul className="list-inline">
            <li className="list-inline-item">
              <Link to="dashboard" className="text-muted mr-1">
                Support
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="dashboard" className="text-muted mr-1">
                Privacy
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="dashboard" className="text-muted mr-1">
                Terms of Service
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="dashboard" className="text-muted">
                Contact
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={4} className="text-right">
          <p className="mb-0">
            &copy; {new Date().getFullYear()} -{' '}
            <Link to="/" className="text-muted">
              Xanalia Dashboard
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
