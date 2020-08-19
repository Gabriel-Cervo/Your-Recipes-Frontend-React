import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    padding:  5rem 2rem;
    border-radius: .5rem;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        width: 100%;
        max-width: 34rem;
        margin-top: 2.5rem;
        cursor: pointer;
        transition: opacity .2s linear;

        &:hover {
            opacity: 0.8;

        }
    }

    span {
        font: 400 1.4rem Poppins;
        color: #606060;
        padding-top: 1rem;
        align-self: flex-end;

        a {
            text-decoration: none;
            color: inherit;
            transition: color .2s ease;

            &:hover {
                color: #c3aed6;
            }
        }
    }
`;

export const Title = styled.h1`
    font: 500 2.2rem Archivo;
    letter-spacing: 1px;
    padding-bottom: 1.25rem;
`;

export const Subtitle = styled.h5`
    font: 450 1.5rem Poppins;
    padding-bottom: 3rem;
`;