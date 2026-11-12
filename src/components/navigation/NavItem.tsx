import {
  Link,
} from 'react-router-dom'

import './NavItem.css'


type NavItemProps = {
  label:
    string

  to:
    string

  icon?:
    string

  isActive?:
    boolean
}


export default function NavItem({
  label,
  to,
  icon,
  isActive = false,
}: NavItemProps) {
  return (
    <Link
      to={to}
      className={[
        'nav-item',
        isActive
          ? 'nav-item--active'
          : '',
      ]
        .filter(Boolean)
        .join(' ')}
      aria-current={
        isActive
          ? 'page'
          : undefined
      }
    >
      {icon && (
        <span
          className="nav-item__icon"
          aria-hidden="true"
        >
          {icon}
        </span>
      )}

      <span className="nav-item__label">
        {label}
      </span>
    </Link>
  )
}
