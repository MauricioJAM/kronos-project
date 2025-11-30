import { useDispatch } from 'react-redux';
import Song from '../Song';
import { Results } from './styles';
import { addSong } from '../../redux/actions';

const SearchResults = ({ songs, loading, error, onRetry }) => {
    const dispatch = useDispatch();

    const handleAdd= (song) =>{
        dispatch(addSong(song))
    }


    return (
        <Results>
            <h2>Songs</h2>

            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <div>
                        <p>{error.message || 'Ocurrió un error'}</p>
                        {typeof onRetry === 'function' && (
                            <button onClick={onRetry}>Reintentar</button>
                        )}
                    </div>
                ) : (
                    songs?.map((song) => (
                        <Song
                            key={song.id}
                            song={song}
                            onAdd= {() => handleAdd(song)}
                            source="results"
                        />
                    ))
                )}
            </div>
        </Results>
    );
};

export default SearchResults;
