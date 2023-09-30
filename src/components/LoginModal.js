import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  CustomInput,
  Spinner
} from 'reactstrap';

import { toastr } from "react-redux-toastr";
import avatar from "../assets/img/avatars/avatar.jpg";
import { loginAction } from '../redux/actions/authAction'
import {FormattedMessage, useIntl} from "react-intl"
import {useHistory} from "react-router-dom";

const LoginModal = (props) => {
  const [loaderFor , setLoader] = useState("") 
  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    remember_me: false,
  });
  const dispatch = useDispatch();
  const history = useHistory()
  const intl = useIntl()

  useEffect(() => {
  }, [formValue]);

  const onChange = (e) => {
    if (e.target.name === 'remember_me') {
      setFormValue({ ...formValue, [e.target.name]: !formValue.remember_me });
    } else {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader("signin")
    if (!formValue.email || !formValue.password) {
      setLoader("")
      toastr.info('Error', 'Please fill information');
      return;
    }

    const data = {
      userName: formValue.email,
      password: formValue.password,
      deviceName: "Iphone",
      deviceVersion: "12",
      deviceOS: "iOS",
      appVersion: "2.0.0"
      // rememberMe: formValue.remember_me,
    };
    
    dispatch(loginAction(data)).then(res => {

      if(res?.success) {
        setLoader("")
        history.push("/dashboard")
      }else {
        setLoader("")
      }
    }).catch(err => {
      setLoader("")
      console.log("err",err)
    })
  };
  return (
    <React.Fragment key={props.openModals} >
      <Modal isOpen={props.openModals} centered size="md">
        <div className="modal-header">
          <button type="button" className="close" onClick={props.close} aria-label="Close"><span aria-hidden="true">×</span></button>
        </div>
        <ModalBody className="text-center">

          <Card>
            <CardBody>
              <div className="m-sm-4">
                <div className="text-center">
                  <img
                    src={avatar}
                    alt="Linda Miller"
                    className="img-fluid rounded-circle"
                    width="132"
                    height="132"
                  />
                </div>

                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label><FormattedMessage id="email" /></Label>
                    <Input
                      bsSize="lg"
                      type="text"
                      name="email"
                      placeholder={intl.formatMessage({ id: 'enterEmail' })}
                      onChange={onChange}
                    />

                  </FormGroup>
                  <FormGroup>
                    <Label><FormattedMessage id="password" /></Label>
                    <Input
                      bsSize="lg"
                      type="password"
                      name="password"
                      placeholder={intl.formatMessage({ id: 'enterPassword' })}
                      onChange={onChange}
                    />
                    <small>
                      <Link to="/auth/reset-password"><FormattedMessage id="forgotPass" /></Link>
                    </small>
                  </FormGroup>
                  <div>
                    <CustomInput
                      type="checkbox"
                      id="rememberMe"
                      label={intl.formatMessage({ id: 'remNextTime' })}
                      defaultChecked
                      name="remember_me"
                      onChange={onChange}
                    />
                  </div>
                  <div className="text-center mt-3">
                    <Button className="signin-btn" type="submit" color="primary" disabled={!formValue.email || !formValue.password} size="lg">
                      {
                        loaderFor === "signin" ? <Spinner color="light" /> : <FormattedMessage id="signIn" />
                      }
                    </Button>
                  </div>
                </Form>
              </div>
            </CardBody>
          </Card>

        </ModalBody>
        <ModalFooter className={props?.deleteMessage ? 'justify-content-center' : ''}>
          {/* <Button color="secondary" onClick={props.close}>
            Cancel
          </Button>{' '}
          {props?.isScanrioStatus ?
            <Button color="primary" onClick={props.getEnable}>
              Enable
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
          } */}

        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default LoginModal;
