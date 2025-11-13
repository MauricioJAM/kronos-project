import Song from '../Song';
import './style.css'

const SearchResults = ({songs, addToLibrary}) =>{
    
    return(
        <section className='searchResults'>
        <h2>Songs</h2>
        <div>
            {
                songs.map((song)=> {
                    return(
                        <Song key={song.id} song={song} onAdd={addToLibrary}/>
                    );
                })
            }
            
        </div>
        </section>
    )

}

export default SearchResults;