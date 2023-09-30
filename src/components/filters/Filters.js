import React from 'react';
import { Container, Row, Col, Input, Button, CardBody, Card } from 'reactstrap';
import NavTabs from '../../pages/stats/NavTabs';

const Filters = () => {
    return(
        <>
        <Container fluid>
            <NavTabs />
                <Col sm={12}>
                <Card>
                    <CardBody className="rarity_sec">
                        <Row>
                        <Col>
                        <label for="name">Trait name</label>
                        <Input type="text" placeholder="Attack" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <label for="name">Type</label><br/>
                        <select class="form-select" aria-label="Number">
                            <option selected>Number</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        </Col>
                        <Col>
                        <label for="name">Value</label>
                            <div className="two_value">
                                <Input type="text" placeholder="Number" className="form-control"> </Input>
                                <span className="to_number">to</span> 
                                <Input type="text" placeholder="Number" className="form-control"> </Input>  
                            </div>
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
                        <Input type="text" placeholder="Mouth" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <select class="form-select" aria-label="Text">
                            <option selected>Text</option>
                            <option value="1">Text</option>
                            <option value="2">Text</option>
                            <option value="3">Text</option>
                        </select> 
                        </Col>
                        <Col>
                        <Input type="text" placeholder="Sexy Lip" className="form-control"> </Input> 
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
                        <Input type="text" placeholder="Mouth" className="form-control"> </Input> 
                        </Col>
                        <Col>
                        <select class="form-select" aria-label="Text">
                            <option selected>Text</option>
                            <option value="1">Text</option>
                            <option value="2">Text</option>
                            <option value="3">Text</option>
                        </select>  
                        </Col>
                        <Col>
                        <Input type="text" placeholder="Fat Lip" className="form-control"> </Input> 
                        </Col>
                        <Col md={3}>
                        <div className="action-btn_save">
                                <Button className="save_btn" color="primary">Save</Button>
                                {/* <Button className="edit_btn">Cancel</Button> */}
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
                                {/* <Button className="edit_btn">Cancel</Button> */}
                            </div>
                        </Col>
                    </Row>
                        
                    </CardBody>
                </Card>
                </Col>

                <div className="action-btn_save bottom_btn">
                                <Button className="edit_btn" outline color="primary">Cancel</Button>
                                <Button className="save_btn" color="primary">Save</Button>
                
                </div>
                
            </Container>
        </>
    )
}

export default Filters;