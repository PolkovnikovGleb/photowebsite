import React from 'react';
import {Album} from '../../type/typeAlbum';
import './styles/style.css';

import s from './styles/style.scss';

function AlbumItem({album}: {album: Album}): JSX.Element {
  return (
    <div className={s.album - item}>
      <div className={s.album - item__text}>
        <h3>{album.title}</h3>
        <h5>{album.description}</h5>
      </div>
      <img className={s.album - item__img} src={album.url} alt="photoAlbum" />
    </div>
  );
}

export default AlbumItem;
