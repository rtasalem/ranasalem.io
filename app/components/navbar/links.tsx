import { NavDropdown } from "./dropdown"

export function NavLinks() {
  return (
    <ul className="menu menu-horizontal font-semibold">
      <li><a href="/about">About</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="Rana_Salem_CV.pdf" download="Rana_Salem_CV.pdf" target="_blank">CV</a></li>
      <li><a href="/gear">Gear</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><NavDropdown /></li>
    </ul>
  )
}
