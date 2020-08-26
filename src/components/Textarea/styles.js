import styled from 'styled-components';

export const TextareaBlock = styled.div`
    position: relative;

    label {
        font-size: 1.4rem;
    }

    textarea {
        width: 100%;
        min-height: 8rem;
        height: 16rem;
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: #fff;
        border: 1px solid ${props => props.showWarning ? "#ea5455" : "#e6e6f0"};        
        outline: 0;
        resize: vertical;
        padding: 1.2rem 1.6rem;
        font: 1.6rem Archivo;
    }

    textarea:focus {
        border: 1px solid #c3aed6;
    }
`;