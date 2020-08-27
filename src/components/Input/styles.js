import styled from 'styled-components';

const InputBlock = styled.div`
  position: relative;

    & + & {
        margin-top: 1.4rem;
    }

    label {
        font-size: 1.4rem;
        color: #606060;
    }

    input {
        width: 100%;
        height: 5.6rem; 
        margin-top: 0.8rem;
        border-radius: 0.8rem;
        background: #f8f8fc;
        border: 1px solid ${props => props.showWarning ? "#ea5455" : "#e6e6f0"};
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;

        &:focus {
            border: 1px solid #c3aed6;
        }
    }

    input[type="file"] {
        background: transparent;
        padding-top: 1.5rem;
    }
`;

export default InputBlock;