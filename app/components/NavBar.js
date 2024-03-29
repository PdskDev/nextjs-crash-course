import Link from "next/link";

const NavBar = () => {
  return (
  <div className="navbar bg-base-100">
    <div className="flex-1">
        <Link href='/' className="btn btn-ghost normal-case text-xl">NadetDev NextJS</Link>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/about/contact">Contact</Link></li>
                <li><Link href="/githubusers">GitHub Users</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar