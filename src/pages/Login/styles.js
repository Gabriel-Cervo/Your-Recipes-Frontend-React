import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    padding:  5rem 2rem;
    border-radius: .5rem;
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    button {
        width: 100%;
        margin-top: 2.5rem;
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