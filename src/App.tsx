import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/HomePage'
import IssuePage from './pages/IssuePage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/issues/:slug"
          element={<IssuePage />}
        />
      </Route>
      <Route
  path="/issues"
  element={
    <Navigate
      to="/#issues-archive"
      replace
    />
  }
/>
    </Routes>
  )
}