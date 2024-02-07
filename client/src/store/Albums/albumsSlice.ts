import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import * as api from '../../api/apiAlbums';
import {AlbumsState} from '../../types/typeAlbum';

export const initialState: AlbumsState = {
  albums: [],
  error: '',
};
export const albumsInit = createAsyncThunk('albums/init', () =>
  api.albumsInitFetch()
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
      });
  },
});

export default albumsSlice.reducer;
