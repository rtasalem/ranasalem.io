import Link from 'next/link'

export function NavLinks() {
  return (
    <>
      <li><Link href='/about'>About</Link></li>
      <li><Link href='/portfolio'>Portfolio</Link></li>
      <li><Link href='/blog'>Blog</Link></li>
      <li><Link href='/RANA_SALEM_CV.pdf' download='Rana_Salem_CV.pdf' target='_blank'>CV</Link></li>
      <li><Link href='/contact'>Contact</Link></li>
    </>
  )
}
