import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from './api';
import {AlbumsState} from './type';

export const initialState: AlbumsState = {
  albums: [],
  allAlbums: [],
  error: '',
};
export const albumsInit = createAsyncThunk('albums/init', () =>
  api.albumsInitFetch()
);

export const allAlbumsInit = createAsyncThunk('albums/all/init', () =>
  api.allAlbumsInitFetch()
);

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(albumsInit.fulfilled, (state, action) => {
        state.albums = action.payload;
      })
      .addCase(albumsInit.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(allAlbumsInit.fulfilled, (state, action) => {
        state.allAlbums = action.payload;
      })
      .addCase(allAlbumsInit.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default albumsSlice.reducer;
