import React, { useState } from 'react';
import { Button, ModalBody, Row, Col } from 'react-bootstrap';
import Close from '../../assets/img/photos/close.png';
import {
    Modal
} from 'reactstrap';
const NftModal = (props) => {
    console.log("yhufd",props);
    return (
        <React.Fragment>
            <Modal
                className="nftlist_modal"
                isOpen={props.addTagModal}
                size='md'
                centered>
                <div className="modal-header">
                    <button type="button" className="close" aria-label="close" onClick={props.close}><span aria-hidden="true" style={{ textAlign: "left" }}><img src={Close} /></span></button>
                </div>
               <ModalBody>
                   <Row>
                        <Col md="12">
                            <Button className="white_btn">NFT's</Button>
                        </Col>  
                        <Col md="12">
                             <Button className="white_btn">Blindbox</Button>
                        </Col>  
                   
                   </Row>
               </ModalBody>
            </Modal>
        </React.Fragment>
    );
};

export default NftModal;
