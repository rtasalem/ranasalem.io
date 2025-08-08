import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dropdownItems } from '../../../constants/dropdown-items'

export function NavDropdown() {
  return (
    <details>
      <summary>Connect</summary>
      <ul className="bg-base-200 rounded-t-none p-2">
        {dropdownItems.map(({ label, href, icon }) => (
          <li key={label}>
            <a href={href} target="_blank">
              <FontAwesomeIcon icon={icon} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </details>
  )
}