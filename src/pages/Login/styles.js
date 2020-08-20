import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    padding: 5rem 2rem;
    border-radius: .5rem;

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: auto;
        grid-template-areas: 
        "header header"
        "image form";
        row-gap: 2rem;
        column-gap: 5rem;
        padding: 7rem 5rem;
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
        grid-area: image; 

        img { 
            width: 30rem;
            max-width: 500px;
            padding-bottom: 5rem;
        }

        .cookImg {
            width: 23.5rem;
        }
    }
`;

export const Form = styled.form`
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
    }

    span {
        font: 400 1.4rem Poppins;
        color: #606060;
        padding-top: 1rem;

        a {
            color: inherit;
            transition: color .2s ease;

            &:hover {
                color: #c3aed6;
            }
        }
    }

    @media (min-width: 1024px) { 
        grid-area: form; 
        justify-content: center;
        align-items: stretch;

        button {
            max-width: 100%;
        }

        span {
            align-self: center;
        }
    }
`;

export const TitleContainer = styled.div`
    text-align: center;
    padding-bottom: 1.5rem;
    
    @media (min-width: 1024px) {
        grid-area: header;

        h1 {
            font-size: 3rem;
        }

        h5 {
            font-size: 1.8rem;
        }
    }
`;

export const Title = styled.h1`
    font: 600 2.2rem Archivo;
    letter-spacing: 1px;
    padding-bottom: 1.25rem;
`;

export const Subtitle = styled.h5`
    font: 450 1.5rem Poppins;
`;

export const EmptyFieldWarning = styled.p`
    font: 400 1.5rem Poppins;
    color: #ea5455;
    text-align: center;
`;

export const ApiError = styled.div`
    display: block;
    position: absolute;
    top: 2rem;
    right: 5rem;
    background: red;
    border-radius: .5rem;
    font: 400 1.2rem Poppins;
    color: #fff;
    animation: disappear 5s;
    width: 20rem;
    text-align: center;

    p {
        padding: 1rem 5rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.4rem;
    }

    
    @keyframes disappear {
        50% {
            opacity: 1
        }
        100% {
            opacity: 0;
        }
    }
`;

export const TimerProgress = styled.div`
    position: relative;
    height: 2px;
    width: 0%;
    background: #41444b;
    animation: move 5s;

    @keyframes move {
        25% {
            width: 25%; 
        }

        100% {
            width: 100%;
        }
    }
`;