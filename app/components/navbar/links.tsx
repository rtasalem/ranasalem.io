import { NavDropdown } from "./dropdown/dropdown"

export function NavLinks() {
  return (
    <ul className="menu menu-horizontal">
      <li><a href="/experience">experience</a></li>
      <li><a href="/projects">projects</a></li>
      <li><a href="Rana_Salem_CV.pdf" download="Rana_Salem_CV.pdf" target="_blank">cv</a></li>
      <li><a href="/blog">blog</a></li>
      <li><a href="/gear">gear</a></li>
      <li><NavDropdown /></li>
    </ul>
  )
}