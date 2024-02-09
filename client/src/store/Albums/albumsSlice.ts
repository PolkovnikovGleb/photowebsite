import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as api from '../../api/apiAlbums'
import { AlbumsState } from '../../types/typeAlbum'

export const initialState: AlbumsState = {
  albums: [],
  error: ''
}
export const albumsInit = createAsyncThunk('albums/init', async () =>
  await api.albumsInitFetch()
)

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers (builder: any) {
    builder
      .addCase(albumsInit.fulfilled, (state: any, action: any) => {
        state.albums = action.payload
      })
      .addCase(albumsInit.rejected, (state: any, action: any) => {
        state.error = action.error.message
      })
  }
})

export default albumsSlice.reducer
