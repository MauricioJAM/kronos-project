import Song from '../Song';
import { Results } from './styles';

const SearchResults = ({songs,loading,error, addToLibrary, onRetry}) =>{
    
    return(
        <Results>
        <h2>Songs</h2>
        <div>
            {
                                loading ? (
                                    <p>Loading...</p>
                                ) : error ? (
                                    <div>
                                        <p>{error.message || 'Ocurrió un error'}</p>
                                        {typeof onRetry === 'function' && (
                                            <button onClick={onRetry}>Reintentar</button>
                                        )}
                                    </div>
                                ) : (
                                    songs.map((song)=> {
                                        console.log(song);
                                        return(
                                              
                                                    <Song song={song} onAdd={addToLibrary}/>
                                                
                                        );
                                })
                                )
            }
            
        </div>
        </Results>
    )

}

export default SearchResults;