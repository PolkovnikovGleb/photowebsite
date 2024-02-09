import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router'
import { router } from './configs/router'
import { albumsInit } from './store/Albums/albumsSlice'
import { useAppDispatch } from './store/store'

function App (): JSX.Element {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(albumsInit())
  }, [])

  return (
    <div className="app">
      <Routes>
        {router.map((item) => (
          <Route key={item.id} path={item.path} element={<item.component />} />
        ))}
      </Routes>
    </div>
  )
}

export default App
