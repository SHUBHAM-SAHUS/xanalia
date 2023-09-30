import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import HeaderTitle from '../../components/HeaderTitle';
import Header from '../../components/Header';

const MyBlindBox = () => {
    return(
        <>
        <Container fluid>
                <Header>
                    <HeaderTitle><FormattedMessage id="My Blind Box" /></HeaderTitle>
                </Header>
            </Container>
        </>
    )
}

export default MyBlindBox;