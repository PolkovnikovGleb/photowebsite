import {Album} from './type';

export const albumsInitFetch = async (): Promise<Album[]> => {
  try {
    const result = await fetch('/api/albums');
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error fetching album:', error);
    throw error;
  }
};

export const allAlbumsInitFetch = async (): Promise<Album[]> => {
  const res = await fetch('/api/albums');
  const data = await res.json();
  console.log(data);
  return data;
};
