import { useDispatch, useSelector } from 'react-redux';
import Song from '../Song';
import { Results } from './styles';
import { fetchSongs, selectLastSearch, selectSearchError, selectSearchLoading, selectSearchResults } from '../../redux/state/searchSlice';
import { addSong, selectLibrarySongs } from '../../redux/state/librarySlice';
import { Loader } from '../Loader';

const SearchResults = () => {
    const dispatch = useDispatch();
    const results = useSelector(selectSearchResults)
    const loading = useSelector(selectSearchLoading)
    const error = useSelector(selectSearchError)
    const lastSearch = useSelector(selectLastSearch)
    const librarySongs = useSelector(selectLibrarySongs)

    const handleAddToLibrary= (song) =>{
        const exists = librarySongs.some(s => s.id === song.id)
        if(exists){
            alert(`${song.title} ya esta en tu librería.`)
        }else {
            dispatch(addSong(song))
            alert(`${song.title} agregada a tu librería.`)
        }
        
    }

    return (
        <Results>
            <h2>Songs</h2>

            <div>
                {loading ? (
                    <Loader/>
                ) : error ? (
                    <div>
                        <p>{error.message || 'Ocurrió un error'}</p>
                        <button onClick={()=> dispatch(fetchSongs(lastSearch))}>Reintentar</button>
                        
                    </div>
                ) : (
                    results?.map((song) => (
                        <Song
                            key={song.id}
                            song={song}
                            onAdd= {() => handleAddToLibrary(song)}
                            source="results"
                        />
                    ))
                )}
            </div>
        </Results>
    );
};

export default SearchResults;
