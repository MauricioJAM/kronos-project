import styled from "styled-components"
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

export {SearchForm}