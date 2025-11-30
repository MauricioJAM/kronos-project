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
const SearchForm = styled.form`
    align-self: center;
    padding-left: 1.5em;
    input {
            border-radius: 25px;
            padding: 0.5em 1em;
            margin: 0.5em auto;
            min-width: 150px;


            @media (max-width: 722px) {
                width: 80%;
                margin: 0.5em auto;
            }

        }

        button {
            border-radius: 10px;
            background-color: ${props => props.theme.colors.primary};
            margin-left: 0.5em;
            padding:5px;
            border: 1px solid ${props => props.theme.colors.primary};
            transition: transform 0.2s ease-in-out;
            cursor: pointer;

            &:hover {
                transform: scale(1.05);
            }
        }
`

export{
    HeaderContainer,
    HeaderNav,
    SearchForm
}