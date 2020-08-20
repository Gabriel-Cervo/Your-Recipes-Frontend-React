import React, { useState, useEffect } from 'react';
import { Link }  from 'react-router-dom';

import Container from '../../assets/styles/Container';
import Input from '../../components/Input';
import { Main, ImageContainer, Form, TitleContainer, Title, Subtitle, EmptyFieldWarning, ApiError, TimerProgress } from './styles.js';
import Button from '../../assets/styles/Button';

import api from '../../services/api';

export default function Login() {
    const [inputValue, setInputValue] = useState({ name: '', email: '', password: '' });
    const [showWarning, setShowWarning] = useState({ name: false, email: false, password: false });
    const [apiError, setApiError] = useState({status: true, message: 'Erro', timerProgress: 50});

    function updateValue(event) {
        const { id: name, value } = event.target;

        setInputValue(state => ( {...state, [name]: value } ));

        if (value === '') {
            setShowWarning(state => ({...state, [name] : true}));
        } else {
            setShowWarning(state => ({...state, [name] : false }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('enviado');
    }

    useEffect(() => {
        if (apiError.status === true) {
            setTimeout(() => setApiError({status: false, message:''}), 5000);
        }
    }, [apiError.status]);

    return (
        <>
            {apiError.status && <ApiError><p>{apiError.message}</p><TimerProgress progress={apiError.timerProgress} /></ApiError>}
            <Container>
                <Main>
                    <ImageContainer>
                        <img src="./svg/hey.svg" alt="register illustration"/>
                    </ImageContainer>
                    <TitleContainer>
                        <Title>Seja bem vindo!</Title>
                        <Subtitle>Para criar sua conta, preencha o formulário abaixo: </Subtitle>
                    </TitleContainer>
                    <Form onSubmit={handleSubmit}>
                        <Input 
                            name="name" 
                            label="Digite seu nome:" 
                            type="text" 
                            value={inputValue.name}
                            onChange={updateValue}
                            showWarning={showWarning.name}
                        />
                        {showWarning.name && <EmptyFieldWarning>O nome deve ser preenchido!</EmptyFieldWarning>}
                        <Input 
                            name="email" 
                            label="Digite seu email:" 
                            type="email" 
                            value={inputValue.email}
                            onChange={updateValue}
                            showWarning={showWarning.email}
                        />
                        {showWarning.email && <EmptyFieldWarning>O email deve ser preenchido!</EmptyFieldWarning>}
                        <Input 
                            name="password" 
                            label="Digite sua senha:" 
                            type="password" 
                            value={inputValue.password} 
                            onChange={updateValue} 
                            showWarning={showWarning.password}
                        />
                        {showWarning.password && <EmptyFieldWarning>A senha deve ser preenchida!</EmptyFieldWarning>}

                        <Button 
                            type="submit" 
                            disabled={inputValue.email === '' || inputValue.password === '' || inputValue.name === ''}
                        >Criar conta</Button>
                        <span>Já possui conta? <Link to="/login">Ir para o login</Link></span>
                    </Form>
                </Main>
            </Container>
        </>
    );
}