import type { ReactNode } from 'react'
import './MainLayout.css'

type MainLayoutProps = {
  children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="site-layout">
      <main>{children}</main>
    </div>
  )
}