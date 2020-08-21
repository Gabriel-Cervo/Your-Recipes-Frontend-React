import styled from 'styled-components';

const Button = styled.button`
    min-width: 8rem;
    min-height: 4rem;
    background: #8675a9;
    border: none;
    outline: 0;
    padding: .9rem;
    color: #ffffff;
    font: 400 1.4rem Poppins;
    border-radius: .4rem;
    cursor: pointer;
    transition: opacity .1s;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.4;
        cursor: default;
    }
`;

export default Button;