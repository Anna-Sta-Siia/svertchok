import type {
  ReactNode,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import './Button.css'


export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'


type ButtonProps = {
  children:
    ReactNode

  variant?:
    ButtonVariant

  /* Internal navigation */
  to?:
    string

  /* External / normal link */
  href?:
    string

  external?:
    boolean

  /* Real button */
  type?:
    | 'button'
    | 'submit'
    | 'reset'

  disabled?:
    boolean

  onClick?:
    () => void

  className?:
    string
}


export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  external = false,
  type = 'button',
  disabled = false,
  onClick,
  className = '',
}: ButtonProps) {
  const buttonClassName = [
    'button',
    `button--${variant}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')


  /* =========================
     INTERNAL LINK
     ========================= */

  if (to) {
    return (
      <Link
        to={to}
        className={
          buttonClassName
        }
        onClick={
          onClick
        }
      >
        {children}
      </Link>
    )
  }


  /* =========================
     EXTERNAL LINK
     ========================= */

  if (href) {
    return (
      <a
        href={href}
        className={
          buttonClassName
        }
        target={
          external
            ? '_blank'
            : undefined
        }
        rel={
          external
            ? 'noopener noreferrer'
            : undefined
        }
        onClick={
          onClick
        }
      >
        {children}
      </a>
    )
  }


  /* =========================
     REAL BUTTON
     ========================= */

  return (
    <button
      type={type}
      className={
        buttonClassName
      }
      disabled={
        disabled
      }
      onClick={
        onClick
      }
    >
      {children}
    </button>
  )
}