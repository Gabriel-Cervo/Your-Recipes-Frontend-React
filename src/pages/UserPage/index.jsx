import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import Container from '../../assets/styles/Container';

import { Main, Menu, Bold, MenuButton, Divider, RecipesContainer, Footer , Image, Title, PaginationButtons } from './styles';

import Recipe from '../../components/Recipe';

import { IconContext } from 'react-icons';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

import convertTimestampToDate from '../../utils/convertTimestampToDate';

import api from '../../services/api';

export default function UserPage() {
    const [redirectUser, setRedirectUser] = useState(false);
    const [recipes, setRecipes] = useState([{}]);
    const [numberOfRecipes, setNumberOfRecipes] = useState('')
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [pages, setPages] = useState({ actual: 1 });

    const username = localStorage.getItem('username');
    const jwt = localStorage.getItem('jwt');
    
    function logoutUser() {
        localStorage.clear();
        setRedirectUser(true);
    }   

    function updatePage(value) {
        setPages(state => ({ ...state, actual: state.actual + value }));
    }

    async function deletePost(id) {
        try {
            await api.delete(`/recipes/${id}`, {
                headers: { 'Authorization': `Bearer ${jwt}` }
            });
            setRecipes(state => state.filter(item => item._id !== id));
            setNumberOfRecipes(state => state - 1);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const res = await api.get('/recipes', {
                    params: {
                        page: pages.actual,
                        limit: 4
                    },
                    headers: { 'Authorization': `Bearer ${jwt}` },
                });

                setRecipes(res.data.recipes);
                setNumberOfRecipes(state => state === '' ? res.data.total : state);
                setPages(state => ({ ...state, hasPrevious: res.data.previous !== undefined, hasNext: res.data.next !== undefined }));
                setLoading(false);
            } catch (err) {
                setLoading(false);
                setError(true);
                console.log(err);
            }
        }

        fetchData();
    }, [pages.actual, jwt]);

    return (
        <Container>
        {redirectUser && <Redirect to="/login" />}
            <Main>
                <Menu>
                    <Image src="./svg/polaroid.svg" alt="Menu illustration" />
                    <h1>Seja bem vindo/a, <Bold>{username}</Bold>! </h1>
                    <h5>Total de receitas salvas: <Bold>{numberOfRecipes}</Bold></h5>
                    <Divider />
                    <p>Menu: </p>
                    <ul>
                        <li><Link to="/newRecipe"><MenuButton>Cadastrar nova receita</MenuButton></Link></li>
                        <li><MenuButton onClick={() => logoutUser()}>Fazer logout</MenuButton></li>
                    </ul>
                </Menu>
                <Title>Suas receitas: </Title>
                <RecipesContainer>
                {loading ? <p>Carregando...</p> : error ? <p>Algo deu errado, verifique sua conexão e tente novamente.</p> : (recipes.map(item => 
                <Recipe 
                    key={item._id}
                    img={item.img}
                    name={item.name}
                    id={item._id}
                    createdAt={convertTimestampToDate(item.createdAt)}
                    updatedAt={convertTimestampToDate(item.updatedAt)}
                    onDelete={deletePost}
                />
                ))}
                </RecipesContainer>
                <PaginationButtons>
                    <IconContext.Provider value={{ className: 'icons' }}>
                        <MenuButton disabled={!pages.hasPrevious} onClick={() => updatePage(-1)}><FaArrowAltCircleLeft /></MenuButton>
                        <MenuButton disabled={!pages.hasNext}  onClick={() => updatePage(+1)}><FaArrowAltCircleRight /></MenuButton>
                    </IconContext.Provider>
                </PaginationButtons>
            </Main>

            <Footer>
                <p>Feito por João Gabriel Cervo - 2020</p>
            </Footer>
        </Container>
    );
}