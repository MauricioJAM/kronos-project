import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchSongs = createAsyncThunk(
  'search/fetchSongs',
  async (artist, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:4000/api/songs', {
        params: { artist }
      });
      return response.data.songs || [];
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.error || error.message || 'Error al buscar canciones'
      );
    }
  }
);

const initialState = {
  results: [],
  loading: false,
  error: null,
  lastSearch: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
    setLastSearch: (state, action) => {
      state.lastSearch = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
        state.error = null;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.results = [];
      });
  },
});

export const { resetResults, clearError, setLastSearch } = searchSlice.actions;
export default searchSlice.reducer;

export const selectSearchResults = (state) => state.search.results;
export const selectSearchLoading = (state) => state.search.loading;
export const selectSearchError = (state) => state.search.error;
export const selectLastSearch = (state) => state.search.lastSearch;