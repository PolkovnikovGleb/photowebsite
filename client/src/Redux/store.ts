import {configureStore} from '@reduxjs/toolkit';
import albumsSlice from 'components/features/AlbumPage/albumsSlice';
import {useDispatch} from 'react-redux';

const store = configureStore({
  reducer: {
    albums: albumsSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
