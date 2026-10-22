import type {
  ReactNode,
} from 'react'

import './FilterPanel.css'

type FilterPanelProps = {
  children: ReactNode
  ariaLabel: string
  className?: string
}

export default function FilterPanel({
  children,
  ariaLabel,
  className = '',
}: FilterPanelProps) {
  return (
    <section
      className={`filter-panel ${className}`.trim()}
      aria-label={ariaLabel}
    >
      {children}
    </section>
  )
}
