import { Link } from 'react-router-dom'

import './NavItem.css'

type NavItemProps = {
  label: string
  to: string
  icon?: string
}

export default function NavItem({
  label,
  to,
  icon,
}: NavItemProps) {
  return (
    <Link
      to={to}
      className="nav-item"
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