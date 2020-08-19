import React, { useState } from 'react';

import Container from '../../assets/styles/Container';
import Input from '../../components/Input';
import { Main, RightSide, Title, Subtitle } from './styles.js';
import Button from '../../assets/styles/Button';

export default function Login() {
    const [inputValue, setInputValue] = useState({ email: '', password: '' });

    function updateValue(event) {
        const { id: name, value } = event.target;

        setInputValue(state => ( {...state, [name]: value } ));
    }

    return (
        <Container>
            <Main>
                <RightSide>
                    <Title>Seja bem vindo!</Title>
                    <Subtitle>Para continuar, faça logon abaixo: </Subtitle>
                    <Input 
                        name="email" 
                        label="Digite seu email:" 
                        type="email" 
                        value={inputValue.email}
                        onChange={updateValue}
                    />
                    <Input 
                        name="password" 
                        label="Digite sua senha:" 
                        type="password" 
                        value={inputValue.password} 
                        onChange={updateValue} 
                    />
                    <Button>Entrar</Button>
                </RightSide>
            </Main>
        </Container>
    );
}