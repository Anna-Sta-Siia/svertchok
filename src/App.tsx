import { Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import IssuePage from './pages/IssuePage'

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />

      <Route
        path="/issues/:slug"
        element={
          <MainLayout>
            <IssuePage />
          </MainLayout>
        }
      />
    </Routes>
  )
}

export default App