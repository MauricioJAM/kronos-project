import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  songs: [],
  loading: false,
  error: null,
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addSong: (state, action) => {
      const exists = state.songs.some(song => song.id === action.payload.id);
      if (!exists) {
        state.songs.push(action.payload);
        state.error = null;
      } else {
        state.error = 'Esta canción ya está en tu biblioteca';
      }
    },
    removeSong: (state, action) => {
      state.songs = state.songs.filter(song => song.id !== action.payload);
      state.error = null;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    resetLibrary: (state) => {
      state.songs = [];
      state.error = null;
    }
  },
});

export const { addSong, removeSong, setLoading, setError, clearError, resetLibrary } = librarySlice.actions;
export default librarySlice.reducer;

export const selectLibrarySongs = (state) => state.library.songs;
export const selectLibraryLoading = (state) => state.library.loading;
export const selectLibraryError = (state) => state.library.error;
export const selectLibraryCount = (state) => state.library.songs.length;