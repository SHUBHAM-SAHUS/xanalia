import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { toastr } from "react-redux-toastr";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback
} from "reactstrap";
import { checkEmailExist } from '../../redux/actions/authAction'
import { checkUsernameExist } from '../../redux/actions/authAction';


function SignUp() {

  const [formValue, setFormValue] = useState({
    email: '',
    password: '',
    username: '',
    isEmailInvalid: false,
    isPasswordInvalid: false,
    isUsernameExist: false,
    isUsernameNotExist: false,
    errorMessage: '',
    suggestionsList: []
  });
  const dispatch = useDispatch();
  useEffect(() => {
  }, [formValue]);
  const onChange = (e) => {
    if (e.target.name === "email") {
      if (!checkEmail(e.target.value)) {
        return;
      }
    }
    if (e.target.name === "password") {
      if (!checkPassword(e.target.value)) {
        return;
      }
    }
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  const checkPassword = (data) => {
    var passwordPattern = new RegExp("(?=.{8,})(?=.*[0-9])");
    if (!passwordPattern.test(data)) {
      setFormValue({ ...formValue, isPasswordInvalid: true });
      return false;
    }
    setFormValue({ ...formValue, isPasswordInvalid: false });
    return true;
  }
  const checkEmail = (data) => {
    dispatch(checkEmailExist(data)).then((response) => {
      if (response.status) {
        setFormValue({ ...formValue, isEmailInvalid: true });
        setFormValue({ ...formValue, errorMessage: 'Email is already registered' });
        return;
      } else {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(data)) {
          setFormValue({ ...formValue, isEmailInvalid: true });
          setFormValue({ ...formValue, errorMessage: 'Enter a valid address' });
          return false;
        }
        setFormValue({ ...formValue, isEmailInvalid: false });
        setFormValue({ ...formValue, username: data.split('@')[0] });
        checkExistUsername(data.split('@')[0]);
        return true;
      }
    });

  }
  const checkExistUsername = (data) => {
    dispatch(checkUsernameExist(data)).then((res) => {
      if (res.status) {
        setFormValue({ ...formValue, isUsernameExist: true });
      } else {
        if (res.suggestions) {
          setFormValue({ ...formValue, suggestionsList: res.suggestions });
        }
      }
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValue)
    return
    if (!formValue.email || !formValue.password || !formValue.username) {
      toastr.info('Error', 'Please fill information');
      return;
    }
  }
  return (
    <React.Fragment>
      <div className="text-center mt-4">
        <h1 className="h2">Get started</h1>
        <p className="lead">
          Start creating the best possible user experience for you customers.
        </p>
      </div>

      <Card>
        <CardBody>
          <div className="m-sm-4">
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  bsSize="lg"
                  type="email"
                  name="email"
                  value={formValue.username}
                  onChange={onChange}
                  invalid={formValue.isEmailInvalid}
                  placeholder="Enter email (example@gmail.com)"
                />
                <FormFeedback invalid>{formValue.errorMessage}</FormFeedback>

              </FormGroup>


              <FormGroup>
                <Label>Password</Label>
                <Input
                  bsSize="lg"
                  type="password"
                  name="password"
                  onChange={onChange}
                  value={formValue.password}
                  invalid={formValue.isPasswordInvalid}
                  placeholder="Enter password"
                />
                <FormFeedback invalid>Minimum eight characters, at least one letter and one number</FormFeedback>

              </FormGroup>
              <FormGroup>
                <Label>Username</Label>
                <Input
                  bsSize="lg"
                  type="text"
                  name="username"
                  value={formValue.username}
                  placeholder="Username"
                  onChange={onChange}
                />
              </FormGroup>
              <div>

                {/* {formValue.suggestionsList && formValue.suggestionsList.map((ele) => {
                  <div>{ele}</div>
                })} */}
              </div>
              <div className="text-center mt-3">

                <Button type="submit" color="primary" size="lg">
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

export default SignUp;
