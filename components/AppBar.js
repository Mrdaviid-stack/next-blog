import Link from "next/link"

export default function AppBar() {
  return (
    <nav className="navbar navbar-expand-md bg-light navbar-light border-bottom">
      <div className="container">
        <a className="navbar-brand">CMS</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link href="/" className="nav-item">Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link href="/" className="nav-item">Projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
