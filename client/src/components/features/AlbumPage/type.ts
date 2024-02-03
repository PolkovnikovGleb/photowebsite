export type Album = {
  id: number;
  title: string;
  description: string;
  userId: number;
};

export type AlbumsState = {
  albums: Album[];
  allAlbums: Album[];
  error: string | undefined;
};
