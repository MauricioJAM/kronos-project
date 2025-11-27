import styled from 'styled-components';

const Results = styled.section`
    width: 55%;
    padding: 2em 4em 1em;
    margin: 0 auto;

    @media(max-width:722px) {
        width: 90%;
        padding: 1em 2em 1em;
    }

    h2 {
        font-size: 24px;
        color: #fff;
    }

    div {
        width: 100%;
        justify-content: center;
        align-content: center;
    }
`
export { Results };