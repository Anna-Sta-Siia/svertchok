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


export type ButtonSize =
  | 'large'
  | 'medium'
  | 'small'


type ButtonProps = {
  children:
    ReactNode

  variant?:
    ButtonVariant

  size?:
    ButtonSize

  /* Navigation interne */
  to?:
    string

  /* Lien externe */
  href?:
    string

  external?:
    boolean

  /* Vrai bouton */
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
  size = 'medium',
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
    `button--${size}`,
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