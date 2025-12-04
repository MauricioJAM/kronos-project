import styled from 'styled-components';

const HeaderContainer = styled.header`
    font-family: 'Courier New', Courier, monospace;
    h1{
        font-size: 4em;
        text-align: center;
        font-weight: 600;
        padding: 0.5em 0;

        @media (max-width: 722px) {
            font-size: 2.5em;
        }
    }
`

const HeaderNav = styled.nav`
    background-color: #333;
    border: 1px solid ${props => props.theme.colors.primary};
    padding: 0.5em;
    display: flex;
    justify-content: center;
    ul {
        width: fit-content;

        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1em;
        align-items: center;

        li {
            color: ${props => props.theme.colors.primary};
            margin: 0.5em 2em;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;

            &:hover {
                transform: scale(1.2);
            }

            @media (max-width: 722px) {
                margin: 0.5em 1em;
            }

        }

    }

`

export{
    HeaderContainer,
    HeaderNav
}