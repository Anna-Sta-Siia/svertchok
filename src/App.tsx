import {
  Route,
  Routes,
} from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import IssuesPage from './pages/IssuesPage'
import IssuePage from './pages/IssuePage'
import AuthorsPage from './pages/AuthorsPage'
import AuthorPage from './pages/AuthorPage'
import InterviewsPage from './pages/InterviewsPage'


export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />

        <Route
          path="/issues"
          element={<IssuesPage />}
        />

        <Route
          path="/issues/:slug"
          element={<IssuePage />}
        />

        <Route
          path="/authors"
          element={<AuthorsPage />}
        />

        <Route
          path="/authors/:authorId"
          element={<AuthorPage />}
        />

        <Route
          path="/interviews"
          element={<InterviewsPage />}
        />
      </Route>
    </Routes>
  )
}
