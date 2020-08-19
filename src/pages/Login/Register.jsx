import React, { useState } from 'react';
import { Link }  from 'react-router-dom';
import Container from '../../assets/styles/Container';
import Input from '../../components/Input';
import { Main, Form, Title, Subtitle } from './styles.js';
import Button from '../../assets/styles/Button';

export default function Login() {
    const [inputValue, setInputValue] = useState({ name: '', email: '', password: '' });

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
                    <Title>Seja bem vindo!</Title>
                    <Subtitle>Para criar sua conta, preencha o formulário abaixo: </Subtitle>
                    <Input 
                        name="name" 
                        label="Digite seu nome:" 
                        type="text" 
                        value={inputValue.name}
                        onChange={updateValue}
                    />
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
                    <Button type="submit">Criar conta</Button>
                    <span>Já possui conta? <Link to="/login">Ir para o login</Link></span>
                </Form>
            </Main>
        </Container>
    );
}