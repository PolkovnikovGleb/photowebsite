import React from 'react'
import { Album } from '../../types/typeAlbum'

import s from './styles/style.module.scss'

function AlbumItem ({ album }: {album: Album}): JSX.Element {
  const link = 'https://drive.google.com/file/d/1eb61NUFIrwxVWuy2pMKcFxoDy245dtmJ/view?usp=sharing'

  return (
    <div className={s.album}>
      <div className={s.album__text}>
        <h3>{album.title}</h3>
        <h5>{album.description}</h5>
      </div>
      <img className={s.album__img} src={link} alt="photoAlbum" />
    </div>
  )
}

export default AlbumItem
