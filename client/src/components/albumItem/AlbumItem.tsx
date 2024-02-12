import React from 'react';
import {Album} from '../../types/typeAlbum';

import s from './styles/style.module.scss';
import BaseButton from '../ui/BaseButton';

function AlbumItem({album}: {album: Album}): JSX.Element {
  return (
    <div className={s.album}>
      <img className={s.album__img} src={album.url} alt="photoAlbum" />
      <div className={s.album__content}>
        <div className={s.album__text}>
          <h3>{album.title}</h3>
          <h5>{album.description}</h5>
        </div>
        <BaseButton className={s.album__button} type="submit">
          Подробнее
        </BaseButton>
      </div>
    </div>
  );
}

export default AlbumItem;
