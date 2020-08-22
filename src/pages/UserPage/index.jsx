import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import Container from '../../assets/styles/Container';

import { Main, Menu, Bold, MenuButton, Divider, RecipesContainer, Footer , Image, Title, PaginationButtons } from './styles';

import Recipe from '../../components/Recipe';

import { IconContext } from 'react-icons';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import convertTimestampToDate from '../../utils/convertTimestampToDate';

export default function UserPage() {
    const [redirectUser, setRedirectUser] = useState(false);
    const username = localStorage.getItem('username');

    
    function logoutUser() {
        localStorage.clear();
        setRedirectUser(true);
    }   

    return (
        <Container>
        {redirectUser && <Redirect to="/login" />}
            <Main>
                <Menu>
                    <Image src="./svg/polaroid.svg" alt="Menu illustration" />
                    <h1>Seja bem vindo/a, <Bold>{username}</Bold>! </h1>
                    <h5>Total de receitas salvas: <Bold>10</Bold></h5>
                    <Divider />
                    <p>Menu: </p>
                    <ul>
                        <li><MenuButton onClick={() => console.log('Clickado')}>Cadastrar nova receita</MenuButton></li>
                        <li><MenuButton onClick={() => logoutUser()}>Fazer logout</MenuButton></li>
                    </ul>
                </Menu>
                <Title>Suas receitas: </Title>
                <RecipesContainer>
                    <Recipe 
                        img="https://upload-imagens.s3.amazonaws.com/1d993ecfa0b03780ed42c9a5986dc811-56052678.jpg"
                        name="gamba"
                        id="5f398d3cd4fdc5231037f260"
                        createdAt={convertTimestampToDate("2020-08-16T19:47:08.508Z")}
                    />
                    <Recipe 
                        img="https://upload-imagens.s3.amazonaws.com/1d993ecfa0b03780ed42c9a5986dc811-56052678.jpg"
                        name="gamba"
                        id="5f398d3cd4fdc5231037f260"
                        createdAt={convertTimestampToDate("2020-08-16T19:47:08.508Z")}
                    />
                     <Recipe 
                        img="https://upload-imagens.s3.amazonaws.com/1d993ecfa0b03780ed42c9a5986dc811-56052678.jpg"
                        name="gamba"
                        id="5f398d3cd4fdc5231037f260"
                        createdAt={convertTimestampToDate("2020-08-16T19:47:08.508Z")}
                    />
                     <Recipe 
                        img="https://upload-imagens.s3.amazonaws.com/1d993ecfa0b03780ed42c9a5986dc811-56052678.jpg"
                        name="gamba"
                        id="5f398d3cd4fdc5231037f260"
                        createdAt={convertTimestampToDate("2020-08-16T19:47:08.508Z")}
                    />
                </RecipesContainer>
                <PaginationButtons>
                    <IconContext.Provider value={{ className: 'icons' }}>
                        <MenuButton><FaArrowAltCircleLeft /></MenuButton>
                        <MenuButton><FaArrowAltCircleRight /></MenuButton>
                    </IconContext.Provider>
                </PaginationButtons>
            </Main>

            <Footer>
                <p>Feito por João Gabriel Cervo - 2020</p>
            </Footer>
        </Container>
    );
}