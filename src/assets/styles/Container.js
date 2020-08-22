import styled from 'styled-components';

const Container = styled.div`
    width: 90vw;
    max-width: 1000px;
    max-height: 100%;

    @media (min-width: 1024px) {
        max-width: 1024px;
    }
`;

export default Container;