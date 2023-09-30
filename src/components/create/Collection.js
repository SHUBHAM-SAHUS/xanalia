import React, { useState } from 'react';
import { Container, FormGroup, InputGroup, Input, Row, Col, Card, CardBody, Label, CardHeader, CardTitle } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import HeaderTitle from '../../components/HeaderTitle';
import Header from '../../components/Header';
import NavTabs from '../../pages/stats/NavTabs';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Button from 'reactstrap/lib/Button';
import { MinusCircle } from 'react-feather';
import PlaceholderImage from '../../assets/img/photos/placeholder.png';
import CardCom from '../../components/CardCom';
const cardsData = [
    {
      id: 1,
      title: 'Banner Image',
      description: 'filefilefilefilefilefilefilefilefilefile.jpg',
      card_link: 'Card Link',
      other_link: 'Another Link',
    },
    {
      id: 2,
      title: 'Icon Image',
      description: 'Some quick example text to build on the card title and make up on bulk of the card content',
      card_link: 'Card Link',
      other_link: 'Another Link',
    },
   
    
  ];

const Collection = () => {
    const [text, setText] = useState('');
    const handleChange = (value) => setText(value);

 
    return (
        <>
            <Container fluid>
            <div className="add_new">
                <Button color="primary">Create New blind box collection</Button>
            </div>
                <NavTabs />
                
                <Row className="penpenz-fields">
                    <Col sm="12">
                    <span className="time_zone text-right mb-2">Time zone : Dubai time (UTC + 4:00) </span>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <CardBody>
                                <Label className="font-weight-bold">
                                    <FormattedMessage id="Collection Name" />
                                </Label>
                                <FormGroup className="">
                                    <InputGroup>
                                        <Input />
                                    </InputGroup>
                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={6}>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col>
                                        <Label className="font-weight-bold">
                                            <FormattedMessage id="Open time" />
                                        </Label>
                                        <FormGroup className="">
                                            <InputGroup>
                                                <Input placeholder="11/07/2021, 12:09:27 AM" disabled />
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <Label className="font-weight-bold">
                                            <FormattedMessage id="Close time" />
                                        </Label>
                                        <FormGroup className="">
                                            <InputGroup>
                                                <Input placeholder="12/16/2021, 13:45:34 PM" disabled />
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card>
                            <CardBody>
                                <Row>
                                    <Col md={6}>
                                    <Row>
                                    <Col>
                                        <Label className="font-weight-bold">
                                            <FormattedMessage id="Network" />
                                        </Label>
                                        <FormGroup className="nft_rarity">
                                            <InputGroup>
                                            <select class="form-select" aria-label="Default select example">
                                               <option value="1">ETHERIUM</option>
                                               <option value="2">ETHERIUM</option>
                                            </select>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <Label className="font-weight-bold">
                                            <FormattedMessage id="Accept Payment" />
                                        </Label>
                                        <FormGroup className="nft_rarity">
                                            <InputGroup>
                                            <select class="form-select" aria-label="Default select example">
                                               <option value="1">ETH</option>
                                               <option value="2">ETH</option>
                                               <option value="3">ETH</option>
                                            </select>
                                            </InputGroup>
                                        </FormGroup>
                                    </Col>
                                    </Row>
                                    </Col>
                                    <Col>
                                        <div className="collection_section ">
                                            <Button color="primary" className="mr-3">ADD</Button>                
                                            <Button color="primary" className="mr-2" outline>UST</Button>
                                            <MinusCircle className="repeter_icon mr-3"/>
                                            <Button color="primary" className="mr-2" outline>ETH</Button>
                                            <MinusCircle className="repeter_icon"/>
                                        </div>
                                    </Col>
                                    
                               
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm={12}>
                        <Card className="desTxtBox">
                            <CardHeader>
                                <label>
                                    Description
                                </label>
                           
                            </CardHeader>

                            <CardBody>
                            <span className="sot_number">1/150</span>   
                                <ReactQuill value={text} onChange={handleChange} placeholder="Type something" />
                            </CardBody>
                        </Card>
                    </Col>    

                    <Col sm={12}>
                        <Card>
                            <CardBody className="contact_add">
                            <Row>
                                <Col md={10}>
                                    <Label className="font-weight-bold">
                                                    <FormattedMessage id="Contact address" />
                                    </Label>
                                    <FormGroup className="nft_rarity">
                                                    <InputGroup>
                                                    <Input />
                                                    </InputGroup>
                                    </FormGroup> 
                                </Col>
                                <Col>    
                                    <Button className="copy_btn" color="primary" >Copy</Button>
                                </Col>
                            </Row>
                            </CardBody>
                        </Card>
                    </Col> 
                    <Col sm={12}>
                       
                        

                    </Col>
                
                                
                </Row>
                <Row>
                        {
                        cardsData.map((card) => {
                            return (
                            <Col sm="3" key={card.id}>
                                <CardCom  title={card.title} description={card.description} cardLink={card.card_link} otherLink={card.other_link}/>
                            </Col>
                            )
                        })
                        
                        
                        }
                        <Col>
                        <div className="text-right mb-5">
                            <Button className="mr-2" color="primary">Save</Button>
                            <Button className="mr-2" color="primary" outline>Cancel</Button>
                        </div>
                        </Col>
         
                 </Row>
            </Container>
        </>
    )
}

export default Collection;