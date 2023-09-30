import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import HeaderTitle from '../../components/HeaderTitle';
import Header from '../../components/Header';
const NftDuel = () => {
    return(
        <>
       <Container fluid>
                <Header>
                    <HeaderTitle><FormattedMessage id="NFT Duel" /></HeaderTitle>
                </Header>
            </Container>
        </>
    )
}

export default NftDuel;