import {RootState} from 'store/store';
import {useSelector} from 'react-redux';
import React from 'react';
import AlbumItem from './AlbumItem';

import s from './styles/style.scss';

function AlbumPage(): JSX.Element {
  const albums = useSelector((stor: RootState) => stor.albums.albums);
  return (
    <div className={s.album - page}>
      {albums.map((album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </div>
  );
}

export default AlbumPage;
