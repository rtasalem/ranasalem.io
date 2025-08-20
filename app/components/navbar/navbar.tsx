import { NavbarBrand } from './brand'
import { NavLinks } from './links'

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
      </div>
    </div>
  )
}
