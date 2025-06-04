import { NavDropdown } from "./dropdown"

export function NavLinks() {
  return (
    <ul className="menu menu-horizontal px-1">
      <li><a href="/blog">Blog</a></li>
      <li><a href="/experience">Experience</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><NavDropdown /></li>
    </ul>
  )
}