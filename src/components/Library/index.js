import { useDispatch } from 'react-redux';
import Song from '../Song'
import { LibrarySection } from './styles';
import { useSelector } from 'react-redux';
import { removeSong, selectLibraryError, selectLibraryLoading, selectLibrarySongs } from '../../redux/state/librarySlice';
import { Loader } from '../Loader';
const Library = ({isOpen,toggleLibrary}) => {
  const dispatch = useDispatch()
  const songs = useSelector(selectLibrarySongs)
  const error = useSelector(selectLibraryError)
  const loading = useSelector(selectLibraryLoading)
 

  const handleRemove = (id) =>{
    dispatch(removeSong(id))
  }
    return(
        <LibrarySection library= {isOpen ? 'open' : ''}>
            <div>
                <h2>Library</h2>
                <svg onClick={toggleLibrary} className='close-library icon icon-tabler icons-tabler-outline icon-tabler-square-rounded-x' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f0db4f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10l4 4m0 -4l-4 4" /><path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" /></svg>
            </div>
            <div>
                        {
                            error ? (
                                <p>Error al cargar tu libreria.</p>
                            ) : loading ? (
                                <Loader/>
                            ):
                            ( 
                                songs.length === 0 ? (
                                <p>No tienes canciones en tu librería aún</p>
                                ):(
                                    songs.map(song=> (
                                        <Song key={song.id} song={song} source="library" onRemove={ () => handleRemove(song.id)}/>
                                        )
                                    )
                                )
                            )   
                }
                        
            </div>
        </LibrarySection>   
    )
}

export default Library;