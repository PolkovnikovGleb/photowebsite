import {Album} from './type';

export const albumsInitFetch = async (): Promise<Album[]> => {
  const result = await fetch('/api/albums');
  const data = result.json();
  return data;
};

export const allAlbumsInitFetch = async (): Promise<Album[]> => {
  const res = await fetch('/api/albums');
  const data = await res.json();
  return data;
};
