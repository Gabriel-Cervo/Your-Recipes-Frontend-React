import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Main, Top, Image, Title, Description, Divider, Content, List } from './styles';
import Button from '../../assets/styles/Button';
import Container from '../../assets/styles/Container';

import api from '../../services/api';

export default function RecipeDetails() {
    const [recipe, setRecipe] = useState({ loading: true });
    const history = useHistory();
    const jwt = localStorage.getItem('jwt');

    if (!jwt) {
        history.push('/');
    }

    const { id } = useParams();

    useEffect(() => {
        async function getData() {
            try {
                const res = await api.get(`/recipe/${id}`, {
                    headers: { 'Authorization': `Bearer ${jwt}` }
                });
                setRecipe({ loading: false, ...res.data });
            } catch (err) {
                console.log(err);
            }
        }

        getData();
    }, [id, jwt]);

    return (
        <Container>
            { recipe.loading ? <p>Loading...</p> : <RecipeInfo recipe={recipe} history={history} /> }
        </Container>
    );
}

function RecipeInfo({ recipe, history }) {
    return (
        <Main>
            <Top>
                <Image src={recipe.img} />
                <Title>{recipe.name}</Title>
                <Divider />
                <Description>{recipe.description}</Description>
            </Top>
            <Content>
                <Title>Como realizar esta receita</Title>
                <Divider />
                <List>
                {console.log(recipe.steps)}
                    {recipe.steps.map((item, index) => <li>{index+1} - {item}</li>)}
                </List>
            </Content>
            <Button onClick={() => history.push('/')}>Voltar</Button>
        </Main>
    );
}