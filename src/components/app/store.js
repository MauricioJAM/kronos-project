import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from '../../redux/state/librarySlice';
import searchReducer from '../../redux/state/searchSlice';

export const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer,
  },
});

export default store;