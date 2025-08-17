import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dropdownItems } from '../../constants/dropdown-items'

export function NavDropdown() {
  return (
    <div className="dropdown dropdown-center">
      <button tabIndex={0} role='button'>Connect</button>
      <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box">
        {dropdownItems.map(({ label, href, icon }) => (
          <li key={label}>
            <a href={href} target="_blank">
              <FontAwesomeIcon icon={icon} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
