import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import './Button.css'

type ButtonVariant =
  | 'primary'
  | 'outline'
  | 'ghost'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant

  to?: string
  href?: string

  onClick?: () => void

  external?: boolean
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  external = false,
  className = '',
}: ButtonProps) {
  const classes = [
    'button',
    `button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
      >
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  )
}