import React from 'react';
import { Container } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import HeaderTitle from '../../components/HeaderTitle';
import Header from '../../components/Header';

const Pepenz = () => {
    return(
        <>
        <Container fluid>
                <Header>
                    <HeaderTitle><FormattedMessage id="Pepenz" /></HeaderTitle>
                </Header>
            </Container>
        </>
    )
}

export default Pepenz;