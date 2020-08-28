import styled from 'styled-components';
import Button from '../../assets/styles/Button';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    padding: 2rem 0;
    border-radius: .5rem;
    margin-top: 2.5rem;
    
    @media (min-width: 1100px) {
        height: 90vh;
        width: 100%;
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
        "content menu"
        "content menu";
        row-gap: 2rem;
        column-gap: 5rem;
        padding: 4rem 5rem;
        align-items: flex-start;
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;

    h1 {
        font: 400 2.5rem Archivo;
        letter-spacing: 1px;
        text-align: center;
    }

    h5 {
        padding-top: .2rem;
        font: 400 1.8rem Poppins;
    }

    p {
        font-size: 2rem;
        letter-spacing: 1px;
    }

    ul {
        list-style-type: none;
        letter-spacing: 1px;
        text-align: center;

        li {
            font: 400 1.4rem Poppins;    
            padding-top: 1rem;    
        }
    }

    @media (min-width: 1100px) { 
        grid-area: menu;
        width: 30rem;
        padding-top: 6rem;
    }
`;

export const Bold = styled.span` 
    font-weight: bold;
`;

export const MenuButton = styled(Button)`
    width: 20rem;

    @media (min-width: 700px) {
        width: 25rem;
    }
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #ccc;
    margin: 2.5rem 0;
`;

export const RecipesContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    @media (min-width: 1100px) {
        grid-area: content;
        flex-direction: row;
        flex-wrap: wrap;
        margin-top: 0;
    }

    p {
        padding-top: 5rem;
    }
`;

export const Image = styled.div`
    width: 16rem;
    height: 16rem;
    border-radius: .4rem;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom: 2rem;

    @media (min-width: 1100px) {
        width: 18rem;
        height: 18rem;
    }
`;

export const Footer = styled.footer`
    display: absolute;
    padding-top: 1rem;
    padding-bottom: 1rem;
    bottom: 0rem;
    opacity: .8;
    
    p {
        color: #f0f0f0;
    }
`;

export const Title = styled.h1`
    font: 400 2rem Archivo;
    
    @media (min-width: 1100px) {
        grid-area: content;
    }

`;

export const PaginationButtons = styled.div`
    padding-top: 2rem;
    display: flex;
    flex-direction: row;
   
    button {
        width: 100%;
    }
    
    button + button {
        margin-left: 1rem;
    }

    .icons {
        vertical-align: middle;
        font-size: 2rem;
    }

    @media (min-width: 1100px) {
        padding-top: 1rem;
        justify-content: center;
        padding-right: 7.5rem;

        button {
            max-width: 5rem;
        }
    }

    @media (min-width: 1240px) {
        margin-top: -8rem;
    }
`;