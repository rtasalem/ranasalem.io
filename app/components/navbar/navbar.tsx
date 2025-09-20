import { NavbarBrand } from './brand'
import { NavLinks } from './links'
import { ThemeToggle } from './theme/theme-toggle'

export default function Navbar() {
  return (
    <div className='navbar font-mono'>
      <div className='navbar-start'>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <NavLinks />
          </ul>
        </div>
        <NavbarBrand />
      </div>
      <div className='navbar-center hidden lg:flex'>
        <NavLinks />
      </div>
      <div className='navbar-end'>
        <ThemeToggle />
      </div>
    </div>
  )
}
