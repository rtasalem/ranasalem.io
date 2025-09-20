import Link from 'next/link'
import { NavDropdown } from './dropdown'

export function NavLinks() {
  return (
    <ul className='menu menu-horizontal font-semibold'>
      <li><Link href='/about'>About</Link></li>
      <li><Link href='/portfolio'>Portfolio</Link></li>
      <li><Link href='/blog'>Blog</Link></li>
      <li><Link href='/RANA_SALEM_CV.pdf' download='Rana_Salem_CV.pdf' target='_blank'>CV</Link></li>
      <li><NavDropdown /></li>
    </ul>
  )
}
