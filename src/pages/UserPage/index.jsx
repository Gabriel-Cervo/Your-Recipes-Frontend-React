import React from 'react';

import Container from '../../assets/styles/Container';

import { Main, Menu, Bold, MenuButton, Divider, RecipesContainer, Footer , Image} from './styles';

import Recipe from '../../components/Recipe';

export default function UserPage() {
    const username = localStorage.getItem('username');

    return (
        <Container>
            <Main>
                <Menu>
                    <Image src="./svg/polaroid.svg" alt="Menu illustration" />
                    <h1>Seja bem vindo/a, <Bold>{username}</Bold>! </h1>
                    <h5>Total de receitas salvas: <Bold>10</Bold></h5>
                    <Divider />
                    <p>Menu: </p>
                    <ul>
                        <li><MenuButton onClick={() => console.log('Clickado')}>Cadastrar nova receita</MenuButton></li>
                        <li><MenuButton onClick={() => console.log('Clickado')}>Fazer logout</MenuButton></li>
                    </ul>
                </Menu>
                <RecipesContainer>
                    <h1>Suas receitas: </h1>
                    <Recipe 
                        img="https://upload-imagens.s3.amazonaws.com/1d993ecfa0b03780ed42c9a5986dc811-56052678.jpg"
                        name="gamba"
                        id="5f398d3cd4fdc5231037f260"
                        createdAt="2020-08-16T19:47:08.508Z"
                    />
                </RecipesContainer>

          
            </Main>
            <Footer>
                <p>Feito por João Gabriel Cervo / 2020</p>
            </Footer>
        </Container>
    );
}