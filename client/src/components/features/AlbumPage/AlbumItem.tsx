import React from 'react';
import {Album} from './type';
import './styles/style.css';

function AlbumItem({album}: {album: Album}): JSX.Element {
  return (
    <div>
      <img className="albumImg" src={album.url} alt="photoAlbum" />
      <h3>{album.title}</h3>
      <h5>{album.description}</h5>
    </div>
  );
}

export default AlbumItem;
