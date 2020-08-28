import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: #f0f0f0;
    padding: 2rem 0;
    border-radius: .5rem;
    margin-top: 2.5rem;
    min-height: 80vh;

    Button {
        margin-top: 30rem;
        width: 100%;
        max-width: 40rem;
        border-radius: 15rem;
    }
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
`;


export const Image = styled.div`
    width: 20rem;
    height: 20rem;
    border-radius: 15rem;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom: 2rem;
    border: 2px solid #8675a9;
`;

export const Title = styled.h1`
    font: 500 2.5rem Archivo;
    letter-spacing: 1px;
    padding-bottom: .5rem;
`;


export const Divider = styled.div`
    width: 80%;
    height: 1px;
    background: #ccc;
`;

export const Description = styled.p`
    font: 400 1.4rem Poppins;
    padding: 1rem 0;
    padding-bottom: .5rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: justify;

    ${Title} {
        font-size: 2rem;
        padding-bottom: 1rem;
    }

    ${Divider} {
        margin-bottom: 1rem;
        width: 100%;
    }
`;

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: .5rem 2rem;
    text-decoration: none;
    list-style-type: none;

    li {
        font: 500 1.6rem Poppins;

        & + li {
            padding-top: 1rem;
        }
    }
`;