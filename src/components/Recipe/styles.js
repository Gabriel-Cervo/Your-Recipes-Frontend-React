import styled from 'styled-components';

export const  Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    background: #fff;
    color: #606060;
    border-radius: .4rem;
    margin-top: 3.5rem;
    padding: 1.5rem 1.2rem;

    &:first-child {
        margin-top: 0;
    }

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }

    @media (min-width: 1100px) {    
        max-width: 25rem;
        margin-left: 2rem;
        padding: 1rem;

        &:first-child {
            margin-top: 3.5rem;
        }
    }
`;

export const Image = styled.div`
    width: 19rem;
    height: 19rem;
    border-radius: .4rem;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin-bottom: 1rem;
    border: 1px solid #8675a9;
    transition: width .3s, height .3s;

    &:hover {
            width: 21rem;
            height: 21rem;
        }

    @media (min-width: 1100px) {
        width: 15rem;
        height: 15rem;
        
        &:hover {
            width: 17rem;
            height: 17rem;
        }
    }
`;

export const Content = styled.div`
    padding-top: .2rem;
    text-align: center;
   
    h1 {
        font: 550 2rem Archivo;
    }

    p {
        font-size: 1.2rem;
        text-align: center;
        padding-top: .2rem;
        color: #8675a9;
    }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 3rem;
`;

export const IconsWrapper = styled.div`
    padding: 0 2rem;
    
    button {
        padding: .8rem 1rem;
        margin-top: .3rem;
        width: .5rem;
        border: 0;
        outline: 0;
        cursor: pointer;
        color: #8675a9;
        background: transparent;
        transition: opacity .2s;


        & + button {
            margin-left: 2rem;
        }

        &:hover {
            opacity: .7;
        }
    }
`;

export const Details = styled.div`
    button {
        outline: 0;
        border: 1px solid #8675a9;
        border-radius: .3rem;
        font: 400 1.4rem Poppins;
        padding: .5rem;
        cursor: pointer;
        background: #8675a9;
        transition: opacity .2s;

        &:hover {
            opacity: 0.8;
        }

        a {
            color: #f0f0f0;
            text-decoration: none;
        }
    }
`;  