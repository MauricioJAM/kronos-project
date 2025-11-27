import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SongContainer = styled.article`
 display: flex;
    margin: 1em auto;
    align-items: center;
    background-color: #444;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-sizing: border-box;

    img {
        width: 50px;
        height: 50px;
        border-radius: 8px;
        border: 2px solid ${props => props.theme.colors.primary};

    }

    div {
        display: flex;
        align-items: center;
        width: 100%;
        gap: 0.5em;
        box-sizing: border-box;

        @media (max-width: 722px) {
            flex-wrap: wrap;
            gap: 0.5em;
        }

    }   
    &:hover {
        transform: translateY(-5px);
        background-color: #333;
        box-shadow: 0 5px 15px rgba(240, 219, 79, 0.2);
    }

    i {
            color: #888;
            font-style: normal;
            min-width: 60px;
            text-align: right;

            @media (max-width: 722px) {
                min-width: 50px;
                font-size: 0.9em;
            }
    }
`

const SongLink = styled(Link)`
            color: ${props => props.theme.colors.primary};
            font-size: 1em;
            margin-left: 1em;
            font-weight: 600;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            flex: 1;
            text-decoration: none;
            display: inline-block;



            @media (max-width: 872px) {
                font-size: 1em;
                padding-right: 1em;
                max-width: 100px;

            }

`

export { SongContainer, SongLink };