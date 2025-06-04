export function NavDropdown() {
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost m-1">Connect</div>
      <ul tabIndex={0} className="dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm">
        <li><a href="mailto:ranatasalem@gmail.com">Email</a></li>
        <li><a href="https://github.com/rtasalem">GitHub</a></li>
        <li><a href="www.linkedin.com/in/ranatasalem">LinkedIn</a></li>
        <li><a href="https://orcid.org/0000-0002-8683-561X">ORCID</a></li>
      </ul>
    </div>
  )
}