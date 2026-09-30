import type { ReactNode } from 'react'

import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'

import './MainLayout.css'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main className="site-layout">
        {children}
      </main>

      <SiteFooter />
    </div>
  )
}