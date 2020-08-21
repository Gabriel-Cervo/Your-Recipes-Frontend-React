import React from 'react';

import Container from '../../assets/styles/Container';
import Main from './styles';

export default function PaceNotFound() {
    return (
        <Container> 
            <Main>
                <h1>Página não encontrada!</h1>
                <h5>Verifique a URL e pesquise novamente...</h5>
            </Main>
        </Container>
    );
}