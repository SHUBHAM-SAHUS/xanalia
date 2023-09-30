import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import HeaderTitle from '../../components/HeaderTitle';
import Header from '../../components/Header';

const MyCollections = () => {
    return(
        <>
        <Container fluid>
                <Header>
                    <HeaderTitle><FormattedMessage id="My Collection" /></HeaderTitle>
                </Header>
            </Container>
        </>
    )
}

export default MyCollections;