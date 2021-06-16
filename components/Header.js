import Link from "next/link"

import styles from "../styles/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <a>Ujjwal Singh</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
