import React, { useState, useEffect } from 'react';
import { Redirect }  from 'react-router-dom';

import Container from '../../assets/styles/Container';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import { Main, ImageContainer, Form, TitleContainer, Title, Subtitle, EmptyFieldWarning, ApiError, TimerProgress, Steps } from './styles.js';

import Button from '../../assets/styles/Button';

import api from '../../services/api';

export default function Login() {
    const [inputValue, setInputValue] = useState({ name: '', description: '', submited: false });
    const [steps, setSteps] = useState(['']);
    const [showWarning, setShowWarning] = useState({ name: false, description: false });
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

    function updateStepValue(e, posicao) {
        const { value } = e.target;

        setSteps(state => state.map((item, index) => index === posicao ? value : item));
    }

    function addStep() {
        setSteps(state => [...state, '']);
    }

    function deleteStep(posicao) {
        setSteps(state => state.filter((item, index) => index !== posicao));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setInputValue(state => ({ ...state, submited: true }));
        
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
                        <img src="./svg/cooking.svg" alt="Personal Info"/>
                    </ImageContainer>
                    <TitleContainer>
                        <Title>Que bom que você quer cozinhar!</Title>
                        <Subtitle>Para salvar a receita, preencha o formulário abaixo: </Subtitle>
                    </TitleContainer>
                    <Form onSubmit={handleSubmit}>
                        <Input 
                            name="name" 
                            label="Nome da receita:" 
                            type="text" 
                            value={inputValue.name}
                            onChange={updateValue}
                            showWarning={showWarning.name}
                        />
                        {showWarning.name && <EmptyFieldWarning>A receita precisa ter um nome!</EmptyFieldWarning>}
                        <Textarea 
                            label="Descrição da receita"
                            name="description"
                            value={inputValue.description}
                            onChange={updateValue}
                            showWarning={showWarning.description}
                        />
                        {showWarning.description && <EmptyFieldWarning>Qual é? Não tem nada para falar sobre a receita?</EmptyFieldWarning>}
                        <Steps>
                            <div className="top">
                                <p>Digite aqui o passo a passo para realizar a receita</p>
                                <Button onClick={addStep}>+</Button>
                            </div>
                            {steps.map((item, index) => <li key={index}><Input 
                                label={`Passo ${index + 1}`}
                                name="step"
                                value={item}
                                onChange={(e) => updateStepValue(e, index)}
                            /><Button onClick={() => deleteStep(index)} disabled={index === 0}>-</Button></li>)}
                        </Steps>

                        <Button 
                            type="submit" 
                            disabled={inputValue.name === '' || inputValue.description === '' || steps === null || inputValue.submited}
                        >Cadastrar nova receita</Button>
                    </Form>
                </Main>
            </Container>
        </>
    );
}