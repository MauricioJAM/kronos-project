import Library from '../Library';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { HeaderContainer,HeaderNav, SearchForm } from './styles.js';

const Header = ({query,setQuery}) => {
    const [isLibraryOpen,setIsLibraryOpen] = useState(false);
    const [artistInput, setArtistInput] = useState(query || "");
    const navigate = useNavigate();
    const toggleLibrary = () =>{
        setIsLibraryOpen(!isLibraryOpen);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = (artistInput || '').trim();
        if (!trimmed) return;
        setQuery(trimmed);
        navigate('/');
    }

    return(
        <>
        <HeaderContainer>
            <h1>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F0DB4F" className="icon icon-tabler icons-tabler-filled icon-tabler-square-rounded-letter-k"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M11.676 2.001l.324 -.001c7.752 0 10 2.248 10 10l-.005 .642c-.126 7.235 -2.461 9.358 -9.995 9.358l-.642 -.005c-7.13 -.125 -9.295 -2.395 -9.358 -9.67v-.325c0 -7.643 2.185 -9.936 9.676 -9.999m2.854 5.151a1 1 0 0 0 -1.378 .318l-2.152 3.443v-2.913a1 1 0 0 0 -.883 -.993l-.117 -.007a1 1 0 0 0 -1 1v8a1 1 0 0 0 2 0v-2.914l2.152 3.444a1 1 0 0 0 1.276 .374l.102 -.056l.095 -.068a1 1 0 0 0 .223 -1.31l-2.17 -3.47l2.17 -3.47a1 1 0 0 0 -.318 -1.378" /></svg>
            Kronos
            </h1>
            <HeaderNav>
                <ul>
                    <li onClick={toggleLibrary} className='library-btn'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#F0DB4F" className="icon icon-tabler icons-tabler-filled icon-tabler-library"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.333 2a3.667 3.667 0 0 1 3.667 3.667v8.666a3.667 3.667 0 0 1 -3.667 3.667h-8.666a3.667 3.667 0 0 1 -3.667 -3.667v-8.666a3.667 3.667 0 0 1 3.667 -3.667zm-4.333 10h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0 -2m3 -3h-6a1 1 0 0 0 0 2h6a1 1 0 0 0 0 -2m-1 -3h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0 -2" /><path d="M3.517 6.391a1 1 0 0 1 .99 1.738c-.313 .178 -.506 .51 -.507 .868v10c0 .548 .452 1 1 1h10c.284 0 .405 -.088 .626 -.486a1 1 0 0 1 1.748 .972c-.546 .98 -1.28 1.514 -2.374 1.514h-10c-1.652 0 -3 -1.348 -3 -3v-10.002a3 3 0 0 1 1.517 -2.605" /></svg></li>
                    <li>Home</li>
                    <li>Profile</li>
                    
                </ul>
                <SearchForm onSubmit={handleSubmit} className="search-form">
                        <input
                        type="text"
                        placeholder="Buscar canción..."
                        value={artistInput}
                        onChange={(e) => setArtistInput(e.target.value)}
                        />
                    <button type="submit">Buscar</button>
                        
                </SearchForm>
            </HeaderNav>
        </HeaderContainer>

        <Library isOpen={isLibraryOpen} toggleLibrary={toggleLibrary} />
      </>
    )
}

export default Header;