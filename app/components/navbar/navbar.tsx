import { NavbarBrand } from './brand'
import { NavLinks } from './links'
import { ThemeToggle } from './themes/theme-toggle'



export default function Navbar() {
  return (
    <div className='navbar font-mono'>
      <div className='navbar-start'>
        <NavbarBrand />
      </div>
      <div className='navbar-center hidden lg:flex'>
        <NavLinks />
      </div>
      <div className='navbar-end'>
        {process.env.ENABLE_THEME_TOGGLE === 'true' && <ThemeToggle />}
      </div>
    </div>
  )
}
