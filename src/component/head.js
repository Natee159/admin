import React from 'react';
import { Container } from 'reactstrap';
const Head = (props) => {
    return (
        <div style={{ textAlign: 'left' }}>
            <Container>
            <img width={'18%'}  src={require('../component/logo.png')} alt="picRight"/>
            </Container>
        </div>
    )
}

export default Head
