import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import HeaderTitle from '../../components/HeaderTitle';
import Header from '../../components/Header';

const NFT = () => {
    return(
        <>
        <Container fluid>
                <Header>
                    <HeaderTitle><FormattedMessage id="NFT" /></HeaderTitle>
                </Header>
            </Container>
        </>
    )
}

export default NFT;