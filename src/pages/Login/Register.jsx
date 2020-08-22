import React, { useState, useEffect } from 'react';
import { Link, Redirect }  from 'react-router-dom';

import Container from '../../assets/styles/Container';
import Input from '../../components/Input';
import { Main, ImageContainer, Form, TitleContainer, Title, Subtitle, EmptyFieldWarning, ApiError, TimerProgress } from './styles.js';
import Button from '../../assets/styles/Button';

import api from '../../services/api';

export default function Login() {
    const [inputValue, setInputValue] = useState({ name: '', email: '', password: '', submited: false });
    const [showWarning, setShowWarning] = useState({ name: false, email: false, password: false });
    const [apiError, setApiError] = useState({ status: false, message: '' });
    const [redirectUser, setRedirectUser] = useState(false);

    function updateValue(event) {
        const { id: name, value } = event.target;

        setInputValue(state => ({ ...state, [name]: value }));

        if (value === '') {
            setShowWarning(state => ({ ...state, [name] : true }));
        } else {
            setShowWarning(state => ({ ...state, [name] : false }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setInputValue(state => ({ ...state, submited: true }));
        
        api.post('/users/register', {
            name: inputValue.name,
            email: inputValue.email,
            password: inputValue.password
        })
        .then(res => {
            const { accessToken, username } = res.data;

            localStorage.setItem('jwt', accessToken);
            localStorage.setItem('username', username);

            setRedirectUser(true);
        })
        .catch(err => {
            if (err.response === undefined) {
                setApiError({ status: true, message: 'Oops! Algo deu errado! Verifique sua conexão e tente novamente' });
            } else {
                setApiError({ status: true, message: err.response.data.message })
            }
            setInputValue(state => ({ name: '', email: '', password: '', submited: false }));
        });
    }

    useEffect(() => {
        if (apiError.status === true) {
            setTimeout(() => setApiError({ status: false, message: '' }), 5000);
        }
    }, [apiError.status]);

    return (
        <>
            { redirectUser && <Redirect to="/" /> }

            { apiError.status && 
            <ApiError>
                <div className="content">
                    <img src="icons/warning.png" alt="warning" />
                    <p>{apiError.message}</p>
                </div>
                <TimerProgress />
            </ApiError> }

            <Container>
                <Main>
                    <ImageContainer>
                        <img src="./svg/personalInfo.svg" alt="Personal Info"/>
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
                        {showWarning.name && <EmptyFieldWarning>Você precisa de um nome!</EmptyFieldWarning>}
                        <Input 
                            name="email" 
                            label="Digite seu email:" 
                            type="email" 
                            value={inputValue.email}
                            onChange={updateValue}
                            showWarning={showWarning.email}
                        />
                        {showWarning.email && <EmptyFieldWarning>Como vamos te identificar sem um email?</EmptyFieldWarning>}
                        <Input 
                            name="password" 
                            label="Digite sua senha:" 
                            type="password" 
                            value={inputValue.password} 
                            onChange={updateValue} 
                            showWarning={showWarning.password}
                        />
                        {showWarning.password && <EmptyFieldWarning>Você precisa de uma senha para logar!</EmptyFieldWarning>}

                        <Button 
                            type="submit" 
                            disabled={inputValue.email === '' || inputValue.password === '' || inputValue.name === '' || inputValue.submited}
                        >Criar conta</Button>
                        <span>Já possui conta? <Link to="/login">Ir para o login</Link></span>
                    </Form>
                </Main>
            </Container>
        </>
    );
}