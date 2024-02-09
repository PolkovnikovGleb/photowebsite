import { RootState } from '../../store/store'
import { useSelector } from 'react-redux'
import React from 'react'
import AlbumItem from '../../components/albumItem/AlbumItem'

import s from './styles/style.module.scss'
import { Album } from '../../types/typeAlbum'

function AlbumPage (): JSX.Element {
  const albums = useSelector((stor: RootState) => stor.albums.albums)
  return (
    <div className={s.album}>
      {albums.map((album: Album) => (
        <AlbumItem key={album.id} album={album} />
      ))}
    </div>
  )
}

export default AlbumPage
