import { useState } from 'react';
import { clearError, fetchSongs, setLastSearch } from '../../redux/state/searchSlice.js';
import { useDispatch } from 'react-redux';
import { SearchForm } from './styles.js';

const SearchBar = () => {
    const [artistInput, setArtistInput] = useState("");
    const dispatch = useDispatch()
     const handleSubmit = (e) => {
            e.preventDefault();
            if (artistInput.trim()) {
                dispatch(clearError())
                dispatch(setLastSearch(artistInput))
                dispatch(fetchSongs(artistInput))
            }
        }
    return(
        <SearchForm onSubmit={handleSubmit} className="search-form">
                        <input
                        type="text"
                        placeholder="Buscar canción..."
                        value={artistInput}
                        onChange={(e) => setArtistInput(e.target.value)}
                        />
                    <button type="submit">Buscar</button>
        </SearchForm>
    )
}

export default SearchBar