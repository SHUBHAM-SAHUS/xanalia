import React from 'react';
import { Container, Card, Col, Row } from 'reactstrap';
import Input from 'reactstrap/lib/Input';
import { FormattedMessage } from 'react-intl';
import HeaderTitle from '../../components/HeaderTitle';
import Header from '../../components/Header';
import CardBody from 'reactstrap/lib/CardBody';
import Label from 'reactstrap/lib/Label';
import Button from 'reactstrap/lib/Button';
import NavTabs from '../../pages/stats/NavTabs';

const Rarity = () => {
    return(
        <>
        <Container fluid>
            <NavTabs />
                <Col sm={12}>
                <Card>
                    <CardBody className="rarity_sec">
                        <Row>
                        <Col>
                        <label for="name">Rarity Name</label>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <label for="name">Allocation</label>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <label for="name">Total NFTs</label>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col md={3}>
                            <div className="action-btn">
                                <Button className="edit_btn" outline color="primary">Edit</Button>
                                <Button className="edit_btn" outline color="primary">Delete</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col md={3}>
                        <div className="action-btn_save">
                                <Button className="save_btn" color="primary">Save</Button>
                                <Button className="edit_btn" outline color="primary">Cancel</Button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                    </Row>
                    <Row>
                    <Col>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <Input type="text" className="form-control"> </Input> 
                        </Col>
                        <Col md={3}>
                            
                        </Col>
                    </Row>
                        
                    </CardBody>
                </Card>
                </Col>
                
                <div className="action-btn_save bottom_btn">
                                <Button color="primary" className="edit_btn" outline>Cancel</Button>
                                <Button color="primary" className="save_btn">Save</Button>
                
                </div>
            </Container>
        </>
    )
}

export default Rarity;