import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import HeaderTitle from '../../components/HeaderTitle';
import Header from '../../components/Header';
const BlindBoxComponent = () => {
    return(
        <>
        <Container fluid>
                <Header>
                    <HeaderTitle><FormattedMessage id="BlindBox" /></HeaderTitle>
                </Header>
            </Container>
        </>
    )
}

export default BlindBoxComponent;