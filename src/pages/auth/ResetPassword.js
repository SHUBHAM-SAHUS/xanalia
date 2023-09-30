import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Button, Card, CardBody, Form, FormGroup, Label, Input , Spinner } from 'reactstrap';
import { toastr } from "react-redux-toastr";
import {useHistory} from "react-router-dom"
import { forgetPassAction , getforgetOtpAction } from '../../redux/actions/authAction'
function ResetPassword() {
  const [isOtpSent, setOtpSent] = useState(false);
  const [loaderFor, setLoader] = useState("")
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
  }, [formValue, isOtpSent]);
  const [formValue, setFormValue] = useState({
    username: '',
    rePassword: '',
    password: '',
    otp: ''
  });
  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });

  };
  
  const handleOPT = () => {
    setLoader("reset")
    if (formValue.username) {
      dispatch(forgetPassAction({ userName: formValue.username })).then((res) => {
        if(res.success) {
          toastr.success('Reset Password', 'An OPT confirmatin code has been sent to your email address');
          setOtpSent(true)
          setLoader("")
        } else {
          setLoader("")
        }
      }).catch((err) => {
          toastr.error('Reset Password', "Soemthing went wrong.")
          setLoader("")
      })
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoader("reset-pass")
    if (!formValue.username || !formValue.otp || !formValue.password || !formValue.rePassword) {
      setLoader("")
      toastr.info('Error', 'Please fill information');
      return;
    } else {
      const data = {
        otp: formValue.otp,
        userName: formValue.username,
        password: formValue.password,
      };
  
      dispatch(getforgetOtpAction(data)).then(res => {
        if(res.success) {
          setLoader("")
          history.push("/")
        } else {
          setLoader("")
        }
      }).catch(err => {
        setLoader("")
        console.log("err",err)
      })
    }
  }

  return (
    < React.Fragment >
      <div className="text-center mt-4">
        <h1 className="h2">Reset password</h1>
        <p className="lead">Enter your email to reset your password.</p>
      </div>

      <Card>
        <CardBody>
          <div className="m-sm-4">
            {!isOtpSent &&
              <Form>
                <FormGroup>
                  <Label>Email</Label>
                  <Input bsSize="lg" type="email" name="username" value={formValue.username} onChange={onChange} placeholder="Enter your email" />
                </FormGroup>
                <div className="text-center mt-3">
                  <Button className="reset-pass-btn" color="primary" size="lg" onClick={handleOPT}>
                  {
                    loaderFor === "reset" ? <Spinner color="light" />  : 'Reset password'
                  }  
                  </Button>
                </div>
              </Form>
            }
            <div>

              {isOtpSent &&
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label>Enter you authentication code</Label>
                    <Input bsSize="lg" type="text" name="otp" value={formValue.otp} onChange={onChange} placeholder="Authencation code" />
                  </FormGroup>
                  <FormGroup>
                    <Label>New login pass
                      word</Label>
                    <Input bsSize="lg" type="password" name="password" value={formValue.password} onChange={onChange} placeholder="Enter your password" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Re-enter password</Label>
                    <Input bsSize="lg" type="password" name="rePassword" value={formValue.rePassword} onChange={onChange} placeholder="Re enter password" />
                  </FormGroup>
                  <div className="text-center mt-3">
                    <Button className="reset-pass-btn" color="primary" size="lg">
                    {
                      loaderFor === "reset-pass" ? <Spinner color="light" />  : 'Reset password'
                    }  
                    </Button>
                  </div>
                </Form>
              }
            </div>
          </div>
        </CardBody>
      </Card>
    </React.Fragment >
  );
}

export default ResetPassword;
