import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../assets/styles/Container';
import Input from '../../components/Input';
import { Main, Form, Title, Subtitle } from './styles.js';
import Button from '../../assets/styles/Button';

export default function Login() {
    const [inputValue, setInputValue] = useState({ email: '', password: '' });

    function updateValue(event) {
        const { id: name, value } = event.target;

        setInputValue(state => ( {...state, [name]: value } ));
    }

    function handleSubmit() {
        console.log('enviado');
    }

    return (
        <Container>
            <Main>
                <Form onSubmit={handleSubmit}>
                    <Title>Bem vindo de volta!</Title>
                    <Subtitle>Para efetuar login, digite suas informações abaixo: </Subtitle>
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
                    <Button type="submit">Efetuar Login</Button>
                    <span>Não possui conta? <Link to="/register">Ir para o cadastro</Link></span>
                </Form>
            </Main>
        </Container>
    );
}