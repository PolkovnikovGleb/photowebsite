export interface Album {
  id: number
  title: string
  description: string
  url: string
  userId: number
}

export interface AlbumsState {
  albums: Album[]
  error: string | undefined
}
