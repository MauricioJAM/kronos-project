import '../../src/style.css';
import  Header  from './Header';
import SearchResults from './SearchResults';
import { useState, useEffect } from 'react';
import Library from './Library';
import { useFetchSongs } from '../hooks/useFetchSongs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SongDetail from './SongDetail';


function App() {
  const[query,setQuery] = useState("");
  const [library,setLibrary] = useState([]);
  const {songs,loading,error} = useFetchSongs(query);
  

    useEffect(() => {
      if (library.length > 0) {
        console.log("Librería actualizada:", library);
      }
    }, [library]);

    const addToLibrary = (song) => {
    if (!library.some(item => item.id === song.id)) {
      setLibrary([...library, song]);
    } else {
      alert(`${song.title} ya está en tu librería.`);
    }
  };

  return (
    <BrowserRouter>
    <div className='App'>
      <Header query={query} setQuery={setQuery} library={library}/>
      <Routes>
        <Route path="/" element={
          <main className="home">
            <Library library={library}/>
            <SearchResults songs={songs ||[]} loading={loading} error={error} addToLibrary={addToLibrary} />
          </main>
        } />

        <Route path="/song" element={<SongDetail />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
