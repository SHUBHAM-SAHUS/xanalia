import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import HeaderTitle from '../../components/HeaderTitle';
import Header from '../../components/Header';

const Settings = () => {
    return(
        <>
        <Container fluid>
                <Header>
                    <HeaderTitle><FormattedMessage id="Settings" /></HeaderTitle>
                </Header>
            </Container>
        </>
    )
}

export default Settings;