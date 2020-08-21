import styled from 'styled-components';
import Button from '../../assets/styles/Button';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    padding: 5rem 2rem;
    border-radius: .5rem;
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 5rem;

    h1 {
        font: 400 2.4rem Archivo;
        letter-spacing: 1px;
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
`;

export const ImageContainer = styled.div`
    display: block;
    padding-bottom: 20px;
    
    img {
        width: 100%;
        max-width: 250px;
    }

    @media (min-width: 1024px) { 
        img { 
            width: 30rem;
            max-width: 500px;
            padding-bottom: 5rem;
        }
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
    display: block;

    h1 {
        font: 400 2.4rem Archivo;
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