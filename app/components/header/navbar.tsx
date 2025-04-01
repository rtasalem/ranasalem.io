import NavbarBrand from "./brand"
import NavLinks from "./links"
import ModeToggle from "./mode-toggle"

export default function Navbar() {
  return (
    <div className="navbar bg-neutral shadow-sm">
      <div className="navbar-start">
        <NavbarBrand />
      </div>
      <div className="navbar-center hidden lg:flex">
        <NavLinks />
      </div>
      <div className="navbar-end">
        <ModeToggle />
      </div>
    </div>
  )
}
