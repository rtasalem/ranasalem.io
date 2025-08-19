import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { dropdownItems } from '../../constants/dropdown-items'

export function NavDropdown() {
  return (
    <div className='dropdown dropdown-center'>
      <button tabIndex={0} className='flex items-center gap-1.5'>
        <div>Connect</div>
        <FontAwesomeIcon icon={faCaretDown} />
      </button>
      <ul tabIndex={0} className='dropdown-content menu bg-base-300 rounded-box'>
        {dropdownItems.map(({ label, href, icon }) => (
          <li key={label}>
            <a href={href} target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={icon} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
