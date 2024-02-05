export type Album = {
  id: number;
  title: string;
  description: string;
  url: string;
  userId: number;
};

export type AlbumsState = {
  albums: Album[];
  allAlbums: Album[];
  error: string | undefined;
};
