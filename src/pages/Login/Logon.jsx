import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '../../assets/styles/Container';
import Input from '../../components/Input';
import { Main, ImageContainer, Form, TitleContainer, Title, Subtitle, EmptyFieldWarning, ApiError, TimerProgress } from './styles.js';
import Button from '../../assets/styles/Button';

import api from '../../services/api';

export default function Login() {
    const [inputValue, setInputValue] = useState({ email: '', password: '' });
    const [showWarning, setShowWarning] = useState({ email: false, password: false });
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
                        <img src="./svg/cooking.svg" className="cookImg" alt="login illustration" />
                    </ImageContainer>
                    <TitleContainer>
                        <Title>Bem vindo de volta!</Title>
                        <Subtitle>Para efetuar login, digite suas informações abaixo: </Subtitle>
                    </TitleContainer>
                    <Form onSubmit={handleSubmit}>
                        <Input 
                            name="email" 
                            label="Digite seu email:" 
                            type="email" 
                            value={inputValue.email}
                            onChange={updateValue}
                            showWarning={showWarning.email}
                        />
                        {showWarning.email && <EmptyFieldWarning>O email não pode ser vazio!</EmptyFieldWarning>}
                        <Input 
                            name="password" 
                            label="Digite sua senha:" 
                            type="password" 
                            value={inputValue.password} 
                            onChange={updateValue} 
                            showWarning={showWarning.password}
                        />
                        {showWarning.password && <EmptyFieldWarning>Você precisa preencher sua senha!</EmptyFieldWarning>}

                        <Button 
                            type="submit" 
                            disabled={inputValue.email === '' || inputValue.password === ''}
                        >Efetuar Login</Button>
                        <span>Não possui conta? <Link to="/register">Ir para o cadastro</Link></span>
                    </Form>
                </Main>
            </Container>
        </>
    );
}