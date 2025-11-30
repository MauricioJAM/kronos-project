import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SongContainer = styled.article`
  display: flex;
  align-items: center;
  margin: 1em auto;
  padding: 10px;
  background-color: #444;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    border: 2px solid ${props => props.theme.colors.primary};
    flex-shrink: 0; 
  }

  div {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5em;
    box-sizing: border-box;
    overflow: hidden;
    @media (max-width: 722px) {
      flex-wrap: wrap;
    }
    p{
        text-overflow: ellipsis;
        overflow:hidden;
        white-space: nowrap;
        max-width: 120px;
    }
  i {
    color: #888;
    font-style: normal;
    text-align: right;
    min-width:50px;
    flex-shrink: 0;
  }
  svg{
        min-width: 24px;
        min-height:24px;
        flex-shrink: 0;
    }
  }

  &:hover {
    transform: translateY(-5px);
    background-color: #333;
    box-shadow: 0 5px 15px rgba(240, 219, 79, 0.2);
  }


`

const SongLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-size: 1em;
  font-weight: 600;
  margin-left: 1em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1 1 auto; 
  text-decoration: none;

  @media (max-width: 872px) {
    font-size: 0.95em;
    margin-left: 0.5em;
  }
`


export { SongContainer, SongLink };