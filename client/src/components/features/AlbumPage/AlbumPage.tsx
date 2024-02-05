import {RootState} from 'Redux/store';
import {useSelector} from 'react-redux';
import React from 'react';
import AlbumItem from './AlbumItem';

function AlbumPage(): JSX.Element {
  const albums = useSelector((stor: RootState) => stor.albums.albums);
  return (
    <div>
      <h1>Страница с албомами</h1>
      <div>
        {albums.map((album) => (
          <AlbumItem key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
}

export default AlbumPage;
