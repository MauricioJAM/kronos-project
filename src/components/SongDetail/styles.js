import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SongDetailContainer = styled.section`
    position: relative;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    color: #fff;
    overflow: hidden;
    margin: 2em
`

const SongDetailCard = styled.div`
    max-width: 800px;
    width: 100%;
    padding: 2rem;
    border-radius: 15px;
    background: no-repeat center/cover;
   
`

const BackLink = styled(Link)`
     display: inline-flex;
        align-items: center;
        gap: 0.5rem;

        color: #F0DB4F;
        font-size: 1rem;
        font-weight: 600;

        text-decoration: none;
        padding: 0.4rem 0.8rem;

        border-radius: 8px;
        transition: background 0.2s ease, transform 0.15s ease;
        
        :hover {
            background: rgba(240, 219, 79, 0.15);
            transform: translateX(-3px);
        }
        :active {
            transform: translateX(-1px);
        }

        @media (max-width: 768px) {
            font-size: 0.9rem;
            padding: 0.3rem 0.6rem;
        }
`

const SongDetailDescription = styled.div`
    margin-bottom: 1.2rem;
    align-content: flex-end;
    height: 100%;

    h2 {
        font-size: 2.2rem;
        margin-bottom: 1rem;
    }

    p {
        line-height: 1.7;
        margin-bottom: 0.6rem;
    }

    div {
        max-height: 200px;
        overflow-y: auto;
        text-overflow: ellipsis;
        word-wrap: break-word;
        margin-top: 1rem;
        padding-right: 1rem;
        border-top: 1px solid rgba(255, 255, 255, 0.3);

        h3 {
            margin: 0.5rem 0;
        }

        scrollbar-width: thin;
        scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    }

`


export {
    SongDetailContainer,
    SongDetailCard,
    BackLink,
    SongDetailDescription
}