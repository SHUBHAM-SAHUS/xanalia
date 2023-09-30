import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { FormattedMessage, useIntl } from 'react-intl'
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";

const ProfileSetting = () => {
  const intl = useIntl();
  const history = useHistory();
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle tag="h5" className="mb-0">
            <FormattedMessage id="profileSet" />
          </CardTitle>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem onClick={() => history.push("/Settings")} action active className="pointer">
            <FormattedMessage id="account" />
          </ListGroupItem>
          <ListGroupItem onClick={() => history.push("/channel-information")} action className="pointer">
            <FormattedMessage id="Create Channel" />
          </ListGroupItem>
          <ListGroupItem onClick={() => history.push("/password")} action>
            <FormattedMessage id="password" />
          </ListGroupItem>

          <ListGroupItem onClick={() => history.push("/email-notification")} action className="pointer">
            <FormattedMessage id="emailNot" />
          </ListGroupItem>
          <ListGroupItem onClick={() => history.push("/logout")} action className="pointer">
            <FormattedMessage id="Logout" />
          </ListGroupItem>
        </ListGroup>
      </Card>
    </>
  )
};

export default ProfileSetting;