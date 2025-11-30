import { useState, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import { useFetchSongs } from '../hooks/useFetchSongs';

import { ThemeProvider } from 'styled-components';
import Theme from '../theme/index';
import GlobalStyles from '../theme/GlobalStyles';
import { AppContainer } from './styles';

const SearchResults = lazy(() => import('./SearchResults'));
const SongDetail = lazy(() => import('./SongDetail'));

function App() {
  const [query, setQuery] = useState("");
  const { songs, loading, error } = useFetchSongs(query);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <AppContainer>
        <Header 
          query={query} 
          setQuery={setQuery} 
        />

        <Suspense fallback={<div style={{ color: "#f0db4f",marginTop:'1em',textAlign:"center" }}>Cargando…</div>}>

          <Routes>
            <Route 
              path="/" 
              element={
                <main>
                  <SearchResults 
                    songs={songs || []} 
                    loading={loading} 
                    error={error} 
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
