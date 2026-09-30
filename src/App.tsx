import { Route, Routes } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import IssuePage from './pages/IssuePage'

import { getCurrentSeason } from './utils/getCurrentSeason'

function App() {
const season = getCurrentSeason()

  return (
    <div
      className="app-theme"
      data-season={season}
    >
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <HomePage season={season} />
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
    </div>
  )
}

export default App