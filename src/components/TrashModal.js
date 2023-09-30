import React from 'react';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter
} from 'reactstrap';

const TrashModal = (props) => {
  return (
    <React.Fragment key={props.openModals} >
      <Modal isOpen={props.openModals} centered size="sm">
        <div className="modal-header">
          <button type="button" className="close" onClick={props.close} aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <ModalBody className="text-center">
          <div className="remove-user-warning"></div>
          <h2>{props?.heading}</h2>
          <p className="mb-0">
            {props?.info}
          </p>
        </ModalBody>
        <ModalFooter className={props?.deleteMessage ? 'justify-content-center' : ''}>
          <Button color="secondary" onClick={props.close}>
            Cancel
          </Button>{' '}
          {props?.isScanrioStatus ? <Button color="primary" onClick={props.getEnable}>
            {props.button}
          </Button> : props?.deleteMessage ?
            <>
              <Button color="danger" onClick={() => props.deletedMessage('DELETE_FOR_EVERYONE')}>
                Delete for everyone
              </Button>
              <Button color="danger" onClick={() => props.deletedMessage('DELETE_FOR_ME')}>
                Delete for me
              </Button>
            </> :
            <Button color="primary" onClick={props.heading == "Unsend" ? props.unsendMessage : (props.action == "remvoe_sub_chat" ? props.removeSubChat : props.getDelete)}>
              Sure
            </Button>
          }

        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default TrashModal;
