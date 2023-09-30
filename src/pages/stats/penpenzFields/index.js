import React from 'react';
import { 
    Card,
    CardBody,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Label,
    Row,
    Col,
} from 'reactstrap';
import { PlusCircle, MinusCircle } from 'react-feather';
import { FormattedMessage } from 'react-intl';

const PenpenzFileds = () => {
    return (
        <Row className="penpenz-fields">
        <Col sm={6}>
          <Card>
            <CardBody>
              <Label className="font-weight-bold">
                <FormattedMessage id="Series Name" />
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
                      <Input placeholder="11/07/2021, 12:09:27 AM" disabled/>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <Label className="font-weight-bold">
                    <FormattedMessage id="Close time" />
                  </Label>
                  <FormGroup className="">
                    <InputGroup>
                      <Input placeholder="12/16/2021, 13:45:34 PM" disabled/>
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
                {/* <Col>
                  <Label className="font-weight-bold">
                    <FormattedMessage id="Box Name" />
                  </Label>
                  <FormGroup className="">
                    <InputGroup>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col> */}
                <Col>
                  <Label className="font-weight-bold">
                    <FormattedMessage id="Box Price" />
                  </Label>
                  <FormGroup className="">
                    <InputGroup>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <Label className="font-weight-bold">
                    <FormattedMessage id="Include Item" />
                  </Label>
                  <FormGroup className="">
                    <InputGroup>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <Label className="font-weight-bold">
                    <FormattedMessage id="Suppy of Box" />
                  </Label>
                  <FormGroup className="">
                    <InputGroup>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <Label className="font-weight-bold">
                    <FormattedMessage id="Already Solid" />
                  </Label>
                  <FormGroup className="">
                    <InputGroup>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col>
                {/* <Col className="replica_sec text-right" >
                <Label className="font-weight-bold">
                  </Label>
                  <FormGroup className="mb-2  mb-sm-0 text-right">
                    
                      <MinusCircle className="repeter_icon"/>
                      <PlusCircle className="repeter_icon"/>
                   
                  </FormGroup>
                 
                </Col> */}
              </Row>
            </CardBody>
          </Card>
        </Col>
        {/* <Col sm={6}>
         <Card>
            <CardBody>
              <Row>
                <Col>
                  <Label className="font-weight-bold">
                    <FormattedMessage id="Box Price" />
                  </Label>
                  <FormGroup className="">
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>$</InputGroupText>
                      </InputGroupAddon>

                      <Input />
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>.00</InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col>
                  <Label className="font-weight-bold">
                    <FormattedMessage id="Include Item" />
                  </Label>
                  <FormGroup className="">
                    <InputGroup>
                      <Input />
                    </InputGroup>
                  </FormGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
          
        </Col> */}
      </Row>
    );
}

export default PenpenzFileds;
