import Link from 'next/link'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const NavLink = ({ href, title }) => {
    const pathname = usePathname()

  return (
    <Link href={href} className={`block pt-2 md:py-2 pl-3 pr-4 nav-link ${ pathname == href ? "nav-link-selected" : ""}`}>{title}</Link>
  )
}

export default NavLink