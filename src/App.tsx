import {
  Route,
  Routes,
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/HomePage'
import IssuesPage from './pages/IssuesPage'
import IssuePage from './pages/IssuePage'

import AuthorsPage from './pages/AuthorsPage'
import AuthorPage from './pages/AuthorPage'

export default function App() {
  return (
    <Routes>
      <Route
        element={
          <MainLayout />
        }
      >
        {/* =====================
            HOME
            ===================== */}

        <Route
          path="/"
          element={
            <HomePage />
          }
        />


        {/* =====================
            ISSUES
            ===================== */}

        <Route
          path="/issues"
          element={
            <IssuesPage />
          }
        />

        <Route
          path="/issues/:slug"
          element={
            <IssuePage />
          }
        />


        {/* =====================
            AUTHORS
            ===================== */}

        <Route
          path="/authors"
          element={
            <AuthorsPage />
          }
        />

        <Route
          path="/authors/:authorId"
          element={
            <AuthorPage />
          }
        />
      </Route>
    </Routes>
  )
}