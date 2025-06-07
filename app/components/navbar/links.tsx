import { NavDropdown } from "./dropdown/dropdown"

export function NavLinks() {
  return (
    <ul className="menu menu-horizontal">
      <li><a href="/experience">Experience</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="RANA_SALEM_CV.pdf" download="RANA_SALEM_CV.pdf" target="_blank">Resume</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><NavDropdown /></li>
    </ul>
  )
}