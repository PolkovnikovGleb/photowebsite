import React from 'react';
import {Album} from './type';
import './styles/style.css';

function AlbumItem({album}: {album: Album}): JSX.Element {
  return (
    <div className="albumItem">
      <div className="albumItem-text">
        <h3>{album.title}</h3>
        <h5>{album.description}</h5>
      </div>
      <img className="albumItem-img" src={album.url} alt="photoAlbum" />
    </div>
  );
}

export default AlbumItem;
