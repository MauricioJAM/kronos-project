import { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import { useFetchSongs } from '../hooks/useFetchSongs';

import { ThemeProvider } from 'styled-components';
import Theme from '../theme/index';
import GlobalStyles from '../theme/GlobalStyles';
import { AppContainer } from './styles';

const SearchResults = lazy(() => import('./SearchResults'));
const Library = lazy(() => import('./Library'));
const SongDetail = lazy(() => import('./SongDetail'));

function App() {
  const [query, setQuery] = useState("");
  const [library, setLibrary] = useState([]);

  const { songs, loading, error } = useFetchSongs(query);

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
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <AppContainer>
        <Header 
          query={query} 
          setQuery={setQuery} 
          library={library} 
        />

        <Suspense fallback={<div style={{ color: "#f0db4f",marginTop:'1em',textAlign:"center" }}>Cargando…</div>}>

          <Routes>
            <Route 
              path="/" 
              element={
                <main>
                  <Library library={library} />

                  <SearchResults 
                    songs={songs || []} 
                    loading={loading} 
                    error={error} 
                    addToLibrary={addToLibrary} 
                  />
                </main>
              } 
            />

            <Route 
              path="/song" 
              element={<SongDetail />} 
            />
          </Routes>

        </Suspense>

      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
