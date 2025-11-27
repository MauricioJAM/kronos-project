import styled from 'styled-components';

const LibrarySection = styled.section`
    position: fixed;
    top: 0;
    width: 500px;
    height: 100vh;
    background-color: #222;
    color: white;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
    overflow-y: auto;
    transition: left 0.4s ease;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    left: ${props => props.library === 'open' ? '0' : '-520px'};

    @media(max-width:500px) {
        width: 100%
    }


    div:first-child {
        display: flex;
        width: 100%;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 3em 2em;

        h2 {
            font-size: 24px;
        }

        svg {
            cursor: pointer;
        }
    }

    div:last-child {
        padding: 0 2em;
    }
`        

export { LibrarySection };
