import React from 'react';
import {Album} from './type';

function AlbumItem({album}: {album: Album}): JSX.Element {
  return (
    <div>
      {/* <img
        src="https://drive.google.com/file/d/1V4Dx401mQ872EMvFytHAYU7wJwt5-BVd/view?usp=drive_link"
        alt="albumphoto"
      /> */}
      <h3>{album.title}</h3>
      <h5>{album.description}</h5>
    </div>
  );
}

export default AlbumItem;
