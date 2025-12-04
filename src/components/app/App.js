import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '../Header';

import { ThemeProvider } from 'styled-components';
import Theme from '../../theme/index';
import GlobalStyles from '../../theme/GlobalStyles';
import { AppContainer } from './styles';
import { Loader } from '../Loader';

const SearchResults = lazy(() => import('../SearchResults'));
const SongDetail = lazy(() => import('../SongDetail'));

function App() {
  

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <AppContainer>
        <Header />

        <Suspense fallback={<div style={{display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",     
        width: "100%",  }}><Loader/></div>}>

          <Routes>
            <Route 
              path="/" 
              element={
                <main>
                  <SearchResults/>
                </main>
              } 
            />

            <Route path="/song/:id" element={<SongDetail />} />
          </Routes>

        </Suspense>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
