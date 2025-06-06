import { NavbarBrand } from "./brand"
import { NavLinks } from "./links"
import { ThemeToggle } from "./themes/theme-toggle"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm text-base-content">
      <div className="navbar-start">
        <NavbarBrand />
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavLinks />
      </div>
      <div className="navbar-end">
        <ThemeToggle />
      </div>
    </div>
  )
}
