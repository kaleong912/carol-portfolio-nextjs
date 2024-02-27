import Link from 'next/link'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const NavLink = ({ href, title }) => {
    const pathname = usePathname()

  return (
    <Link href={href} className={`block py-2 pl-3 pr-4 ${ pathname == href ? "border-b-4" : ""}`}>{title}</Link>
  )
}

export default NavLink