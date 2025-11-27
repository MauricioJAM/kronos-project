import Song from '../Song'
import { LibrarySection } from './styles';
const Library = ({isOpen,toggleLibrary,library}) => {
    return(
        <LibrarySection library= {isOpen ? 'open' : ''}>
            <div>
                <h2>Library</h2>
                <svg onClick={toggleLibrary} className='close-library icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0db4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10l4 4m0 -4l-4 4" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>
            </div>
            <div>
                        {
                            library.length === 0 ? (
                                <p>No tienes canciones en tu librería aún</p>
                            ):(
                                library.map((song)=> {
                                return(
                                    <Song key={song.id} song={song} />
                                );
                            })
                    )           
                }
                        
            </div>
        </LibrarySection>   
    )
}

export default Library;